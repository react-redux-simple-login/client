'use strict';

import React from 'react';
import request from 'superagent';

var LoginForm = React.createClass({

  getInitialState() {
    return({ username: '', password: ''});
  },

  handleUsernameChange() {
    console.log('changed username');
  },

  handlePasswordChange() {
    console.log('changed password');
  },

  handleSubmit() {
    console.log('handle submit');
  },

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
          <input
            type="text"
            placeholder="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <input
            type="submit"
            value="Login"
          />
        </form>
      </div>
    );
  }
});

export default LoginForm;
