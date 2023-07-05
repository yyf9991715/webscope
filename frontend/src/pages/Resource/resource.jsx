import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './resource.css';
import Reviewandrating from '../../components/Rating&Review/Reviewandrating';
import {useParams} from "react-router-dom"
import axios from 'axios';
import Starrating from '../../components/Rating&Review/Starrating';
import {useNavigate } from "react-router-dom";
import {MdFavorite} from "react-icons/md"

const Resource = (props) => {
  const navigate=useNavigate()
  const {id} = useParams();
  const bookid=Number(id);
  const [values,setValues]=useState({});
  console.log(bookid);
  const [ratings,setRatings]=useState([{}]);
  const[add,setAdd]=useState(false);

  
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
  const handleOnclick=()=>{
    if(add){
      setAdd(false);
    }else
    setAdd(true);
  }

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
          <br />
          <br />
          <br />
           <Starrating
           nrating={values.avg_reviews}
           />
           <p> Average Rating:{values.avg_reviews}</p>
           <br />
           
           <br />
          <MdFavorite
          className='heart'
          size={30}
          onClick={handleOnclick}
          color={add?"red":"#e4e5e9"}
          />
          <p>add to my library</p>
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
                  
                  <div className="user-rating">
                    <Starrating
                    nrating={rating.rating}/>
                     Rating: {rating.rating}
                  </div>
                  {rating.review}
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

      
      
    </div>
  );
};

export default Resource;

