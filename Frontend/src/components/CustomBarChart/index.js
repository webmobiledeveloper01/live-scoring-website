import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function CustomBarChart() {
    const [isResponsive, setIsResponsive] = React.useState(false);

    const Container = isResponsive ? ResponsiveChartContainer : ChartContainer;
    const sizingProps = isResponsive ? {} : { width: 200, height: 200 };
    return (
           
                <Container
                    series={[
                        {
                            type: 'bar',
                            data: [4, 2, 3],
                        }
                    ]}
                    xAxis={[
                        {
                            data: ['Win', 'Lose', 'Draw'],
                            scaleType: 'band',
                            axisLine:false,
                            id: 'x-axis-id',
                            colorMap: {
                                type: "ordinal",
                                values: ['Win', 'Lose', 'Draw'],
                                colors: ["#49BF1B","#E64759","#D7A527"],
                              },
                        },
                    ]}
                    {...sizingProps}
                >
                    <BarPlot slotProps={{
                        bar: {
                            clipPath: `inset(8px round 10px 10px 10px 10px)`,
                        },
                    }} />
                    <ChartsXAxis axisId="x-axis-id" />
                </Container>
    );
}