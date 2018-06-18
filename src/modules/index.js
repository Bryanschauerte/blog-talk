import building from './views/Building/state/reducer';
import landing from './views/Landing/state/reducer';
import {
  combineReducers
} from 'redux';

export default combineReducers({
  building,
  landing
});


