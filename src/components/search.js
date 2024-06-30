import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Search from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BarraBusqueda = () =>{
    const [texto,setText] = useState('')
    const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${texto}`)
    .then(response=> response.json())
    //.then(data => console.log(data))
    .then(data => navigate('/productos', { state: data.results }))
    .catch(error => console.error('Error fetchingdata:',error))
}    
const handleClick = () =>{
    navigate('/carrito')
}
return (
<Box
    sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
>
    <form onSubmit={handleSubmit}>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) =>setText(e.target.value)} />
    <Button variant="outlined"type='submit'><Search/></Button>
    </form>
    <Button variant="outlined" onClick={
        handleClick
    }>Ir al carrito</Button>
</Box>
);
}
export default BarraBusqueda;