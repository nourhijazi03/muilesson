import "./home.css";
import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";



export default function Home({mydata,setMydata}) {
//    const [mydata, setMydata] = useState([]);
//   let totalPrice=0;
//   useEffect(() => {
//     fetch("http://localhost:3100/myData")
//       .then((response) => response.json())
//       .then((data) => setMydata(data));
// },[]);
let totalPrice=0;
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice+=item.price
        return (
          <Paper 
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography variant="h6" sx={{ ml: "16px" }}>
              {item.title}
            </Typography>
            <Typography variant="h6" sx={{ mr: "33px" }}>
              $ {item.price}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3100/myData/${item.id}`, {
                  method: "DELETE",
                });
                const newObj=mydata.filter((myObject)=>{
                  return myObject.id !== item.id
                })
                setMydata(newObj)
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography variant="h6" textAlign="center" mt="10px">
        Total: ${totalPrice}
      </Typography>
      
    </Box>
  );
 
}

