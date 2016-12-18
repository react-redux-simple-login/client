import React from 'react';

const LoginForm = React.createClass({

  render() {

    const message = (this.props.message) ?
      <p className="message">{this.props.message}</p>
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
          <input
              type="submit"
              value="Login"
              id="submit"
          />
        </form>
      </div>
    );
  }
});

export default LoginForm;
