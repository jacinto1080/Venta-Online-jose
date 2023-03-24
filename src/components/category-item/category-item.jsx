import React from "react";
import "./category-item.css"

const CategoryItem = ({title, img})=>{
    
    return(
        <div className='category-container'>
        {/* <img /> */}
        <div className="background-image" style={{
            backgroundImage:`url(${img})`,
        }}></div>
        <div className='category-body-container'>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    )
}

export default CategoryItem;
