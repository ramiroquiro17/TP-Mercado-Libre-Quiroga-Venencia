import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import CarritoCard from '../components/carritoCard';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from '../components/barra';
import Card from '@mui/material/Card';

export default function Carrito() {
    const [precioTotal,setPrecioTotal] = useState(0)
    const navigate = useNavigate();
    let carrito = [];
    let carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
    if (!(carritoGuardado === null))
    carritoGuardado.forEach((element)=>{
        carrito.push(element)
    })
    const agregarAlCarrito = (productoId) =>{
      carrito[productoId].cantidad += 1
      localStorage.setItem('carritoGuardado',JSON.stringify(carrito));
      actualizarPrecio()
    }
    const quitarDelCarrito = (productoId) =>{
      carrito[productoId].cantidad -= 1
      if(carrito[productoId].cantidad ===0){
        carrito.splice(productoId,1)
        localStorage.setItem('carritoGuardado',JSON.stringify(carrito));
        console.log(carrito)
        navigate('/carrito')
      }
      localStorage.setItem('carritoGuardado',JSON.stringify(carrito));
      actualizarPrecio()
    }
    useEffect(() => {
      actualizarPrecio()
    },[] )
    const actualizarPrecio = () =>{
      let precio = 0
      carrito.forEach((element)=>{
        precio+= (element.price*element.cantidad)
      }) 
      setPrecioTotal(precio)
    }
    
    const renderCarrito = carrito.map((item,index) => (
      <CarritoCard 
      key={index}
      carritoId={index} 
      nombre={item.title}
      imagen={item.thumbnail}
      cantidad={item.cantidad}
      id={item.id}
      precio={item.price}
      agregarAlCarrito={agregarAlCarrito}
      quitarDelCarrito={quitarDelCarrito}
        
      />
    )); 
    const handleClick = () =>{
      navigate("/detalleCompra")
    }
  return (
    <><Navbar /><header className="App-header">
      <Box sx={{ minWidth: 275 , display:'flex'}}>
        <Box>
          {renderCarrito}
        </Box>
        <Card variant="outlined" sx={{height:200, padding:5, marginTop:'1ch', marginLeft:'1ch'}}>
          <p>
            Precio Total: $ {precioTotal.toFixed(2)}
          </p>
          <Button variant="outlined"
            onClick={handleClick}
          >
            Realizar Compra
          </Button>
        </Card >
      </Box>
    </header></>
  );
}
