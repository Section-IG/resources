import React , { FunctionComponent } from 'react';
import { ResourceModel} from '../models';

type Props = {
  as: FunctionComponent<ResourceModel>;
} & ResourceModel;

const Resource: React.FC<Props> = ({as: component, id, ...rest}) => React.createElement(component, { id, ...rest });

export default Resource;
