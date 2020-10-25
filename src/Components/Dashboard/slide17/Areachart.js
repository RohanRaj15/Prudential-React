import React from 'react'
import {Line} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

function AreaChart(){
    const data={
        type:'Area',
            labels:['Age 25','','','','','','Retirement','Age 85'],
            datasets:[
                {
                    label:'',
                     data:[125,165,0],
                     backgroundColor:'rgba(0, 255, 0, 0.3)',
                     pointBackgroundColor:null,
                     lineTension:0,
                     pointRadius:0
                  },{
                    label:'',
                     data:[0,0,0,0,0,350,650,800],
                     backgroundColor:'rgba(0, 255, 0, 0.3)',
                     pointBackgroundColor:null,
                     lineTension:0,
                     pointRadius:0
                  },
                {
               label:'',
                data:[125,165,250,200,350,450,750,900],
                backgroundColor:'#009900',
                pointBackgroundColor:null,
                lineTension:0,
                pointRadius:0
             },
              ]
    }
    const option={
        legend:{
            display:false
        }
        ,
        label:{
            fontSize:100
        },
    scales:{
        yAxes: [{
            position:'right',
            ticks: {
                beginAtZero:true,
                min: 0,
                max: 1250,
                stepSize:250,
                    
            }
          }],
        xAxes:[
            {
                display:true,
                ticks: {
                    fontSize: 16,
                    fontStyle: "bold"
                
                }
            }
        ],
        gridLines:[
            {
                display:false
            }
        ]
        
    },
maintainAspectRatio:false}
    
    
    return (<Line width={800}height={300}  data={data}  options={option}/>
       
        )
}
export default AreaChart
