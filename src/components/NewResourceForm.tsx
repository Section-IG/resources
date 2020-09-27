import React, { FormEvent, useState } from 'react';
import { ResourceForm } from '../models';
import { Button, Form } from 'react-bootstrap';
import ReactTagInput from '@pathofdev/react-tag-input';
import './NewResourceForm.css';

type Props = {
  onSubmit: (r: ResourceForm) => void;
};

const DEFAULT_URL: string = "";
const DEFAULT_DESCRIPTION: string = null;
const DEFAULT_TAGS: string[] = [];

const NewResourceForm: React.FC<Props> = ({ onSubmit }) => {
  const [url, setUrl] = useState(DEFAULT_URL);
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION);
  const [tags, setTags] = useState(DEFAULT_TAGS);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (description === "") setDescription(null);

    onSubmit({url, description, tags});
    setUrl(DEFAULT_URL);
    setDescription(DEFAULT_DESCRIPTION);
    setTags(DEFAULT_TAGS);
  };
  
  return (
    <Form inline onSubmit={handleSubmit}>
      <Form.Group controlId='urlFormGroup' className='mb-2 mr-sm-2'>
        <Form.Label className='mr-2'>URL</Form.Label>
        <Form.Control
          placeholder='https://resource.url'
          value={url}
          onChange={(e) => setUrl(e.currentTarget.value)}
          type='url'
          required
        />
      </Form.Group>

      <Form.Group controlId='descriptionFormGroup' className='mb-2 mr-sm-2'>
        <Form.Label className='mr-2'>Description</Form.Label>
        <Form.Control
          type='text'
          as='textarea'
          value={description || ''}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </Form.Group>

      <Form.Group controlId='tagsFormGroup' className='mb-2 mr-2'>
        <Form.Label className='mr-2'>
          Topics{' '}
          <span className='text-secondary ml-sm-2'>(separate with enter)</span>
        </Form.Label>
        <ReactTagInput
          tags={tags}
          placeholder={' '}
          onChange={(newTags) => setTags(newTags)}
          removeOnBackspace={true}
        />
      </Form.Group>

      <Button
        variant='primary'
        type='submit'
        className='mb-2 newResourceFormSubmit'
      >
        Submit
      </Button>
    </Form>
  );
};

export default NewResourceForm;
