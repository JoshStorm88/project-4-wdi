import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';

import AuthRegister from './components/auth/Register';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <main>
        <Navbar />
        <Home />
      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
