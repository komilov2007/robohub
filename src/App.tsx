import { Routes, Route } from 'react-router-dom';
import { Box, Container, useMediaQuery } from '@mui/material';
import LoginLeft from './components/login/page';
import Home from './components/home/home';
import { LoginRight } from './components/login/loginright';
import  Register  from './components/register/page';
import Page from './components/forget-login/page';
import OtpVerifyPage from './components/otp-verificate/page';
import  Success  from './components/resgister-success/page';

const LoginPage = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <Container sx={{width:"100%",display:'flex'}} maxWidth={false} disableGutters>
      <Box
        sx={{
          display: 'flex',
          height: '100vh',
          width: '100%',
        }}
      >
        <LoginLeft />
      </Box>
        {!isMobile && <LoginRight />}
    </Container>
  );
};



function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forget-password" element={<Page />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp-verify" element={<OtpVerifyPage />} />
      <Route path='/register/success' element={<Success/>}/>

    </Routes>
  );
}

export default App;
