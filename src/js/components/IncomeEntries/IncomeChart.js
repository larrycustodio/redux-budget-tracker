import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import { connect } from 'react-redux';


class IncomeChart extends Component {
    render() {
        const incomeData = {
            labels: [],
            datasets: [{
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: []
            }]
        };
        if(!!this.props.incomeItems.length){
            this.props.incomeItems.forEach((item,index) => {
                incomeData.labels.push(item.description);
                incomeData.datasets[0].data.push(parseFloat(item.amount));
                incomeData.datasets[0].backgroundColor.push(`hsl(171,100%,${35 + 5 * index}%)`)
                incomeData.datasets[0].hoverBackgroundColor.push()
            });
        }
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
