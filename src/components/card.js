import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function ProductCard(props) {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate('/detalle', { state: props.id })
        
    }
  return (
  <Box sx={{ minWidth: 275, mb: 2 }}>
    <Card variant="outlined">
    <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={props.imagen} alt={props.nombre} style={{ maxWidth: '20%', maxheight:'20%' ,height: 'auto', width:'auto', paddingTop:'20px', cursor: 'pointer'}} onClick={handleClick} />
          </Grid>
          <Grid item xs={8}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h5" component="div" sx={{ textAlign: 'left', marginLeft: 0 }}>
                {props.nombre}
              </Typography>
              <Typography variant="body2"  sx={{ textAlign: 'left' }}>
                Precio: ${props.precio}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 2, paddingRight: 2 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: 'blue',
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'darkblue',
                  },
                }}
                onClick={handleClick}
              >
                Ver más
              </Button>
            </CardActions>
          </Grid>
        </Grid>
    </React.Fragment>
    </Card>
  </Box>
);
}

