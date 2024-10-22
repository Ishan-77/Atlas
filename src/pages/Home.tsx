import { Container, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Home:React.FC = () => {

    let navigate = useNavigate();


    return(
        <Container>
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            textAlign="center"
            bgcolor="#f5f5f5"
            padding={2}
            borderRadius={2}
            boxShadow={3}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Welcome to ATLAS
            </Typography>
            <img
                src = "https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                style={{ width: '300px', height: 'auto', borderRadius: '15px' }}
            />
            <Box mt={3}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    onClick={()=>navigate("/atlas/countries")}
                >
                    Explore
                </Button>
            </Box>
        </Box>
    </Container>
    )
}

export default Home