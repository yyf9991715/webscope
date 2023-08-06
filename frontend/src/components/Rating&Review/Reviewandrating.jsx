import React, { useState } from 'react';
import './Reviewandrating.css';
import Starrating from './Starrating';
import axios from 'axios';
import {useNavigate } from "react-router-dom";

const Reviewandrating = ({nitemid,nuserid}) => {
  const navigate=useNavigate();
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [data,setData]=useState({
    userid:nuserid,
    itemid:nitemid,
    review:"null",
    rating:""
  })

  const handleRatingChange = (newRating) => {
    setData({...data,rating:newRating});
  };


  const handleCancel = () => {
    // Handle cancel logic here
    console.log('Cancel');
    document.getElementById("review-text").value = "";
    
  };

  const handleSendReview = () => {
    // Handle send review logic here
    console.log(data);
    if(data.userid){
      if(data.rating){
    axios.post("http://localhost:4000/review/newreview",data)
      .then(res=>{
          console.log(res.data.Status);
          if(res.data.Status==="success") {
            alert("success updated!");
            window.location.reload(false);
          }
          else{
            alert("please write something!")
          }
      })
      }else{
        alert("please select rating");
      }
    } else{
      alert("not login,please login firstly");
    }
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <br />
        
        <h2>Rate and review the product</h2>
        
      </div>
      <div className="rating-container">
          <label>
          <p>For user:{localStorage.getItem("userName")?localStorage.getItem("userName"):"not login!"}</p>
          Choose your rating:
          <br />
          <select name="selectedFruit"
          onChange={e=>setData({...data,rating:e.target.value})} >
            <option >--------------------------------Select rating------------------------------</option>
            <option value={1}>1:you didn’t enjoy it at all and would not recommend it to others.</option>
            <option value={2}>2:you didn’t enjoy it but might recommend it to others.</option>
            <option value={3}>3:you enjoyed it, but it wasn’t your favorite.</option>
            <option value={4}>4:you really enjoyed it and would recommend it to others.</option>
            <option value={5}>5:you loved it and would definitely recommend it to others.</option>
          </select>
        </label>
      </div>
      <div className="review-input">
        <p>Write your review:</p>
        <textarea
          id='review-text'
          type="text"
          placeholder="Write your review..."
          onChange={e=>setData({...data,review:e.target.value})}
        ></textarea>
      </div>
      <div className="button-container">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="send-button" onClick={handleSendReview}>
          Send Review
        </button>
      </div>
    </div>
  );
};

export default Reviewandrating;

