import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function ProductCard(props) {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/detalle', { state: props.id })
        
    }
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
        <img src={props.imagen}/>
        <CardContent>
          <Typography variant="h5" component="div">
            {props.nombre}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={
            handleClick
            }>ver más</Button>
        </CardActions>
      </React.Fragment>
      </Card>
    </Box>
  );
}
