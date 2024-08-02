import * as React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

export default function CustomGauge({ value }) {

    const settings = {
        width: 200,
        height: 200,
        value: value,
        innerRadius: "60%",
        outerRadius: "75%",
    };
    return (
        <Gauge
            {...settings}
            cornerRadius="50%"
            text={
                ({ value }) => `${value} %`
             }
            sx={(theme) => ({
                [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 20,
                },
                [`& .${gaugeClasses.valueArc}`]: {
                    fill: '#54B62D',
                },
                [`& .${gaugeClasses.referenceArc}`]: {
                    fill: '#0D1B28',
                },
            })}
        />
    );
}