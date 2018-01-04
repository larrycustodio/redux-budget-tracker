import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';


class IncomeChart extends Component {
    render() {
        const incomeData = {
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
            <Pie data={incomeData} />
        );
    }
};

function mapStoreToProps(store) {
    return {
        incomeItems: store.income.lineItems
    };
}

export default connect(mapStoreToProps)(IncomeChart);
