import React, { Component } from "react";
import "./oneTimeLoan.css";

import Typography from "@material-ui/core/Typography";
import "bootstrap/dist/css/bootstrap.min.css";

import AreaChart from "./Areachart";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="para1">
          <h1 className='mt-3 h1'>One-time loan for $75,000</h1>

          <h6>
            <b>for a down payment of your future home</b>
            <span className="p ml-5 badge badge-pill" style={{backgroundColor:'#0A3D62',color:"whitesmoke"}}>
              {" "}
              start one time loan
            </span>
          </h6>

          <h4 className="h4 mt-4">
            <b>Impact targectory </b>
            <span className="p1 ml-5 badge badge-pill" style={{backgroundColor:'white',color:"black",border:'3px solid black'}}>
              {" "}
              recalculate
            </span>
          </h4>
          <div className="chart">
            <AreaChart />
          </div>

          <div className="box1">
            well funded <span>&#8505;</span>
          </div>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
            ultrices mi tempus imperdiet. Semper risus in hendrerit gravida
            rutrum quisque non tellus.
          </Typography>
        </div>
      </div>
    );
  }
}

export default Dashboard;
