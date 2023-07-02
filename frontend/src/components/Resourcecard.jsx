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
function Resourcecard({title,author,rating,linkto}) {
  return (
    <div>
        <div className="resource">
              
                <h4 className="resource-title2">
                  {title}
                </h4>
                <div className="resource-description2">
                  author:{author}
                </div>
                <div className="resource-rating2">
                  Rating: {rating}
                </div>
              
              <div className='resource-link'>
                    <Link to={linkto}
                    style={style.linktext}>
                        more
                    </Link>
              </div>
                

        </div>
    </div>
  )
}

export default Resourcecard
