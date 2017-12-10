//Income action creators
export const types = {
    ADD_INCOME: 'ADD_INCOME'
}
export function addIncome(description, amount) {
    return {
        type: types.ADD_INCOME,
        payload: {
            description,
            amount: parseFloat(amount).toFixed(2)
        }
    };
}