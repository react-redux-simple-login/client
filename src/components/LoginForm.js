import React from 'react';
import request from 'superagent';
import LogoutButton from './LogoutButton.js';

var LoginForm = React.createClass({

  getInitialState() {
    return({ username: '', password: '', message: null, token: null});
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

        console.log(res.body);

        if(!res.body.token) {
          this.setState({
            message: res.body.err
          });
        }

        else {
          this.setState({
            message: 'Login successful!',
            token: res.body.token
          });
        }

        this.setState({
          username: '',
          password: ''
        });

        console.log(this.state);
      })
  },

  handleLogout(event) {
    event.preventDefault();
    console.log('user pressed logout button');
    request
      .del('http://localhost:8080/auth')
      .send({
        token: this.state.token
      })
      .end((err, res) => {
        if(res.body.token) {
          console.log('logout was not sucessful');
        } else {
          console.log('logout was successful');
          this.setState({
            message: 'You are no longer logged in.',
            token: null
          })
        }
      })
  },

  render() {

    var message = (this.state.message) ?
      <p>{this.state.message}</p>
      : null;

    var logout = (this.state.token) ?
      <LogoutButton
        handleLogout={this.handleLogout}
      />
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
        {logout}
      </div>
    );
  }
});

export default LoginForm;
