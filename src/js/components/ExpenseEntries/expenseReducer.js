/* Created for a part of the store in 
* which expense component
* is responsible for
*/
const defaultState = {
    description: '',
    amount: '',
    lineItems: []
};

export default function ExpenseReducer(state = defaultState, action) {
    //state = defaultState acts as a default
    const { type, payload } = action;

    switch(type){
        case 'UPDATE_EXPENSE_DESCRIPTION': {
            return {
                ...state,
                description: payload.description
            }
        }

        case 'UPDATE_EXPENSE_AMOUNT': {
            return {
                ...state,
                amount: payload.amount
            }
        }

        case 'ADD_EXPENSE': {
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