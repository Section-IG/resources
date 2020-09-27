import React from 'react';
import ResourcesList from './components/ResourcesList';
import HowTo from './components/HowTo';
import NewResource from './containers/NewResource';
import Resources from './containers/Resources';

function App() {
  return (
    <div className='container'>
      <header className='mt-3 mb-4'>
        <div>
          <h1 className='d-inline'>Unofficial IESN resources from teachers &amp; students! </h1>
          <HowTo />
        </div>
        <NewResource />
      </header>

      <main className='main mb-4 text-center'>
        <Resources as={ResourcesList} />
      </main>

      <footer className='footer text-center mb-3'>&copy; IESN-IG 2020.</footer>
    </div>
  );
}

export default App;
