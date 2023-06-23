import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navigationbar"
import Footer from "./components/Footer"
import Aboutus from  "./pages/Aboutus"
import Home from "./pages/Home"
import Userprofilsetting from './pages/Userprofilsetting';
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import Contactus from "./pages/Contactus"
import Privacy from './pages/Privacy';
import {Grid } from '@mui/material';

function App() {
  return (
    
    <>
    
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/userprofilsetting" Component={Userprofilsetting} />
        <Route path="/aboutus" Component={Aboutus} />
        <Route path="/contactus" Component={Contactus} />
        <Route path="/privacy" Component={Privacy} />
        <Route path="/user/:activepage" element={<Userprofilsetting/>} />
        <Route path="*" Component={
          <div>
            <h1>404 NOT FOUND</h1>
          </div>
        }/>
        </Routes>
    </div>
    <Grid container xs={12}md={12}>
        <Footer/>
    </Grid>
    
  </>

    
  );
}

export default App;
