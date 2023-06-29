import {useParams} from "react-router-dom"
import Singlebanner from "../components/Singlebanner"
import Usersidebar from "../components/UserProfil/Usersidebar";
import Accountsetting from "../components/UserProfil/Accountsetting";
import "./Userprofilsetting.css"
import Mylibrary from "../components/UserProfil/Mylibrary";
import Myreviewandrating from "../components/UserProfil/Myreviewandrating"
import Changepassword from "../components/UserProfil/Changepassword"
import imgbac from "../assets/image-4.jpg"
import Footer2 from "../components/Footer2";
const person = {
    name: 'User',
    theme: {
      backgroundColor: 'white',
      color: 'black',
      height:"100vh"

    }
  };
const Userprofilsetting =()=>{

  const {activepage}=useParams()

  //alert(activepage)
  return(
    <div className="userprofil">
      <Singlebanner 
      heading="My Profile"
      bannerimage={imgbac}
      />
      <div className="sub-userprofil">
        <div className="left">
          <Usersidebar activepage={activepage}/>
        </div>
        <div className="right">
          {activepage=== 'accountsetting'&&<Accountsetting/>}
          {activepage==="mylibrary" &&<Mylibrary/>}
          {activepage==="myreviewandrating" &&<Myreviewandrating/>}
          {activepage==="changepassword" &&<Changepassword/>}
          
        </div>
      </div>
      
      
       <Footer2/>
    </div>
  )
}

  
  export default Userprofilsetting
    
  