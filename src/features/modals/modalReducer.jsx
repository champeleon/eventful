import { MODAL_CLOSE, MODAL_OPEN} from './modalConstants';


const initialState = null;

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_CLOSE:
        return null;
        case MODAL_OPEN:
        const {modalType, modalProps} = action.payload;
           return {modalType , modalProps};
        default:
            return state;
    }
    
};

// export const openModal = (state, payload) => {
//     const {modalType,modalProps} = payload;
//     return {modalType,modalProps}
// }

// export const closeModal = (state, payload) => {
//     return null
// }

// export default createReducer(initialState, {
//     [MODAL_OPEN]: openModal,
//     [MODAL_CLOSE]: closeModal
// });

export default modalReducer;