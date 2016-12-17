import React from 'react';
import request from 'superagent';

var LogoutButton = React.createClass({

  handleSubmit(event) {
    event.preventDefault();
    console.log('user pressed logout button');
    request
      .del('http://localhost:8080/auth')
      .send({
        token: "dfjhs48rufsadkjf"
      })
      .end((err, res) => {
        if(res.body.token) {
          console.log('logout was not sucessful');
        } else {
          console.log('logout was successful');
        }
      })
  },

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <input
          type="submit"
          value="logout"
        />
      </form>

    );
  }
});

export default LogoutButton;
