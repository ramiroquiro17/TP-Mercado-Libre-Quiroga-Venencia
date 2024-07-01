import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function CardProductoDetalle(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
        <img src={props.imagen}/>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.nombre}
          </Typography>
          
        </CardContent>
        <CardActions>
          cantidad: {props.cantidad}
        precio: {(props.precio*props.cantidad).toFixed(2)}  
        </CardActions>
      </React.Fragment>
      </Card>
    </Box>
  );
}

