import {
    INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    COUNTER_ACTION_STARTED,
    COUNTER_ACTION_FINISHED
} from "./testConstants";
// import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = {
    data: 411,
    loading: false
}

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state,
                data: state.data + 1
            };
        case DECREMENT_COUNTER:
            return { ...state,
                data: state.data - 1
            };
        case COUNTER_ACTION_STARTED:
            return { ...state,
                loading: true
            };
        case COUNTER_ACTION_FINISHED:
            return { ...state,
                loading: false
            };
        default:
            return state;
    }

};

export default testReducer;

// const incrementCounter = (state, payload) => {
//     return {...state, data: state.data + 1};
// }

// const decrementCounter = (state, payload) => {
//     return {...state, data: state.data - 1};
// }

// export default createReducer(initialState, {
//     [INCREMENT_COUNTER]: incrementCounter,
//     [DECREMENT_COUNTER]: decrementCounter,
// })