import * as React from 'react';
import {
  VictoryChart,
  VictoryZoomContainer,
  VictoryLine,
  VictoryTheme,
} from 'victory';
import UsaData from '../data/usa-data.json';

var numArray = UsaData.data.map((a) => a.Population);
numArray.sort((a, b) => {
  return a - b;
});

const low = [];
const high = [];

console.log(numArray);

function Chart({ type }) {
  if (UsaData) {
    const newArray = UsaData.data
      .map(({ Year, Population }) => ({
        ['x']: Year,
        ['y']: Population,
      }))
      .reverse();
    console.log('newArray', newArray);
    return (
      <>
        <VictoryChart
          height={200}
          width={300}
          theme={VictoryTheme.material}
          containerComponent={<VictoryZoomContainer />}
        >
          <VictoryLine
            style={{
              data: { stroke: '#c43a31' },
              parent: { border: '1px solid #ccc' },
              padding: { top: 20, bottom: 50, left: 60, right: 60 },
            }}
            data={newArray}
          />
        </VictoryChart>
      </>
    );
  }
}

export default Chart;
