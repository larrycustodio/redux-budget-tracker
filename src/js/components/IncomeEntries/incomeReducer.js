/* Created for a part of the store in 
* which income component
* is responsible for
*/
const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function IncomeReducer(state = defaultState, action) {
    //state = defaultstate unless specified
    const { type, payload } = action;

    switch(type){
        case 'UPDATE_INCOME_DESCRIPTION': {
            return {
                ...state,
                description: payload.description
            }
        }

        case 'UPDATE_INCOME_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            }
        }

        case 'ADD_INCOME': {
            const { description, amount } = action.payload;
            return {
                description: '',
                amount: '',
                lineItems: [
                    ...state.lineItems,
                    { description, amount }
                ]
            }
        }

        default: {
            return state;
        }
    }
}