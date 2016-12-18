
import { combineReducers} from 'redux';
import userReducer from './user-reducer';

const reducers = combineReducers({
  loginState: userReducer,
});

export default reducers;
