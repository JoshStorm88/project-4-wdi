import React from 'react';
import ReactDOM from 'react-dom';

import Home from './components/pages/Home';

import 'bulma';

class App extends React.Component {
  render() {
    return (
      <main>
        <Home />

      </main>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
