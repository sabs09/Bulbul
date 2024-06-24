import { Chart } from 'chart.js/auto'
import { useEffect, useRef } from 'react'

const ChartsUserInsigth = () => {
    const chartRef = useRef(null)
    useEffect(() => {
        const chart = chartRef.current
        const data = {
            labels: [
              'Kucing',
              'Anjing'
            ],
            datasets: [{
              label: 'Total',
              data: [65, 35],
              backgroundColor: [
                  'rgb(255, 205, 86)',
                  '#FFB3A3'
              ],
              hoverOffset: 4
            }]
          };

        const config = {
            type: 'pie',
            data: data,
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                console.log(tooltipItem);
                                return tooltipItem.dataset.label + ' : ' + tooltipItem.parsed + ' % ';
                            }
                        }
                    }
                }
            }
          };

        new Chart(chart, config)
    }, [])

  return (
    <canvas ref={chartRef}/>
  )
}

export default ChartsUserInsigth