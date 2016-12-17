import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

var BackendDisplay = React.createClass({

  render() {

    const { username, node_version, app_path, timestamp } = this.props.loginState;
    const dateTime = moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <p>Node Version: {node_version}</p>
        <p>Application path: {app_path}</p>
        <p>Date/time: {dateTime}</p>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return store;
}

module.exports = connect(mapStateToProps)(BackendDisplay);
