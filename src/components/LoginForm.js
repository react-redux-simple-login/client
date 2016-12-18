import React from 'react';

var LoginForm = React.createClass({

  render() {

    var message = (this.props.message) ?
      <p>{this.props.message}</p>
      : null;

    return (
      <div>
        <h1>Login</h1>
        {message}
        <form onSubmit={this.props.handleLoginSubmit}>
          <input
            type="text"
            placeholder="username"
            value={this.props.username}
            onChange={this.props.handleUsernameChange}
          />
          <input
            type="text"
            placeholder="password"
            value={this.props.password}
            onChange={this.props.handlePasswordChange}
          />
        <button
            type="submit"
            value="Login">
            Login
        </button>
        </form>
      </div>
    );
  }
});

export default LoginForm;
