import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="Footer-Box">
      
      <div className="Container">
        <div className="Row">
          <div className="Column">
            <p className="Heading">About Us</p>
            <a href="#" className="FooterLink">Support Center </a>
            <a href="#" className="FooterLink">Customer Support </a>
            <a href="#" className="FooterLink">About Us </a>
            <a href="#" className="FooterLink">Copyright</a>
            <a href="#" className="FooterLink">Popular Design </a>
          
          </div>
          <div className="Column">
            <p className="Heading">Our information </p>
            <a href="#" className="FooterLink">Return Policy </a>
            <a href="#" className="FooterLink">Term & conditions </a>
            <a href="#" className="FooterLink">Site Map </a>
            <a href="#" className="FooterLink">Store Hours </a>
          </div>
          <div className="Column">
            <p className="Heading">My Account </p>
            <a href="#" className="FooterLink">Press inquires </a>
            <a href="#" className="FooterLink">Social Media </a>
            <a href="#" className="FooterLink">Direrctiores</a>
            <a href="#" className="FooterLink">Images & Scroll </a>
            <a href="#" className="FooterLink">Permission </a>
           
          </div>
          <div className="Column">
            <p className="Heading">Policy </p>
            <a href="#" className="FooterLink">Application Security  </a>
            <a href="#" className="FooterLink">Software Principal  </a>
            <a href="#" className="FooterLink">Unwanted software policy </a>
            <a href="#" className="FooterLink">Responsiable supply change  </a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
