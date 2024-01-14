import React from 'react';
import "./Footer.css";
import instagram from "./assets/instagram.svg"
import github from "./assets/github.svg"
import linkedin from "./assets/linkedin.svg"
import twitter from "./assets/twitter.svg"
import youtube from "./assets/youtube.svg"
const Footer = () => {
  return (
    <footer>
      <div className="footer-line"></div>
      <div className="footer-wrapper">
        <section className="footer-top">
          <div className="footer-headline">
            <h2>Subscribe to our newsletter</h2>
            <p>Stay up to date with our news and articles</p>
          </div>
          <div className="footer-subscribe">
            <input type="email" spellCheck="false" placeholder="Your Email" />
            <button>Sign Up</button>
          </div>
        </section>
        <div className="footer-columns">
          <section className="footer-logo">
            <h2>
              <svg width="1103" height="996" viewBox="0 0 1103 996" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M410.988 255.56L0 995.337H189.802L505.141 427.427L410.988 255.56ZM1102.94 995.337L647.119 170.373L551.471 0L457.317 170.373L551.471 340.746L711.79 629.718H498.683L405.461 786.972H799.034L914.634 995.337H1102.94Z" fill="#FAFBFC"/>
              </svg>
            </h2>
          </section>
          <section>
            <h2>Products</h2>
            <ul>
                <li>Walking shoes</li>
                <li>Running shoes</li>
                <li>Casual shoes</li>
                <li>Sleepers</li>
                <li>Crocs</li>
            </ul>
          </section>
          <section>
            <h2>Products</h2>
            <ul>
                <li>Walking shoes</li>
                <li>Running shoes</li>
                <li>Casual shoes</li>
                <li>Sleepers</li>
                <li>Crocs</li>
            </ul>
          </section>
          <section>
            <h2>Products</h2>
            <ul>
                <li>Walking shoes</li>
                <li>Running shoes</li>
                <li>Casual shoes</li>
                <li>Sleepers</li>
                <li>Crocs</li>
            </ul>
          </section>
          {/* Other sections with h3, ul, and li elements */}
        </div>
        <div className="footer-bottom">
          <div className='social-links'>
            <ul>
              <li>
                <a href="#" title="Instagram">
                  <img src={instagram} alt='Instagram' />                       
                </a>
              </li>
              <li>
                <a href="#" title="Linkedin">
                  <img src={linkedin} alt='Linkedin' />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <img src={twitter} alt='Twitter' />
                </a>
              </li>
              <li>
                <a href="#" title="Youtube">
                  <img src={youtube} alt='YouTube' />
                </a>
              </li>
              <li>
                <a href="#" title="GitHub">
                  <img src={github} alt='GitHub' />
                </a>
              </li>
            </ul>
          </div>
          <small>© Atheros Intelligence Ltd. <span id="year">{new Date().getFullYear()}</span>, All rights reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
