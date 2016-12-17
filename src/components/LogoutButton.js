import React from 'react';

var LogoutButton = React.createClass({

  render() {
    return (

      <form onSubmit={this.props.handleLogout}>
        <input
          type="submit"
          value="logout"
        />
      </form>

    );
  }
});

export default LogoutButton;
