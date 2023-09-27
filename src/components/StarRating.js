import React, { useState } from "react";
const StarRating = (props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    //console.log(props.rating, Math.round(props.rating))
    return (
      <div className="star-rating">
        {[...Array(Math.round(props.rating))].map((star, index) => {
          index += 1;
          return (
            // <button
            //   type="button"
            //   key={index}
            //   className={index <= (hover || rating) ? "on" : "off"}
            //   onClick={() => setRating(index)}
            //   onMouseEnter={() => setHover(index)}
            //   onMouseLeave={() => setHover(rating)}
            // >
            <img src="https://img.freepik.com/premium-vector/yellow-volumetric-3d-star-icon-vector-illustration-premium_162862-1056.jpg?w=740" width="30" height="30"></img>
          );
        })}
      </div>
    );
  };

  export default StarRating;
