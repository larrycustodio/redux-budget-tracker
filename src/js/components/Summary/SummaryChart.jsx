import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2';
import { connect } from 'react-redux';

const getItemTotal = (lineItems) => {
    return lineItems.reduce((accumulator, curr) => {
        return accumulator + parseFloat(curr.amount);
    }, 0);
}

class SummaryChart extends Component {
    render() {
        const summaryData = {
            data: {
                labels: ['Income', 'Expenses', 'Money Left'],
                datasets: [{
                    label: 'Overview Totals',
                    backgroundColor: ['rgba(35, 209, 96,0.75)', 'rgba(255, 56, 96,0.75)', 'rgba(32, 156, 238,0.75)'],
                    hoverBackgroundColor: ['rgba(35, 209, 96,0.75)', 'rgba(255, 56, 96,0.75)', 'rgba(32, 156, 238,0.75)'],
                    data: [
                        getItemTotal(this.props.incomeItems).toFixed(2),
                        -1 * getItemTotal(this.props.expenseItems).toFixed(2),
                        getItemTotal(this.props.incomeItems).toFixed(2) - getItemTotal(this.props.expenseItems).toFixed(2)
                    ]
                }]
            },
            options: {
                xAxes: [{
                    display: false,
                    ticks: {
                        beginAtZero: true,
                    }
                }]
            }
        };
        return (
            <HorizontalBar data={summaryData.data} />
        );
    }
};

function mapStoreToProps(store) {
    return {
        expenseItems: store.expense.lineItems,
        incomeItems: store.income.lineItems
    };
}

export default connect(mapStoreToProps)(SummaryChart);
