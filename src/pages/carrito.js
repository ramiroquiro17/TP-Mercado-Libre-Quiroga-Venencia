import * as React from 'react';
import Box from '@mui/material/Box';
import CarritoCard from '../components/carritoCard';

export default function Carrito(props) {
    let carrito = [];
    let carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
    if (!(carritoGuardado === null))
    carritoGuardado.forEach((element)=>{
        carrito.push(element)
    })
    
    const renderCarrito = carrito.map((item) => (
        <CarritoCard 
          key={item.id} 
          nombre={item.title}
          imagen={item.thumbnail}
          id={item.id}
          
        />
      ));     
    
  return (
    <Box sx={{ minWidth: 275 }}>
      {renderCarrito}
    </Box>
  );
}
