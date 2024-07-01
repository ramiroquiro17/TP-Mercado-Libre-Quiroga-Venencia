import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { CardMedia, useThemeProps } from '@mui/material';


export default function Detalle() {
    const location = useLocation();
    const productoId = location.state;
    const [data,setData] = useState([])
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${productoId}`)
        .then(response=> response.json())
        //.then(data => console.log(data))
        .then(data => setData(data))
        .catch(error => console.error('Error fetchingdata:',error))
    },[] )
    const handleClick = () =>{
        let carrito = [];
        let carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
        if (!(carritoGuardado === null))
        carritoGuardado.forEach((element)=>{
            carrito.push(element)
        })
       carrito.push(data)
       localStorage.setItem('carritoGuardado',JSON.stringify(carrito));
       
    }
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
        <CardContent>
            <img src={data.thumbnail}/>
          <Typography variant="h5" component="div">
            {data.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick}>Agregar al Carrito</Button>
        </CardActions>
      </React.Fragment>
      </Card>
    </Box>
  );
}
