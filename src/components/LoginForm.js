'use strict';

import React from 'react';
import request from 'superagent';

var LoginForm = React.createClass({

  getInitialState() {
    return({ username: '', password: '', message: null});
  },

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  },

  handleSubmit(event) {
    event.preventDefault();
    var username = this.state.username.trim();
    var password = this.state.password.trim();

    request
      .post('http://localhost:8080/auth')
      .send({
        username,
        password
      })
      .end((err, res) => {

        if(!res.body.token) {
          console.log(res.body.err);
          this.setState({ message: res.body.err })
        }


      })
  },

  render() {

    var message = (this.state.message) ?
      <p>{this.state.message}</p>
      : null;

    return (
      <div>
        <h1>Login</h1>
        {message}
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
