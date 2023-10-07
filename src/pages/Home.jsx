import React from "react";
import { Navbar } from "./Navbar";
import { FaStar } from "react-icons/fa";
import "./Home.css";

import { Search } from "./Search";
import { Quality } from "./Quality";
import { Accordion } from "../component/Users/Accordian/Accordion";
import { Users } from "../component/Users/Users/Users";
import { HowIts } from "../component/Users/HowIts.jsx/HowIts";
import { Plan } from "../component/Users/Plan/Plan";
import pattern from "../../src/assest/img/pattern-1.png"
import  PopularCourse from "../../src/assest/img/popular-course.png";

import maskgroup from "../../src/assest/img/mask-group.png"

import { Freetu } from "../component/Users/Freetu/Freetu";
import { Ready } from "../component/Users/Ready/Ready";
import Footer from "../component/Users/Footer/Footer";
const Home = () => {
  return (
    <>
     
        <div className="box1">
             <Navbar />
            <div className="box1_1">
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="star-icon" />
                Trused by over 43,32 student
              </p>

              <div className="learnheading">
                <h1> Learn Design <br/>
                 With Nia Matos </h1>
              </div>

              <p className="contentpara">
                Get your blood tests delivered at let home collect sample from
                the victory of the managments that supplies best design system
                guidelines ever.
              </p>

              <Search />

              <div className="trustedBy">
                <div className="containerspon">
                  <span>Sponsered by:</span>
                  <img
                  className="trust"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
                    alt=""
                  />
                  <img
                  className="trust"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
                    alt=""
                  />
                  <img
                  className="trust"
                    src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
                    alt=""
                  />
                </div>
              </div>


            </div>
              
          {/* box 1 end */}
       </div>
        
         
        <div className="box2">
                <img  className="pattern" src={pattern} alt="img" property="img"/>
                <img  className="maskgroup" src={maskgroup} alt="img" property="img"/> 
            </div>

              <Quality/> 
              <Users/>
              <img  className="popularCourse" src={PopularCourse} alt="img" prop="img"  />

               <HowIts/>
                <Plan/> 
              <Freetu/>
             <Accordion /> 

             <Ready/>
             <svg xmlns="http://www.w3.org/2000/svg" width="898" height="1" viewBox="0 0 898 1" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.7955 -0.000231981H897.204C897.535 -0.000231981 897.803 0.223424 897.803 0.499769C897.803 0.776114 897.535 0.999767 897.204 0.999767H0.7955C0.4643 0.999767 0.197 0.776114 0.197 0.499769C0.197 0.223424 0.4643 -0.000231981 0.7955 -0.000231981Z" fill="#E5ECF4"/>
           </svg>
             <Footer/>

    </>
  );
};

export default Home;
