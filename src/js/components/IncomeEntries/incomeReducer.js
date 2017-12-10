import { types } from './incomeActions';

const defaultState = {
    lineItems: []
};

export default function IncomeReducer(state = defaultState, action) {
    //state = defaultstate unless specified
    const { type, payload } = action;

    switch(type){
        case types.ADD_INCOME: {
            return {
                lineItems: [
                    ...state.lineItems,
                    { ...payload }
                ]
            }
        }

        default: {
            return state;
        }
    }
}