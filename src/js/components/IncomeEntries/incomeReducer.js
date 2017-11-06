const defaultState = {
    description: '',
    amount: '',
    lineItems: []
}

export default function IncomeReducer(state = defaultState, action) {
    //state set to defaultstate unless specified
    const { type, payload } = action;
    switch(type){
        case 'UPDATE_INCOME_DESCRIPTION' : {
            return {
                ...state,
                description: payload.description
            }
        }

        case 'UPDATE_INCOME_AMOUNT' : {
            return {
                ...state,
                amount: payload.amount
            }
        }

        case 'ADD_INCOME' : {
            return {
                description: '',
                amount: '',
                lineItems: [
                    ...state.lineItems,
                    { description, amount }
                ]
            }
        }

        default : {
            return state;
        }
    }
}