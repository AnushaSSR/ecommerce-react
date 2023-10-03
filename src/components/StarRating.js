import React, { useState } from "react";
const StarRating = (props) => {
  return (
    <div className="star-rating">
      {[...Array(Math.round(props.rating))].map((star, index) => {
        index += 1;
        return (
          <img src="https://img.freepik.com/premium-vector/yellow-volumetric-3d-star-icon-vector-illustration-premium_162862-1056.jpg?w=740" width="30" height="30"></img>
        );
      })}
    </div>
  );
};

export default StarRating;
