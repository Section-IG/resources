import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ResourceModel } from '../models';
import { ReactTinyLink } from 'react-tiny-link';

const ResourceListItem: React.FC<ResourceModel> = ({ id, url, description, tags}) => { 
  return (
    <Card className='text-center' key={id}>
      <Card.Body>
        <ReactTinyLink showGraphic={true} url={url} cardSize='small'/>
        { description && <Card.Text className='mt-2'>{description}</Card.Text> }
        <Button className='mt-2' href={url} target='_blank' variant="secondary">Open link</Button>
      </Card.Body>

      {tags && tags.length > 0 && <Card.Footer>{tags.join(', ')}</Card.Footer> }
    </Card>
  );
};

export default ResourceListItem;