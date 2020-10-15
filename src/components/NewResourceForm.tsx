import React, { FormEvent, useState } from 'react';
import { ResourceForm } from '../models';
import { Accordion, Button, Form } from 'react-bootstrap';
import ReactTagInput from '@pathofdev/react-tag-input';
import './NewResourceForm.css';
import useStorage from '../hooks/useStorage';

type Props = {
  onSubmit: (r: ResourceForm) => void;
};

const DEFAULT_URL: string = "";
const DEFAULT_OPTIONAL_STRING: string = null;
const DEFAULT_TAGS: string[] = [];

const NewResourceForm: React.FC<Props> = ({ onSubmit }) => {
  const [shown, setShown] = useStorage('showForm', true);
  
  const [url, setUrl] = useState(DEFAULT_URL);
  const [title, setTitle] = useState(DEFAULT_OPTIONAL_STRING);
  const [description, setDescription] = useState(DEFAULT_OPTIONAL_STRING);
  const [tags, setTags] = useState(DEFAULT_TAGS);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
      url: url.trim(),
      title: title ? title.trim() : null,
      description: description ? description.trim() : null,
      tags,
    });
    
    setUrl(DEFAULT_URL);
    setTitle(DEFAULT_OPTIONAL_STRING);
    setDescription(DEFAULT_OPTIONAL_STRING);
    setTags(DEFAULT_TAGS);
  };
  
  return (
    <Accordion activeKey={shown ? '0' : undefined}>
      <Accordion.Toggle as='span' eventKey='0' onClick={() => setShown(!shown)} className='accordion-toggle'>
        {shown ? '🞃' : '🞂'} Ajouter une nouvelle ressource
      </Accordion.Toggle>
      <Accordion.Collapse eventKey='0'>
        <Form inline onSubmit={handleSubmit}>
          <Form.Group controlId='urlFormGroup' className='mb-2 mr-sm-2'>
            <Form.Label className='mr-2'>URL <span className='text-danger'>*</span></Form.Label>
            <Form.Control
              placeholder='https://ressource.url'
              value={url}
              onChange={(e) => setUrl(e.currentTarget.value)}
              type='url'
              required
            />
          </Form.Group>

          <Form.Group controlId='titleFormGroup' className='mb-2 mr-sm-2'>
            <Form.Label className='mr-2'>Titre</Form.Label>
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
            <Form.Label className='mr-2'>Topics <span className='text-secondary ml-sm-2'>(séparés par un Enter)</span></Form.Label>
            <ReactTagInput
              tags={tags}
              placeholder={' '}
              onChange={(newTags) => setTags(newTags)}
              removeOnBackspace={true}
            />
          </Form.Group>

          <Button variant='primary' type='submit' className='mb-2 newResourceFormSubmit'>Ajouter</Button>
        </Form>
      </Accordion.Collapse>
    </Accordion>
  );
};

export default NewResourceForm;
