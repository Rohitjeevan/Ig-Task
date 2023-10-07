import React from 'react';
import "./Quality.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";


export const Quality = () => {

  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));
  return (
    <>
         <div className='Qheading'>
            <p> QUALITY FEATURES </p>
             <h1> Tutorials that people love most </h1>

             </div>
         <div className='carousel'>
             <Carousel showDots={true} responsive={responsive}>
        {product}
          </Carousel>
            
         </div>
    </>
  )
}
