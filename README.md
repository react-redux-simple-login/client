# simple-login client w/ React & Redux

This simple front-end app includes a login that:
- requests a username and password
- checks user credentials against [exposed REST API](https://github.com/react-redux-simple-login/server) (http://localhost:8080/auth)
- uses Redux store to maintain login state (user details and jwt token)
- is centered and responsive
- alerts the user of failed attempts
- displays backend details on successful login
- includes a logout button that deletes from Redux store user details and jwt token
- includes unit tests

##Unit tests utilize **enzyme**.
###To run tests:
```$ npm test```
