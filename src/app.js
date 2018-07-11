import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/common/Navbar';

import ProjectsNew from './components/projects/New';

import DevelopersIndex from './components/developers/Index';
import DevelopersShow from './components/developers/Show';
import DevelopersNew from './components/developers/New';
import DevelopersEdit from './components/developers/Edit';

import AuthRegister from './components/auth/Register';
import AuthLogin from './components/auth/Login';

// import ProtectedRoute from './components/common/ProtectedRoute';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <FlashMessages/>
          <Route exact path="/" component={Home} />
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/developers/new" component={DevelopersNew} />
                <Route path="/developers/:id/edit" component={DevelopersEdit} />
                <Route path="/developers/:id" component={DevelopersShow} />
                <Route path="/developers" component={DevelopersIndex} />
                <Route path="/register" component={AuthRegister} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/projects/new" component={ProjectsNew} />
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
