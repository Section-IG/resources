import React, { useState } from 'react';
import { Alert, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';

const HowTo: React.FC = () => {
  const [show, setShow] = useState(true);
  
  if (show) {
    return (
      <Alert className='mt-3' variant='success' dismissible onClose={() => setShow(false)}>
        <Alert.Heading>A bit of an explanation</Alert.Heading>
        <p>
          This website offers you the possibility to keep a list of awesome
          resources for you and others. Do not hesitate to share
          tools, IDEs, plugins, extensions and whatever you find interesting and useful.
        </p>
        <hr />
        <p className='mb-0'>
          &#x26A0; Once added to the list, an item cannot be removed nor edited. Use wisely!
        </p>
      </Alert>
    );
  }

  return (
    <OverlayTrigger
      key='right'
      placement='right'
      overlay={
        <Tooltip id='tooltip-right'>
          Show more information about this website
        </Tooltip>
      }
    >
      <Badge
        as='a'
        pill
        variant='secondary'
        href='#'
        onClick={() => setShow(true)}
      >
        ?
      </Badge>
    </OverlayTrigger>
  );
};

export default HowTo;