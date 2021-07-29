// == Import npm
import React from 'react';

import ConnectedForm from 'src/containers/Form';
import ConnectedMessages from 'src/containers/Messages';
import ConnectedSettings from 'src/containers/Settings';

import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <ConnectedMessages />
    <ConnectedForm />
    <ConnectedSettings />
  </div>
);

// == Export
export default App;
