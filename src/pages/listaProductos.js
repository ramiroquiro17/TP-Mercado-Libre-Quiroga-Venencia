import '../App.css';
import ProductCard from '../components/card';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/barra';
import { Grid, Container } from '@mui/material';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';

function ListaProductos() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [productos, setProductos] =useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() =>{
    console.log(data);
    setProductos(data)
  },[])
  const ultimoItem = paginaActual * 15;
  const primerItem = ultimoItem - 15;
  const productosActuales = productos.slice(primerItem, ultimoItem);
  const renderProductos = productosActuales.map((item) => (
    <Grid item xs={12} key={item.id}>
    <ProductCard 
      nombre={item.title}
      imagen={item.thumbnail}
      id={item.id}
      precio={item.price}
    />
    </Grid>
  )); 
  const handleSetPaginaActual = (page) => {
    setPaginaActual(page);
  };
  
  return (
    
    <div className="App">
      <Navbar />
      <header className="App-header" >
        <Container  className="container">
          <Grid container spacing={2}>
            {renderProductos}
          </Grid>
        </Container>
        <Box width={"98vw"} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={5}>
            <Pagination
            count={Math.ceil(productos.length / 15)}
            page={paginaActual}
            onChange={(event, page) => handleSetPaginaActual(page)}
            ariant="outlined" shape="rounded"
        />
        </Box>
      </header>
    </div>
  );
}

export default ListaProductos;