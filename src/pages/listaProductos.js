import '../App.css';
import ProductCard from '../components/card';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/barra';
import { Grid, Container } from '@mui/material';

function ListaProductos() {
  const [productos, setProductos] =useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() =>{
    console.log(data);
    setProductos(data)
  },[])
  const renderProductos = productos.map((item) => (
    <Grid item xs={12} key={item.id}>
    <ProductCard 
      nombre={item.title}
      imagen={item.thumbnail}
      id={item.id}
      precio={item.price}
    />
    </Grid>
  )); 
  return (
    
    <div className="App">
      <Navbar />
      <header className="App-header" >
        <Container  className="container">
          <Grid container spacing={2}>
            {renderProductos}
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default ListaProductos;