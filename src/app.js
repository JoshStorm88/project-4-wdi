import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
// import About from './components/pages/About';
// import NotFound from './components/pages/NotFound';
import DevelopersIndex from './components/developers/Index';
import DevelopersShow from './components/developers/Show';
import DevelopersNew from './components/developers/New';
import DevelopersEdit from './components/developers/Edit';
import AuthRegister from './components/auth/Register';
import AuthLogin from './components/auth/Login';
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';
import FlashMessages from './components/common/FlashMessages';

import 'bulma';
import 'react-select/dist/react-select.css';
import './scss/style.scss';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <FlashMessages/>
          <Navbar />
          <Route exact path="/" component={Home} />
          <section className="section">
            <div className="container">
              <Switch>
                <ProtectedRoute path="/developers/new" component={DevelopersNew} />
                <ProtectedRoute path="/developers/:id/edit" component={DevelopersEdit} />
                <Route path="/developers/:id" component={DevelopersShow} />
                <Route path="/developers" component={DevelopersIndex} />
                <Route path="/register" component={AuthRegister} />
                <Route path="/login" component={AuthLogin} />
                {/* <Route exact path="/" component={About} /> */}
                {/* <Route path="" component={NotFound} /> */}
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
