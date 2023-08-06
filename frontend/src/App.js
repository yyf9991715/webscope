
import './App.css';
import Navbar from "./components/Navigationbar/Navigationbar"
import Footer from "./components/Footer/Footer"
import Aboutus from  "./pages/Aboutus/Aboutus"
import Home from "./pages/Home/Home"
import Userprofilsetting from './pages/Userprofilsetting/Userprofilsetting';
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Contactus from "./pages/Contactus/Contactus"
import Privacy from './pages/Privacy/Privacy';
import {Grid } from '@mui/material';
import Search from "./pages/Search/Search";
import Resource from "./pages/Resource/resource"
import Chatgpt from "./pages/Chatgpt/Chatgpt"
import Reviewandrating from './components/Rating&Review/Reviewandrating';


function App() {
  return (
    
    <>
    
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/home" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/review" Component={Reviewandrating} />
        <Route path="/signup" Component={Signup} />
        <Route path="/userprofilsetting" Component={Userprofilsetting} />
        <Route path="/aboutus" Component={Aboutus} />
        <Route path="/contactus" Component={Contactus} />
        <Route path="/privacy" Component={Privacy} />
        <Route path="/search" Component={Search} />
        <Route path="/resource/:id" Component={Resource} />
        <Route path="/user/:activepage" element={<Userprofilsetting/>} />
        <Route path="/chatgpt" Component={Chatgpt} />
        
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
