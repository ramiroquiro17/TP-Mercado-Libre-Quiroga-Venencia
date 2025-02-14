import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home';
import ListaProductos from './pages/listaProductos';
import Detalle from "./pages/detalle";
import Carrito from "./pages/carrito";
import DetalleCompra from "./pages/detalleCompra";

function App() {
  localStorage.setItem('carritoGuardado',JSON.stringify(null));
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ListaProductos />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/detalleCompra" element={<DetalleCompra />} />
      </Routes>
    </Router>
  );
}

export default App;
