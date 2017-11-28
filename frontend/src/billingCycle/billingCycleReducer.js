const INITITAL_STATE = { list: [] };

export default (state = INITITAL_STATE, action) => {
    switch (action.type) {
        case 'BILLING_CYCLES_FETCHED':
            return { ...state, list: action.payload.data };
        default:
            return state;
    }
}