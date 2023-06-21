import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navigationbar"
import Footer from "./components/Footer"
import Aboutus from  "./pages/Aboutus"
import Home from "./pages/Home"
import Userprofilsetting from './pages/Userprofilsetting';
import { Route, Routes } from "react-router-dom"
import Login from './pages/login';
import Signin from './pages/signin';
import Contactus from "./pages/Contactus"
import Privacy from './pages/Privacy';


function App() {
  return (
    
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signin" Component={Signin} />
        <Route path="/userprofilsetting" Component={Userprofilsetting} />
        <Route path="/aboutus" Component={Aboutus} />
        <Route path="/contactus" Component={Contactus} />
        <Route path="/privacy" Component={Privacy} />
      </Routes>
    </div>
    <Footer/>
  </>

    
  );
}

export default App;
