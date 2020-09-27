import React, { useEffect, useReducer, FunctionComponent } from 'react';
import { ResourceModel } from '../models';
import firebase from '../firebase';
import Loading from '../components/Loading';

type State = {
  ready: boolean;
  resources: Array<ResourceModel>;
};

type Action = {
  payload: ResourceModel;
  type: string;
};

const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case 'added': return { ...state, ready: true, resources: [...state.resources, action.payload]};
    case "modified": return { ...state, ready: true, animes: state.resources.map(a => a.id !== action.payload.id ? a : action.payload) };
    case "removed": return { ...state, ready: true, animes: state.resources.filter(a => a.id !== action.payload.id) };
    default: return state;
  }
};

const INITIAL_STATE: State = {
  ready: false,
  resources: new Array<ResourceModel>()
};

type Props = {
  as: FunctionComponent<{resources: Array<ResourceModel> }>;
};

const Resources: React.FC<Props> = ({ as: component }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    firebase.firestore().collection('resources').onSnapshot(snapshot => {
      for (const { doc, type } of snapshot.docChanges()) {
        const payload = { id: doc.id, ...doc.data()} as ResourceModel;
        dispatch({type, payload});
      }
    })
  }, []);

  if (!state.ready) return <Loading />;

  return React.createElement(component, { resources: state.resources });
};

export default Resources;
