import _ from 'lodash'
import {
    CHANGE_TYPE,
} from '../../constants/actionTypes';

const initialState = {

};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    switch(action.type) {
        
        case CHANGE_TYPE:
            newState.base = action.locale
            return newState
        default:
            return state;
    }
};

export default reducer;