import React,{useState} from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function CarritoCard(props) {
    
    const [cantidad,setCantidad] = useState(props.cantidad)
    const handleClickSumar = () =>{
      props.agregarAlCarrito(props.carritoId)
      let cantidadActual = cantidad
      setCantidad(cantidadActual+=1)
        
    }
    const handleClickRestar = () =>{
      props.quitarDelCarrito(props.carritoId)
      let cantidadActual = cantidad
      setCantidad(cantidadActual-=1)
        
    }
  return (
    <Box sx={{ width: 900, marginTop:'1ch' }}>
      <Card variant="outlined">
        <Box sx={{  display:'flex'}}>
          <img src={props.imagen}/>
          <Box sx={{width:'max'}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {props.nombre}
              </Typography>
              
            </CardContent>
          </Box>
          <Box sx={{marginRight:'auto'}}>
            <CardActions>
            <Stack direction="row" spacing={2}>
              <Button variant="outlined" onClick={handleClickRestar}>
                -
              </Button>
              <Box sx={{margin:1}}>
                {cantidad}
              </Box>
              <Button variant="outlined" onClick={handleClickSumar}>
                +
              </Button>
            </Stack>
            </CardActions>
            <p>
              $ {(props.precio*cantidad).toFixed(2)} 
            </p> 
        </Box>
      </Box>
      </Card>
    </Box>
  );
}

