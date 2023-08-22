import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJs} from 'chart.js/auto';
import "../index.css";

function BarChart({mydata}) {

  

  

 
    const[bardata,setBarData]=useState({
      labels:mydata.map((item)=>item.title),
      datasets:[{
          label:"Money spent",
          data:mydata.map((item)=>item.price),
          backgroundColor:["skyblue","indianred"],
          borderColor:"black",
          borderWidth:2,
      }]
    });
      
   
      
      
  return (
    <div className='forBar'>
        <Typography variant='h3' textAlign="center">Bar Chart</Typography>
        <Bar data={bardata} style={{width:"800px", paddingTop:"50px",}} className='barr' />
        
    </div>
  )
}

export default BarChart