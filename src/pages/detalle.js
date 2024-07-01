import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/barra';


export default function Detalle() {
    const location = useLocation();
    const productoId = location.state;
    const [data,setData] = useState([])
    const showAlert = () => {
      window.alert('Producto agregado al carrito');
    };
    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${productoId}`)
        .then(response=> response.json())
        //.then(data => console.log(data))
        .then(data => setData(data))
        .catch(error => console.error('Error fetchingdata:',error))
    },[] )
    const handleClick = () =>{
        let primeraCompra = true
        let carrito = [];
        let carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
        if (!(carritoGuardado === null))
        carritoGuardado.forEach((element)=>{
            carrito.push(element)
        })
        carrito.forEach((element)=>{
          if(element.id ===data.id){
            element.cantidad  += 1
            primeraCompra =false
          }
        })
        if(primeraCompra ===true){
          data.cantidad=1
          carrito.push(data)
        }
       
       localStorage.setItem('carritoGuardado',JSON.stringify(carrito));
       showAlert()
       
    }
  return (
    <><Navbar /><Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <img src={data.thumbnail} />
            <Typography variant="h5" component="div">
              {data.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>Agregar al Carrito</Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box></>
  );
}

