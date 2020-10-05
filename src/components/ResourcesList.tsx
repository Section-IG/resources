import { sortBy } from 'lodash';
import React, { useMemo, useState } from 'react';
import { CardColumns, FormControl, InputGroup } from 'react-bootstrap';
import Resource from '../containers/Resource';
import { ResourceModel } from '../models';
import ResourceListItem from './ResourceListItem';

type Props = {
  resources: Array<ResourceModel>;
};

const ResourcesList: React.FC<Props> = ({ resources }) => {
  const [filter, setFilter] = useState("");
  const sorted = useMemo(() => {
    let array =  sortBy(resources, resource => resource.id);
    if (filter) array = array.filter(
      (resource) =>
        (resource.description && resource.description.toLowerCase().includes(filter.toLowerCase()))
        || (resource.tags && resource.tags.some((t) => t.toLowerCase().includes(filter.toLowerCase())))
    );
    return array;
  }, [resources, filter]);

  return (
    <>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text>
            <span role='img' aria-labelledby='search emoji'>🔍</span>
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type='text'
          value={filter}
          placeholder='Search for resources'
          onChange={e => setFilter(e.currentTarget.value)}
        />
      </InputGroup>

      <CardColumns>
        {sorted.map((r) => (
          <Resource as={ResourceListItem} key={r.id} {...r} />
        ))}
      </CardColumns>
    </>
  );
};

export default ResourcesList;
