import React from 'react';
import ResourcesList from './components/ResourcesList';
import NewResource from './containers/NewResource';
import Resources from './containers/Resources';

function App() {
  return (
    <div className='container'>
      <header className='mt-3 mb-4'>
        <h1>Unofficial IESN resources from teachers &amp; students!</h1>
        <NewResource />
      </header>

      <main className='main mb-4 text-center'>
        <Resources as={ResourcesList}/>
      </main>

      <footer className='footer text-center mb-3'>&copy; IESN-IG 2020.</footer>
    </div>
  );
}

export default App;
