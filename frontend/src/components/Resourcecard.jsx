import React from 'react'
import "./Resourcecard.css"
import {Link} from 'react-router-dom';
const style={
    theme:{
        height:"75vh"
    },
    linktext:{
        color:"gray"
    }
}
function Resourcecard({image,title,description,rating,linkto}) {
  return (
    <div>
        <div className="resource">
              <img
                src={image}
                alt="Resource"
                className="resource-image2"
              />
              <div className='resource-details'>
              <div className="resource-details2">
                <h3 className="resource-title2">
                  {title}
                </h3>
                <p className="resource-description2">
                  {description}
                </p>
                <div className="resource-rating2">
                  Rating: {rating}
                </div>
              </div>
                <div className='resource-link'>
                    <Link to={linkto}
                    style={style.linktext}>
                        more
                    </Link>
                </div>

              </div>
              
        </div>

        
      
    </div>
  )
}

export default Resourcecard
