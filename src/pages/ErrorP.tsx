
import { useRouteError, useNavigate } from "react-router-dom";
import { Container, Box, Typography, Button } from '@mui/material';

const ErrorP: React.FC = () => {
  const err = useRouteError();
  const navigate = useNavigate();
  console.log(err);

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
        bgcolor="#f5f5f5"
        padding={4}
        borderRadius={2}
        boxShadow={3}
      >
        <Typography variant="h4" component="h1" gutterBottom color="error">
          Error Encountered
        </Typography>
        <Typography variant="body1" gutterBottom>
          Something went wrong. Please try again later.
        </Typography>
        <Box mt={3}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => navigate(-1)} // back to prev
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorP;