import React,{useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import CardProductoDetalle from '../components/cardProductoDetalle';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Navbar from '../components/barra';

export default function DetalleCompra() {
    const [precioTotal,setPrecioTotal] = useState(0)
    const navigate = useNavigate();
    let carrito = [];
    let carritoGuardado = JSON.parse(localStorage.getItem('carritoGuardado'))
    if (!(carritoGuardado === null))
    carritoGuardado.forEach((element)=>{
        carrito.push(element)
    })
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
    const renderDetalleCompra = carrito.map((item,index) => (
      <CardProductoDetalle 
      key={index}
      carritoId={index} 
      nombre={item.title}
      imagen={item.thumbnail}
      cantidad={item.cantidad}
      id={item.id}
      precio={item.price}  
      />
    )); 
    const handleClick = () =>{
        carrito = []
        localStorage.setItem('carritoGuardado',JSON.stringify(carrito));
        navigate("/")
        window.alert('Compra confirmada');
      }
  return (
    <><Navbar /><Box sx={{ minWidth: 275 }}>
      {renderDetalleCompra}
      precio Total:{precioTotal.toFixed(2)}
      <Button variant="outlined"
        onClick={handleClick}
      >
        Confirmar
      </Button>
    </Box></>
  );
}
