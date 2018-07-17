import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

class AuthLogin extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/login',
      method: 'POST',
      data: this.state
    })
      .then(res => {
        Auth.setToken(res.data.token);

        this.props.history.push('/developers');
      })
      .catch(() => {
        Flash.setMessage('danger', 'Whoops! Something wasn\'t entered correctly..');
        this.props.history.replace('/login');

      });
  }

  handleChange = ({ target: { name, value}}) => {
    this.setState({ [name]: value });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="Email" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
        </div>

        <button className="button submitButton">Submit</button>
        <button className="button cancelButton" href="/">Cancel</button>
  
      </form>
    );
  }
}

export default AuthLogin;
