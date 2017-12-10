export const types = {
    UPDATE_BUDGET_INFO: 'UPDATE_BUDGET_INFO'
}

export const updateBudgetInformation = (target,value) => {
    return {
        type: types.UPDATE_BUDGET_INFO,
        payload: {
            [target] : value
        }
    };
} 