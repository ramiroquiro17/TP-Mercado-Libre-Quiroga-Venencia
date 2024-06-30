import '../App.css';
import BarraBusqueda from '../components/search';
import { useState } from 'react';

function Home() {
  const [productos, setProductos] =useState([]);
  const mostrarProductos = (data) =>{
    console.log(data);
    setProductos(data)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <BarraBusqueda mostrarProductos={mostrarProductos}/>
        
      </header>
    </div>
  );
}

export default Home;