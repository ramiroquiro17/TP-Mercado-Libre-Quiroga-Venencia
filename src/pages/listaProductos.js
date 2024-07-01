import '../App.css';
import ProductCard from '../components/card';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/barra';

function ListaProductos() {
  const [productos, setProductos] =useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() =>{
    console.log(data);
    setProductos(data)
  },[])
  const renderProductos = productos.map((item) => (
    <ProductCard 
      key={item.id} 
      nombre={item.title}
      imagen={item.thumbnail}
      id={item.id}
      precio={item.price}
    />
  )); 
  return (
    
    <div className="App">
      <Navbar />
      <header className="App-header">
        {renderProductos}
      </header>
    </div>
  );
}

export default ListaProductos;