import React from 'react';


class AuthLogin extends React.Component {

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

        <button className="button">Submit</button>
      </form>
    );
  }
  }

  export default AuthLogin;
