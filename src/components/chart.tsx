import * as React from 'react';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const chartdata = [
  { x: 1, y: 2 },
  { x: 2, y: 3 },
  { x: 3, y: 5 },
  { x: 4, y: 4 },
  { x: 5, y: 7 },
];

const Chart = () => {
  return (
    <>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryLine
          style={{
            data: { stroke: '#c43a31' },
            parent: { border: '1px solid #ccc' },
          }}
          data={chartdata}
        />
      </VictoryChart>
    </>
  );
};

export default Chart;
