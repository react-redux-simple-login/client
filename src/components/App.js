import React from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import { userLoginSuccess, userLogoutSuccess } from '../actions/user-actions';
import LoginForm from './LoginForm.js';
import LogoutButton from './LogoutButton.js';

var App = React.createClass({

  getInitialState() {
    return({ username: '', password: '', message: null, token: null});
  },

  //Wouldn't log app state in production code, but included here to show functionality
  componentDidMount() {
    console.log("Login State: ", this.props.loginState);
  },

  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  },

  handleLoginSubmit(event) {
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
          this.setState({
            message: res.body.err
          });
        }

        else {
          this.props.login(res.body);

          this.setState({
            message: 'Login successful!',
            token: res.body.token
          });
        }

        this.setState({
          username: '',
          password: ''
        });
        
        //Wouldn't log app state in production code, but included here to show functionality
        console.log("Login State: ", this.props.loginState);
      })
  },

  handleLogoutSubmit(event) {
    event.preventDefault();

    request
      .del('http://localhost:8080/auth')
      .send({
        token: this.state.token
      })
      .end((err, res) => {

        if(res.body.token) {
          this.setState({
            message: res.body.err
          });
        }

        else {
          this.props.logout();
          this.setState({
            token: null
          })
        }

      })
  },

  render() {

    var Display = (this.state.token) ?
      <LogoutButton
        handleLogoutSubmit={this.handleLogout}
      />
      :
      <LoginForm
        username={this.state.username}
        handleUsernameChange={this.handleUsernameChange}
        password={this.state.password}
        handlePasswordChange={this.handlePasswordChange}
        handleLoginSubmit={this.handleLoginSubmit}
        message={this.state.message}
      />;

    return (
      <div>
        {Display}
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return store;
}

const mapDispatchToProps = function(dispatch){
  return {
    login: function(user){
      dispatch(userLoginSuccess(user));
    },
    logout: function(user){
      dispatch(userLogoutSuccess());
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App);
