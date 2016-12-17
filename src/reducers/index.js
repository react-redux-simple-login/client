
import { combineReducers} from 'redux';
import userReducer from './user-reducer';

var reducers = combineReducers({
  loginState: userReducer,
});

export default reducers;
