import React from 'react';
import NewResourceForm from '../components/NewResourceForm';
import firebase from '../firebase';
import { ResourceModel } from '../models';

const NewResource: React.FC = () => {
  const handleSubmit = (resource: ResourceModel) => {
    firebase
      .firestore()
      .collection('resources')
      .add(resource);
  };

  return <NewResourceForm onSubmit={handleSubmit} />;
};

export default NewResource;
