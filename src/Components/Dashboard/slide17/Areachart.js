import React from 'react'


import {Line} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';

function AreaChart(){
    const data={
        type:'Area',
            labels:['Age 25','','','','Retirement',''],
            datasets:[{
               label:'',
                data:[125,250,200,500,750,900],
                backgroundColor:'green',
                pointBackgroundColor:null,
                lineTension:0
             } ]
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
        yAxes:[
            {
                ticks:{
                    min:0,
                    max:1000,
                    stepsize:250
                },
                position:'right',
               
            },
            
        ],
        xAxes:[
            {
                display:true,
                fontSize:500
                
            }
        ],
        gridLines:[
            {
                display:false
            }
        ]
        
    },
maintainAspectRatio:false}
    
    
    return (<Line width={800}height={500}  data={data}  options={option}/>
       
        )
}
export default AreaChart
