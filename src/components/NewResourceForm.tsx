import React, { FormEvent, useState } from 'react';
import { ResourceForm } from '../models';
import { Accordion, Button, Form } from 'react-bootstrap';
import ReactTagInput from '@pathofdev/react-tag-input';
import './NewResourceForm.css';

type Props = {
  onSubmit: (r: ResourceForm) => void;
};

const DEFAULT_URL: string = "";
const DEFAULT_OPTIONAL_STRING: string = null;
const DEFAULT_TAGS: string[] = [];

const NewResourceForm: React.FC<Props> = ({ onSubmit }) => {
  const [shown, setShown] = useState(true);
  
  const [url, setUrl] = useState(DEFAULT_URL);
  const [title, setTitle] = useState(DEFAULT_OPTIONAL_STRING);
  const [description, setDescription] = useState(DEFAULT_OPTIONAL_STRING);
  const [tags, setTags] = useState(DEFAULT_TAGS);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (description === "") setDescription(null);
    if (title === "") setTitle(null);

    onSubmit({ url, title, description, tags });
    setUrl(DEFAULT_URL);
    setDescription(DEFAULT_OPTIONAL_STRING);
    setTags(DEFAULT_TAGS);
  };
  
  return (
    <Accordion defaultActiveKey='0'>
      <Accordion.Toggle as='span' eventKey='0' onClick={() => setShown(!shown)}>
        {shown ? '🞃' : '🞂'} Add new resource
      </Accordion.Toggle>
      <Accordion.Collapse eventKey='0'>
        <Form inline onSubmit={handleSubmit}>
          <Form.Group controlId='urlFormGroup' className='mb-2 mr-sm-2'>
            <Form.Label className='mr-2'>
              URL <span className='text-danger'>*</span>
            </Form.Label>
            <Form.Control
              placeholder='https://resource.url'
              value={url}
              onChange={(e) => setUrl(e.currentTarget.value)}
              type='url'
              required
            />
          </Form.Group>

          <Form.Group controlId='titleFormGroup' className='mb-2 mr-sm-2'>
            <Form.Label className='mr-2'>Title</Form.Label>
            <Form.Control
              value={title || ''}
              onChange={(e) => setTitle(e.currentTarget.value)}
              type='text'
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
              <span className='text-secondary ml-sm-2'>
                (separate with enter)
              </span>
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
      </Accordion.Collapse>
    </Accordion>
  );
};

export default NewResourceForm;
