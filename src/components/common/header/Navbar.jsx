import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div className="nav">
    <section className="nav-logo">
            <h2>
              <svg width="90" height="66" viewBox="0 0 1103 996" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
              </svg>
            </h2>
    </section>
    <div className="wholeMenu">
    <div className="MenuMain">
    <ul className="menu-bar">
      <li>Home</li>
      <li>About</li>
      <li>Products</li>
      <li>Contact</li>
      <li>Account</li>
      
    </ul>
      
    </div>
   
    </div>
    </div>
    </>
  );
}

export default Navbar;
