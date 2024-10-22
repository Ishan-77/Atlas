import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ATLAS
            </Typography>
            <Button onClick={()=>navigate(-1)} color="inherit">Home</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Navbar;

