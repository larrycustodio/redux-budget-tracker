import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';


class ExpenseChart extends Component {
    render() {
        const expenseData = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };        
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
