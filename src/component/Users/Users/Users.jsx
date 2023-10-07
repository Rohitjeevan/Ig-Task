import React from "react";
import { useEffect } from "react";


import "./User.css"
export const Users = () => {
    useEffect(() => {
        // Get allValues using querySelectorAll
        let allValues = document.querySelectorAll(".value");
    
        // Start the forEach loop for displaying the values
        allValues.forEach((singleValue) => {
          let startValue = 0;
          let endValue = parseInt(singleValue.getAttribute("data-value"));
          let duration = Math.floor(2000 / endValue);
    
          // Counter for increasing the values & display
          let counter = setInterval(function () {
            startValue += 1;
            singleValue.textContent = startValue;
            // Clearing the interval
            if (startValue === endValue) {
              clearInterval(counter);
            }
          }, duration);
    
          return () => clearInterval(counter);
        });
      }, []);
    
  return (
    <>
      <div className="mainbox">

        <div className="boxA">
        <div className="container1">
      {/* Header section */}
      
      {/* Counters section */}
      <div className="counters">
        {/* Counter 1 */}
        <div className="counter customer">
          <h2 className="number"><span className="value" data-value="210">0</span>+</h2>
          <p className="detail">Satisfied Customers</p>
        </div>
        {/* Counter 2 */}
        <div className="counter project">
          <h2 className="number"><span className="value" data-value="15000">0</span>k+</h2>
          <p className="detail">Projects Finished</p>
        </div>
        {/* Counter 3 */}
        <div className="counter employee">
          <h2 className="number"><span className="value" data-value="110">0</span>+</h2>
          <p className="detail">Creative Employees</p>
        </div>
        {/* Counter 4 */}
        <div className="counter award">
          <h2 className="number"><span className="value" data-value="120">0</span>+</h2>
          <p className="detail">International Awards</p>
        </div>
      </div>
    </div>
        </div>

        <div className="boxB">

          <p className="corefeatures"> CORE FEATURES </p>
           <h1>
           Smart Jackpots that you may love this anytime & anywhere
           </h1>

           <p>
           Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.
           </p>
            
       
     <button class="button-3" role="button">Explore detail </button>

        </div>
      </div>
    </>
  );
};
