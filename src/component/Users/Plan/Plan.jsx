import React from 'react'
import activeImage from '../../../assest/img/active.svg';
import BG from "../../../assest/img/bg-2.svg";
import cb from "../../../assest/img/combined-shape-16072.svg";
import cc from "../../../assest/img/combined-shape-16073.svg";
import cd from "../../../assest/img/combined-shape-16074-2.svg";

import close from "../../../assest/img/close-1.svg";
import "./Plan.css"
 
export const Plan = () => {
  return (
    <>
        <div className='pricebox'>
        <div className="pricing-table">
          <div className="element-9">
            <div className="overlap-12">
              <button className="button-3">
                <div className="overlap-group-7">
                  <div className="try-for-free-2">Start free trail</div>
                </div>
              </button>
              <div className="business-class">Free Plan</div>
              <p className="text-wrapper-11">For Small teams or office</p>
              <div className="features-2">
                <img className="combined-shape-2" alt="Combined shape" src={cb} />
                <img className="combined-shape-3" alt="Combined shape" src={cc} />
                <img className="combined-shape-4" alt="Combined shape" src={cd} />
                <img className="close" alt="Close" src={close} />
                <img className="close-2" alt="Close" src={close}/>
                <p className="drag-drop-builder">Ultimate access to all course, exercises and assessments</p>
                <p className="drag-drop-builder-2">Free acess for all kind of exercise corrections with downloads.</p>
                <p className="drag-drop-builder-3">Total assessment corrections with free download access system</p>
                <p className="drag-drop-builder-4">Unlimited download of courses on the mobile app contents</p>
                <p className="drag-drop-builder-5">Download and print courses and exercises in PDF</p>
              </div>
            </div>
          </div>
          <div className="element-10">
            <div className="overlap-13">
              <div className="label">
                <div className="suggested-wrapper">
                  <div className="suggested">Recommended</div>
                </div>
              </div>
              <button className="button-4">
                <div className="overlap-group-7">
                  <div className="try-for-free-3">Subscribe Now</div>
                </div>
              </button>
              <div className="business-class-2">Premium</div>
              <div className="for-small-teams-or">For startup enterprise</div>
              <p className="business-class-3">
                <span className="text-wrapper-12">49.99/</span>
                <span className="text-wrapper-13">mo</span>
              </p>
              <div className="for-small-teams-or-2">Starting from</div>
              <div className="features-3">
                <img className="combined-shape-2" alt="Combined shape" src={cb} />
                <img className="combined-shape-3" alt="Combined shape" src={cb} />
                <img className="combined-shape-4" alt="Combined shape" src={cb} />
                <img className="combined-shape-5" alt="Combined shape" src={cb} />
                <img className="combined-shape-6" alt="Combined shape" src={cb} />
                <p className="drag-drop-builder">Ultimate access to all course, exercises and assessments</p>
                <p className="drag-drop-builder-2">Free acess for all kind of exercise corrections with downloads.</p>
                <p className="drag-drop-builder-3">Total assessment corrections with free download access system</p>
                <p className="drag-drop-builder-6">Unlimited download of courses on the mobile app contents</p>
                <p className="drag-drop-builder-7">Download and print courses and exercises in PDF</p>
              </div>
            </div>
          </div>


          <div className="tab">
          <div className="overlap-15">
            <div className="text-wrapper-16">Choose your pricing policy</div>
            <div className="pricing-plan">PRICING PLAN</div>
          </div>
            <div className="overlap-14">
              <img className="BG-4" alt="Bg" src={BG} />
              <img className="active" alt="Active" src={activeImage} />
              <div className="text-wrapper-14">Monthly Plan</div>
              <div className="text-wrapper-15">Annual Plan</div>
            </div>
          </div>
          
          
        </div>
        </div>
    </>
  )
}
