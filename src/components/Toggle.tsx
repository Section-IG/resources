import React from 'react';
import { Form } from 'react-bootstrap';

type Props = {
  theme: string;
  toggleTheme: () => void;
};

const Toggle: React.FC<Props> = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <Form.Check
      type='switch'
      id='theme-switch'
      onClick={toggleTheme}
      className='float-right'
      label={isLight ? '☀' : '🌙'}
    />
  );
};

export default Toggle;
