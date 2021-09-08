import React from 'react'
import { Chart } from 'react-charts'
 
function AnotherChart() {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: 'Series 2',
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      type: 'bubble'
    }),
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'right', stacked: true }
    ],
    []
  )
 
  const lineChart = (

    <div
      style={{
        width: '100%',
        height: '300px'
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  )

  return lineChart;
}

export default AnotherChart;