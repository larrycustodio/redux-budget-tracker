//Expense action creators
export const types = {
    ADD_EXPENSE: 'ADD_EXPENSE'
};

export function addExpense(description, amount) {
    return {
        type: types.ADD_EXPENSE,
        payload: {
            description,
            amount: parseFloat(amount).toFixed(2)
        }
    };
}