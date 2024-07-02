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
    
    <><Navbar />
    <header className='Carrito-header'>
      <Box sx={{ minWidth: 275}}> 
        <Card variant="outlined" sx={{padding:5, display:'flex'}}>
          <Box>
            <Typography variant="h3" component="div">
                {data.title}
            </Typography>
            {(data.pictures) && ( <img src={data.pictures[0].url} alt={data.title} />)}
          </Box>
          <CardContent>
            
            <Box>
              <Typography variant="h5" component="div">
              Precio: $ { data.price}
              </Typography>
              <Typography variant="h5" component="div">
                Descripción: {data.title}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>Agregar al Carrito</Button>
          </CardActions>
        </Card>
      </Box>
    </header></>
  );
}
