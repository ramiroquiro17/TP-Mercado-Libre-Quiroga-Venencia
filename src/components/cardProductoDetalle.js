import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


export default function CardProductoDetalle(props) {
  return (
    <Box sx={{ width: 850 }}>
      <Card variant="outlined">
        <Box sx={{display:'flex', padding:3}}>
          <Box sx={{maxWidth:400}}>
            <Typography variant="h5" component="div">
              {props.nombre}
            </Typography>
            
          </Box>
          <Box sx={{marginLeft:5, marginRight:5}}>
            <Typography variant="h5" component="div">
            cantidad: {props.cantidad}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" component="div">
            precio: {(props.precio*props.cantidad).toFixed(2)}  
            </Typography>
            
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

