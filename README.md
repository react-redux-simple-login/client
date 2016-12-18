# simple-login client w/ React & Redux

###This simple front-end app includes a login that:
- launches in broswer with `$ npm start`
- is centered and responsive
- requests a username and password
- checks user credentials against an [exposed REST API](https://github.com/react-redux-simple-login/server) (server starts at http://localhost:8080)
- alerts the user of failed attempts
- displays backend details on successful login
- uses Redux store to maintain login state (user details and jwt token)
- displays a logout button that deletes user details and jwt token from Redux store
- includes unit tests (enzyme, `$ npm test`)

###Challenges
Writing unit tests for React components was something new for me. For this reason, I wrote my tests after creating my React components.

Learning to write these tests with enzyme was a fun challenge, and one that I feel halfway successful in accomplishing. I was able to write passing tests for stateless components, but struggled to render and test the <App /> component, which is the only component wrapped by the `Provider` and connected to the Redux `store`. I ended up removing all code related to this attempt, but certainly plan to keep researching and experimenting until I gain proficiency.
