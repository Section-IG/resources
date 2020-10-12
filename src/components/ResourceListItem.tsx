import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { ResourceModel } from '../models';
import { ReactTinyLink } from 'react-tiny-link';

const ResourceListItem: React.FC<ResourceModel> = ({ id, url, title, description, tags}) => { 
  return (
    <Card className='text-center' key={id}>      
      <Card.Body>
        <ReactTinyLink showGraphic={true} url={url} cardSize='small' proxyUrl='https://cors.team-radiateur.fun:6443' />
        
        { title && <Card.Title className='mt-2'>{title}</Card.Title> }

        { description && <Card.Text className={title ? '' : 'mt-2'}>{description}</Card.Text> }

        <Button className={(title || description) ? '' : 'mt-3'} href={url} target='_blank' variant="secondary">Open link</Button>
      </Card.Body>

      {tags && tags.length > 0 && <Card.Footer>{tags.join(', ')}</Card.Footer> }
    </Card>
  );
};

export default ResourceListItem;
