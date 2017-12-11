import React, { Component } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Label,
    LabelList
} from 'recharts';

export default class SummaryChart extends Component {
    render() {
        const summaryData = [
            { name: 'Summary', 
            incomeTotal: parseFloat(this.props.incomeTotal), 
            expenseTotal: parseFloat(this.props.expenseTotal)  },
        ];
        return (
            <BarChart width={850} height={200} data={summaryData}
                layout="vertical" barGap="12.5%">
                <XAxis type="number"
                    domain={[0, dataMax => ((dataMax * 1.1).toFixed(2))]}>
                    <Label value="Amount (USD)" offset={ 0 } position="insideBottom" />
                </XAxis>
                <YAxis type="category"
                    tick={false}
                    dataKey="name" />
                <Bar dataKey="incomeTotal" fill="#00d1b2">
                    <LabelList dataKey="incomeTotal" position="right" />
                </Bar>
                <Bar dataKey="expenseTotal" fill="#f57f97">
                    <LabelList dataKey="expenseTotal" position="right" />
                </Bar>
            </BarChart>
        );
    }
}