import React from 'react';
import { connect } from 'react-redux';

var BackendDisplay = React.createClass({

  render() {

    const { username, node_version, app_path, timestamp } = this.props.loginState;

    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <p>{node_version}</p>
        <p>{app_path}</p>
        <p>{timestamp}</p>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return store;
}

module.exports = connect(mapStateToProps)(BackendDisplay);
