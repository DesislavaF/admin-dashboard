import React, {useEffect} from 'react';
import * as echarts from 'echarts';

function WebTrafficChart() {
    useEffect(() => {
        echarts.init(document.querySelector('#trafficChary')).setOption({
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '18',
                            fontWeight: 'bold'
                        }
                    }
                }
            ]
        })
    })
  return (
    <div>WebTrafficChart</div>
  )
}

export default WebTrafficChart