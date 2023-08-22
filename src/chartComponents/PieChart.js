import React, { useState } from 'react';
import {Pie} from "react-chartjs-2";
import {Chart as ChartJs} from 'chart.js/auto';
import { Typography } from '@mui/material';

function PieChart({mydata}) {
    const[bardata,setBarData]=useState({
        labels:mydata.map((item)=>item.title),
        datasets:[{
            label:"Money spent",
            data:mydata.map((item)=>item.price),
            backgroundColor:["skyblue","indianred","yellow","pink"],
            borderColor:"black",
            borderWidth:2,
        }]
      });
  return (
    <div>
        <Typography variant='h3' textAlign="center">Bar Chart</Typography>
        <Pie data={bardata} style={{width:"90%"}} />
    </div>
  )
}

export default PieChart