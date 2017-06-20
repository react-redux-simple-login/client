# simple-login client w/ React & Redux

###This simple front-end app includes a login that:
- launches in browser with `$ npm start`
- is centered and responsive
- requests a username and password
- checks user credentials against an [exposed REST API](https://github.com/react-redux-simple-login/server) (server starts at `http://localhost:8080`)
- alerts the user of failed attempts
- displays backend details on successful login
- uses Redux store to maintain login state (user details and jwt token)
- displays a logout button that deletes user details and jwt token from Redux store
- includes unit tests (enzyme, `$ npm test`)
