import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class AuthRegister extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/register',
      method: 'POST',
      data: this.state
    })
      .then(res => {
        Auth.setToken(res.data.Token);

        this.props.history.push('/criminals');
      });

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="username">Username</label>
          <input className="input" name="username" placeholder="username" />
        </div>
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="example@email.com" />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password" required />
        </div>
        <div className="field">
          <label className="password">Password Confirmation</label>
          <input className="input" type="password" name="password-confirmation" placeholder="Password Confirmation" required />
        </div>
        <button className="button">Submit</button>
      </form>
    );
  }
}

export default AuthRegister;
