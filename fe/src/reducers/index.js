import { combineReducers } from 'redux'
import homepage from './homepage';
import main from './main';
const RootReducer = combineReducers({
    homepage,
    main,
});

export default RootReducer;
