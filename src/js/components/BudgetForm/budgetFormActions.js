export const types = {
    UPDATE_BUDGET_INFO: 'UPDATE_BUDGET_INFO'
}

export const updateBudgetInformation = (target,value) => {
    if(target == 'amount') value = parseFloat(value).toFixed(2);
    return {
        type: types.UPDATE_BUDGET_INFO,
        payload: {
            [target] : value
        }
    };
} 