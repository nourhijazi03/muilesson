
import "./create.css";
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { TextField,Box } from '@mui/material';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';
import InputAdornment from '@mui/material/InputAdornment';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from "react-router-dom";

export default function Create({setAdded, added}) {
  const[title,setTitle]=useState("");
  const[price,setPrice]=useState(0);
  const navigate=useNavigate();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  return (
    <Box component="form" sx={{width:"380px"}}>
         <TextField
          onChange={(e)=>{
            setTitle(e.target.value);
          }}
          fullWidth
          label="Transaction Title"
          sx={{ display:"block",mt:"22px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">&#11088;</InputAdornment>,
          }}
          variant="filled"
        />

      <br/>
      <TextField
          onChange={(e)=>{
            setPrice(Number(e.target.value));
          }}
          fullWidth
          label="Transaction Amount"
          sx={{ display:"block",mt:"22px"}}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
      />

      <ColorButton variant="contained" sx={{mt:"11px"}}
      onClick={(params)=>{
        fetch("http://localhost:3100/myData",{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({title,price})
        }).then(()=>{
          setAdded(!added);
          navigate("/");
        })
        window.alert("item has been saved");
      }}>

          Submit 
          <ChevronRightIcon/>
      </ColorButton>
      
    </Box>
  )
}
