import React from 'react';
import ResourcesList from './components/ResourcesList';
import HowTo from './components/HowTo';
import NewResource from './containers/NewResource';
import Resources from './containers/Resources';

import '@forevolve/bootstrap-dark/dist/css/toggle-bootstrap-dark.css';
import '@forevolve/bootstrap-dark/dist/css/toggle-bootstrap.css';
import useDarkMode from './hooks/useDarkMode';
import Toggle from './components/Toggle';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  if (!componentMounted) return <div />;

  return (
    <Container>
      <header className='mt-3 mb-4'>
        <div>
          <h1 className='d-inline'>Unofficial IESN resources from teachers &amp; students! </h1>
          <HowTo />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <NewResource />
      </header>

      <main className='main mb-4 text-center'>
        <Resources as={ResourcesList} />
      </main>

      <footer className='footer text-center mb-3'>&copy; IESN-IG 2020.</footer>
    </Container>
  );
};

export default App;
