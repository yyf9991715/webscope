import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './resource.css';
import Reviewandrating from '../../components/Rating&Review/Reviewandrating';
import {useParams} from "react-router-dom"
import axios from 'axios';
import Starrating from '../../components/Rating&Review/Starrating';
import {useNavigate } from "react-router-dom";

const Resource = (props) => {
  const navigate=useNavigate()
  const {id} = useParams();
  const bookid=Number(id);
  const [values,setValues]=useState({});
  console.log(bookid);
  const [ratings,setRatings]=useState([{}]);


  
  useEffect(()=>{
      axios.get('http://localhost:4000/book/detail/'+bookid)
        .then(res=>{
          let resbook=res.data.resbook;
          if(resbook.avg_reviews) resbook.avg_reviews=resbook.avg_reviews.$numberDecimal;
          if(resbook.price) resbook.price=resbook.price.$numberDecimal;
          setValues(resbook);
        }).catch(err=>console.log(err))
        axios.get("http://localhost:4000/review/byitemid/"+bookid)
          .then(res=>{
            setRatings(res.data);
            console.log("ratings",res.data);
          })
  },[]);
  const resourceData = {
    opinion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacus id justo interdum laoreet ut sed purus. Etiam ac consequat odio. Aliquam quis lectus ut arcu viverra gravida at non arcu. In gravida ex a enim maximus, at laoreet nisi lobortis. Proin non tellus volutpat, convallis orci vitae, pharetra nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc posuere auctor mi, vitae euismod nisl ullamcorper eu. Sed lobortis laoreet sollicitudin. Vestibulum pretium elit at lectus aliquam, vitae cursus quam ullamcorper. Sed aliquet felis vel vulputate efficitur. Fusce in lacus ac orci auctor bibendum. Cras bibendum tempor neque, eget varius ligula dictum at.",
  };

  const renderStarRating = (rating) => {
    // Rating rendering logic here
  };

  return (
    <div>
      <div className="resource-container">
        <div className="left">
          <img src="https://toppng.com/uploads/preview/code-interrogation-blank-red-book-cover-11569063098n6btr5iejc.png" alt="Resource" />
        </div>
        <div className="middle">
          <h2> {values.title}</h2>
          <br />
          <p>Price:{values.price}</p>
          <p>Pages:{values.pages?values.pages:"null"}</p>
          <p>Number of reviews:{values.n_reviews}</p>
          <p>Language:{values.language?values.language:"null"}</p>
          <a href={values.complete_link}>Go To Amazon Link</a>
        </div>
        <div className="right">
          <p> Average Rating:{values.avg_reviews}</p>
           <Starrating
           nrating={values.avg_reviews}
           
           />
           <script>
          
           </script>
          
          </div>
      </div>
      <div className="content-container">
        <div className="left">
          
          {ratings.map((rating) => (
            <div className="rating-item">
              <div className="user-details">
                <div className="user-name">
                  User:{rating.userName}
                  </div>
                <div className="user-comment">
                  {rating.review}
                  <div className="user-rating">
                    Rating: {rating.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <div className='right'>
            <Reviewandrating
            nitemid={bookid}
            nuserid={localStorage.getItem("userid")}
            />
        </div>
      </div>

      <div className="opinion-container">
          <div className="opinion-title">ChatGPT's Opinion</div>
          <div className="opinion-text">{resourceData.opinion}</div>
      </div>
      
    </div>
  );
};

export default Resource;

