import React from 'react';

const LogoutButton = React.createClass({

  render() {

    return (
      <form onSubmit={this.props.handleLogoutSubmit}>
        <input
          type="submit"
          value="Logout"
        />
      </form>
    );
  }
});

export default LogoutButton;
