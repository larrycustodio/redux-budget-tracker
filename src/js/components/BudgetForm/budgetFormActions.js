export const types = {
    UPDATE_BUDGET_INFO: 'UPDATE_BUDGET_INFO',
    OPEN_BUDGET_FORM: 'OPEN_BUDGET_FORM',
    CLOSE_BUDGET_FORM: 'CLOSE_BUDGET_FORM'
}

export const updateBudgetInformation = (target,value) => {
    return {
        type: types.UPDATE_BUDGET_INFO,
        payload: {
            [target] : value
        }
    };
} 

export const openBudgetForm = () => {
    return {
        type: types.OPEN_BUDGET_FORM,
        payload: {
            isFormVisible: true
        }
    }
}

export const closeBudgetForm = () => {
    return {
        type: types.CLOSE_BUDGET_FORM,
        payload: {
            isFormVisible: false
        }
    }
}