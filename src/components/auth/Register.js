import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';

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
        Auth.setToken(res.data.token);

        this.props.history.push('/developers');
      })
      .catch(() => {
        Flash.setMessage('warning', 'Whoops! Please check all the fields are filled in correctly..' );
        this.props.history.replace('/register');

      });
  }

  handleChange = ({ target: { name, value}}) => {
    this.setState({ [name]: value });


  }

  handleCancel = (e) => {
    e.preventDefault();
    axios({
      url: '/api/register',
      data: this.state
    });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="username">Username</label>
          <input className="input" name="username" placeholder="Username" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="email">Email</label>
          <input className="input" name="email" placeholder="Email" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password</label>
          <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange} />
        </div>
        <div className="field">
          <label className="password">Password Confirmation</label>
          <input className="input" type="password" name="passwordConfirmation" placeholder="Password Confirmation" onChange={this.handleChange} />
        </div>

        <button className="button">Submit</button>
        <button className="button" onChange={this.handleCancel}>Cancel</button>

        <img className="registerLogo" src="https://i.imgur.com/M0fInVz.png"
          alt="Four Horsemen Development Platform" />

      </form>
    );
  }
}

export default AuthRegister;
