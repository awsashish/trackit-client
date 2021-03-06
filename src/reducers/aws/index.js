import { combineReducers } from 'redux';
import accounts from './accounts';
import costs from './costs';
import s3 from './s3';

export default combineReducers({
  accounts,
  s3,
  costs
});
