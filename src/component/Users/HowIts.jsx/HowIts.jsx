import React from 'react'
import "./HowIts.css";

export const HowIts = () => {
  return (
    <>
        <div className="how-its-works">
          <div className="overlap-10">
            <p className="meet-the-feature-of">Let’s see how it works</p>
            <div className="whats-the-function">WHATS THE FUNCTION</div>
            <div className="overlap-11">
              <div className="element-5">
                <div className="flexcontainer-4">
                  <p className="text-4">
                    <span className="text-wrapper-10">
                      Set disbursement
                      <br />
                    </span>
                  </p>
                  <p className="text-4">
                    <span className="text-wrapper-10">Instructions</span>
                  </p>
                </div>
                <p className="get-your-blood-tests-2">
                  Get your blood tests delivered athome collect a sample from theyour blood tests.
                </p>
                <div className="group">
                  <div className="fast-performance-wrapper">
                    <div className="fast-performance-3">01</div>
                  </div>
                </div>
              </div>
              <div className="element-6">
                <p className="fast-performance-4">Assembly retrieves funds from your account</p>
                <p className="get-your-blood-tests-2">
                  Get your blood tests delivered athome collect a sample from theyour blood tests.
                </p>
                <div className="group">
                  <div className="overlap-group-4">
                    <div className="fast-performance-3">02</div>
                  </div>
                </div>
              </div>
              <div className="element-7">
                <div className="fast-performance-5">Assembly initiates disbursement</div>
                <p className="get-your-blood-tests-2">
                  Get your blood tests delivered athome collect a sample from theyour blood tests.
                </p>
                <div className="group">
                  <div className="overlap-group-5">
                    <div className="fast-performance-3">03</div>
                  </div>
                </div>
              </div>
             

              <img className="arrow" alt="Arrow" src={require('../../../assest/img/arrow.png')} />

              
            </div>
            <div className="element-8">
              <div className="fast-performance-6">Customer receives funds payment</div>
              <p className="get-your-blood-tests-2">
                Get your blood tests delivered athome collect a sample from theyour blood tests.
              </p>
              <div className="group">
                <div className="overlap-group-6">
                  <div className="fast-performance-3">04</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
