import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {
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
    const handleClickHome = () =>{
      navigate('/')
  }
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" noWrap onClick={handleClickHome}>
          Mi Tienda
        </Typography>
        <form onSubmit={handleSubmit} sx={{ width: '70ch'}}>
          <Box sx={{display:'flex'}}>
            <Search>
            <StyledInputBase
                placeholder="Buscar…"
                inputProps={{ 'aria-label': 'search' }}
                onChange={(e) =>setText(e.target.value)}
            />
            </Search>
            <IconButton color="inherit" type='submit'>          
                <SearchIcon />
            </IconButton>
          </Box>
        </form>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" onClick={handleClick}>          
            <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
