import '../App.css';
import BarraBusqueda from '../components/search';
import ProductCard from '../components/card';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
      
    />
  )); 
  return (
    
    <div className="App">
      <header className="App-header">
        <BarraBusqueda />
        {renderProductos}
      </header>
    </div>
  );
}

export default ListaProductos;