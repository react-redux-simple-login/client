import React from 'react';
import moment from 'moment';

export const BackendDisplay = React.createClass({

  render() {

    const { username, node_version, app_path, timestamp } = this.props;
    const dateTime = moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');

    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <p><span className="bold">Node Version:</span> {node_version}</p>
        <p><span className="bold">Application Path:</span> {app_path}</p>
        <p><span className="bold">Date/Time:</span> {dateTime}</p>
      </div>
    );
  }
});

export default BackendDisplay;
