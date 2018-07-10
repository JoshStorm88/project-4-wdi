import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';

import ProjectsNew from './components/projects/New';

import DevelopersIndex from './components/developers/Index';
import DevelopersEdit from './components/developers/Edit';


import AuthRegister from './components/auth/Register';
import AuthLogin from './components/auth/Login';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Route exact path="/" component={Home} />
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/projects/new" component={ProjectsNew} />
                <Route path="/register" component={AuthRegister} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/developers" component={DevelopersIndex} />
                <Route path="/developers/:id/edit" component={DevelopersEdit} />
              </Switch>
            </div>
          </section>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
