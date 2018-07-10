import React from 'react';
import axios from 'axios';

class AuthRegister extends React.Component {

  state = {}

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/register',
      method: 'POST',
      data: this.state
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
