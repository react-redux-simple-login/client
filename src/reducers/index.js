'use strict';

import { combineReducers} from 'Redux';
import userReducer from './user-reducer';

var reducers = combineReducers({
  userState: userReducer,
});

export default reducers;
