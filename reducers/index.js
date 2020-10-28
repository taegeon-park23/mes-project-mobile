import { CHANGE_COMPONENT} from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    tab: []
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case CHANGE_COMPONENT:
            return Object.assign({}, state, {
                currentMainComponent: action.component
            });
        default:
            return state;
    }
};


const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;