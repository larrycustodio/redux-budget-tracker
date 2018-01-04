import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';

class ExpenseChart extends Component {
    render() {
        const expenseData = {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: []
            }]
        };
        if(!!this.props.expenseItems.length){
            this.props.expenseItems.forEach((item,index) => {
                expenseData.labels.push(item.description);
                expenseData.datasets[0].data.push(parseFloat(item.amount));
                expenseData.datasets[0].backgroundColor.push(`hsl(348,100%,${61 + 5 * index}%)`)
                expenseData.datasets[0].hoverBackgroundColor.push()
            });
        }
        return (
            <Pie data={expenseData} />
        );
    }
};

function mapStoreToProps(store) {
    return {
        expenseItems: store.expense.lineItems
    };
}

export default connect(mapStoreToProps)(ExpenseChart);
