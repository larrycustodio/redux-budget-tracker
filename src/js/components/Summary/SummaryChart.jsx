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
                labels: ['Total Income', 'Total Expenses'],
                datasets: [
                    {
                        label: 'Budget Totals',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [getItemTotal(this.props.incomeItems).toFixed(2), getItemTotal(this.props.expenseItems).toFixed(2)]
                    }
                ]
            },
            options: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    },
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
