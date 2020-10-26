import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';


export class Dashboard extends Component {
    render() {
        const data = {
            labels: [
                'Health',
                'Misc Health',
                'Other',
                'Retirement'
            ],
            datasets: [{
                data: [40, 15, 20, 25],
                backgroundColor: [
                    '#0A3D62',
                    'green',
                    '#ffcc00',
                    '#ff6600'
                ],
                hoverBackgroundColor: [
                    '#0A3D62',
                    'green',
                    '#ffcc00',
                    '#ff6600'
                ]
            }]
        };
        return (
            <div >
                <div className='container-fluid'>
                    <div className='row mt-2'>
                        <div className='col-md-8 col-sm-12 col-xs-12'>
                            <span className='h4'>Welcome to Your personalized benefit dashboard, ABC</span>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-8 col-sm-12 col-xs-12'>
                            <span className='h1'>Dashboard</span>
                        </div>
                    </div>
                    <div className='row mt-2'>
                        <div className='col-md-6 col-sm-12 mt-1 col-xs-12 mr-5 shadow bg-light d-flex'>
                            <div className="card flex-fill" style={{backgroundColor:'inherit',border:'none'}}>
                            <div className='row mt-2'> 
                                <div className='col-md-9 col-sm-12 col-xs-12 col-sm-12'>
                                    <span className='h3'><b>Benefits overview</b></span>
                                </div>
                                <div className='col-md-3 col-sm-12 col-xs-12 text-left' style={{paddingTop:'5px'}}>
                                <a href="edit" style={{ textTransform: 'none' }}><h5>Edit</h5></a>
                                </div>
                            </div>
                            <div className='card-body mb-2'>
                                <Doughnut
                                height={170}
                                options={{
                                    elements: {
                                        arc: {
                                            borderWidth: 0
                                        },

                                    },
                                    cutoutPercentage: 65,
                                    legend: {
                                        display: true,
                                        position: 'right',
                                        align: "center",
                                        fontFamily: "Allianz-Neo",
                                        textDirection: 'ltr',
                                          labels: {
                                            usePointStyle: true,
                                            fontColor: "#006192",
                                          }
                                    }
                                }}
                                data={data} />
                            </div>
                            </div>
                        </div>
                        <div className='col-md-5 mt-1 col-sm-12 col-xs-12 shadow bg-light d-flex'>
                            <div className="card flex-fill" style={{backgroundColor:'inherit',border:'none'}}>
                            <div className='row mt-2'>
                                <div className='col-md-9 col-sm-12 col-xs-12'>
                                    <span className='h4'><b>Contributions overview</b></span>
                                </div>
                                <div className='col-md-3 col-sm-12 col-xs-12 text-left'>
                                    <a href="\" style={{ textTransform: 'none' }}><h5>Edit</h5></a>
                                </div>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-12 col-sm-12 col-xs-12'>
                                        <span><b>TOTAL BALANCE</b></span><br />
                                        <span className='h3'><b>$0</b></span>
                                    </div>
                                </div><br/>
                                <div className='row mt-3'>
                                    <div className='col-md-6 col-sm-12 col-xs-12'>
                                        <span><b>TOTAL VANGUARD ASSETS</b></span><br />
                                        <span className='h3'><b>$0</b></span>
                                    </div>
                                    <div className='col-md-6 col-sm-12 col-xs-12'>
                                        <span><b>CONNECTED ACCOUNT BALANCE</b></span><br />
                                        <span className='h3'><b>$0</b></span>
                                    </div>
                                </div><br/>
                                <div className='row mt-3 mb-2'>
                                    <div className='col-md-6 col-sm-12 col-xs-12'>
                                        <span><b>YEARLY CONTRIBUTIONS</b></span><br />
                                        <p className='h3'><b>$0</b></p>
                                    </div>
                                    <div className='col-md-6 col-sm-12 col-xs-12'>
                                        <span><b>RISK ATTRIBUTE</b></span><br />
                                        <p className='h3'><b>Moderate</b></p>
                                    </div>
                                </div>
                            </div>
                        
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;