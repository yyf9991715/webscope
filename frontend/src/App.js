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
      </Routes>
    </div>
    <Footer/>
  </>

    
  );
}

export default App;
