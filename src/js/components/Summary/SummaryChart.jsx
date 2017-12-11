import React, { Component } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend
} from 'recharts';

export default class SummaryChart extends Component {
    render() {
        const summaryData = [
            { name: 'Summary', 
            incomeTotal: parseFloat(this.props.incomeTotal), 
            expenseTotal: parseFloat(this.props.expenseTotal)  },
        ];
        return (
            <BarChart width={800} height={200} data={summaryData}
                layout="vertical" barGap="7.5%">
                <XAxis type="number"
                    domain={[0, dataMax => ((dataMax * 1.1).toFixed(2))]} />
                <YAxis type="category"
                    dataKey="name" />
                <Bar dataKey="incomeTotal" fill="#00d1b2" />
                <Bar dataKey="expenseTotal" fill="#f57f97" />
            </BarChart>
        );
    }
}