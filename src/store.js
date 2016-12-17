'use strict';

//holds application state
//allows access to state
//allows state to be updated
//only one store per app

import { createStore } from 'redux';
import reducers from './reducers';

let store = createStore(reducers);

export default store;
