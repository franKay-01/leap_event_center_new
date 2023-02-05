import logo from './logo.svg';
import './App.css';
// import dashboardImg from './assets/dashboard.gif'
import dashboardImg from './assets/dashboard_new.gif'
import winter_tree from './assets/winter_tree.png';
import BackdropImg from './assets/leap_eventbackdrop.jpg';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    "use strict";
    // Select all slides
    const slides = document.querySelectorAll(".slide");
    
    // loop through slides and set each slides translateX
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${indx * 100}%)`;
    });
    
    // select next slide button
    const nextSlide = document.querySelector(".btn-next");
    
    // current slide counter
    let curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;
    
    // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
      // check if current slide is the last and reset current slide
      if (curSlide === maxSlide) {
        curSlide = 0;
      } else {
        curSlide++;
      }
    
      //   move slide by -100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });
    
    // select next slide button
    const prevSlide = document.querySelector(".btn-prev");
    
    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
      // check if current slide is the first and reset current slide to last
      if (curSlide === 0) {
        curSlide = maxSlide;
      } else {
        curSlide--;
      }
    
      //   move slide by 100%
      slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
      });
    });
    
  },[])
  return (
    <div className="App">
      <div class="is-boxed has-animations">
        <div class="body-wrap boxed-container">
          <header class="site-header">
            <div class="header-shape header-shape-1">
              <svg width="337" height="222" viewBox="0 0 337 222" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="50%" y1="55.434%" x2="50%" y2="0%" id="header-shape-1">
                        <stop stop-color="#E0E1FE" stop-opacity="0" offset="0%"></stop>
                        <stop stop-color="#E0E1FE" offset="100%"></stop>
                    </linearGradient>
                </defs>
                <path d="M1103.21 0H1440v400h-400c145.927-118.557 166.997-251.89 63.21-400z" transform="translate(-1103)" fill="url(#header-shape-1)" fill-rule="evenodd"></path>
              </svg>
            </div>
            <div class="header-shape header-shape-2">
            <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" style={{overflow:'visible'}}>
              <defs>
                  <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="header-shape-2">
                    <stop stop-color="#FF3058" offset="0%"></stop>
                    <stop stop-color="#FF6381" offset="100%"></stop>
                  </linearGradient>
              </defs>
              <circle class="anime-element " cx="64" cy="64" r="64" fill="url(#header-shape-2)" fill-rule="evenodd" style={{opacity: 1, transform: 'translateY(0px)' }}></circle>
            </svg>
            </div>
            <div class="container">
              <div class="site-header-inner">
                <div class="brand header-brand">
                  <h1 class="m-0">
                    <a href="#">
                    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                      <title>April</title>
                        <defs>
                            <linearGradient x1="114.674%" y1="39.507%" x2="-52.998%" y2="39.507%" id="logo-a">
                                <stop stop-color="#8D92FA" offset="0%"></stop>
                                <stop stop-color="#8D92FA" stop-opacity="0" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="93.05%" y1="19.767%" x2="15.034%" y2="85.765%" id="logo-b">
                                <stop stop-color="#FF3058" offset="0%"></stop>
                                <stop stop-color="#FF6381" offset="100%"></stop>
                            </linearGradient>
                            <linearGradient x1="32.716%" y1="-20.176%" x2="32.716%" y2="148.747%" id="logo-c">
                                <stop stop-color="#FF97AA" offset="0%"></stop>
                                <stop stop-color="#FF97AA" stop-opacity="0" offset="100%"></stop>
                            </linearGradient>
                        </defs>
                        <g fill="none" fill-rule="evenodd">
                            <path d="M31.12 7.482C28.327 19.146 19.147 28.326 7.483 31.121A12.04 12.04 0 0 1 .88 24.518C3.674 12.854 12.854 3.674 24.518.879a12.04 12.04 0 0 1 6.603 6.603z" fill="#312ECA"></path>
                            <path d="M28.874 3.922l-24.91 24.99a12.026 12.026 0 0 1-3.085-4.394C3.674 12.854 12.854 3.674 24.518.879a12.025 12.025 0 0 1 4.356 3.043z" fill="url(#logo-a)"></path>
                            <g opacity=".88">
                                <path d="M31.12 24.518a12.04 12.04 0 0 1-6.602 6.603C12.854 28.326 3.674 19.146.879 7.482A12.04 12.04 0 0 1 7.482.88c11.664 2.795 20.844 11.975 23.639 23.639z" fill="url(#logo-b)"></path>
                                <path d="M24.518 31.12C12.854 28.327 3.674 19.147.879 7.483A12.015 12.015 0 0 1 3.46 3.57L28.47 28.5a12.016 12.016 0 0 1-3.951 2.62z" fill="url(#logo-c)"></path>
                            </g>
                        </g>
                    </svg>
                    </a>
                  </h1>
                </div>
              </div>
            </div>
          </header>

          <main>
            <section class="hero">
              <div class="container">
                <div class="hero-inner">
                  <div class="hero-copy">
                    <h1 class="hero-title mt-0">Leap Events Center</h1>
                    <p class="hero-paragraph">Coming to Hagerstown soon.</p>
                    <div class="flex flex-cols gap-4">
                      <div class="control control-expanded">
                        <a target="_blank" href="https://www.instagram.com/Leap_eventscenter/">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram w-12 h-12 fas" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                          </svg>
                        </a>
                      </div>
                      <div class="control">
                        <a href='#'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook w-12 h-12" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="hero-illustration">
                    <div class="hero-shape hero-shape-1">
                      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg" style={{overflow:'visible'}}>
                        <circle class="anime-element" cx="20" cy="20" r="20" fill="#FFD8CD" fill-rule="evenodd" style={{ opacity: 1, transform: 'translateY(0px)'}}></circle>
                      </svg>
                    </div>
                    <div class="hero-shape hero-shape-2">
                      <svg width="88" height="88" xmlns="http://www.w3.org/2000/svg" style={{overflow:'visible'}}>
                          <circle class="anime-element" cx="44" cy="44" r="44" fill="#FFD2DA" />
                      </svg>
                    </div>
                    <div class="hero-main-shape hero-main-width">
                      <img className='dashboard-img' src={dashboardImg}/>
                      <svg width="88" height="88" className='bubble' xmlns="http://www.w3.org/2000/svg" style={{overflow:'visible'}}>
                      <circle class="anime-element" cx="44" cy="44" r="44" fill="#e4694d"/>
                      </svg>
                      <svg width="44" className='bubble-alt' height="44" xmlns="http://www.w3.org/2000/svg" style={{overflow:'visible'}}>
                      <circle class="anime-element" cx="20" cy="20" r="20" fill="#38e0c1"/>
                      </svg>
                    
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div class="container has-bottom-divider">
              <div class="features-inner section-inner">
                <div class="features-header text-center">
                  <h2 class="section-title mt-0">Event Centers</h2>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div>
                      <h2 className="section-title-alt mt-0">Let us host your Special events:</h2>
                      <p className="hero-paragraph-alt text-left">Celebrations, Art expositions, Meetings, Fundraisers.</p>
                      <p className='hero-paragraph-alt text-left'>Proms, Team buildings, Workshops, Popup shops</p>
                      <p className="hero-paragraph-alt text-left">Promotional events, Birthdays, Weddings.</p>

                    </div>
                    <div class="slider">
                      <div class="slide">
                        <img src={BackdropImg} alt="" />
                      </div>

                      <button class="btn btn-next"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                        </svg>
                      </button>
                      <button class="btn btn-prev"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
                          <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
            <div class="container">
              <div class="grid mb-60 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 lg:space-x-28 md:space-x-28 xl:space-x-28">
                <div className='winter_figure'>
                  <img src={winter_tree}/>
                </div>
                <div class="feature text-left is-revealing">
                  <div class="feature-inner mt-4 lg:mt-20 md:mt-20 xl:mt-20">
                    
                    <h1 class="hero-title">Contact us for Booking:</h1>
                    <span class="flex flex-col mb-12">
                      <a href="tel:2403109795"><span class="text-2xl mb-0">tel.: 240-310-9795</span></a>
                      <a href="mailto:Info@leapeventscenter.com" className='w-max'><span class="text-2xl mb-0">email.: Info@leapeventscenter.com</span></a>

                    </span>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div class="footer_bg">
                <div class="footer_bg_one"></div>
                <div class="footer_bg_two"></div>
              </div>
              
            </div>
            <div class="footer_bottom">
                <div class="container">
                  <div class="flex space-x-11">
                    <span class="flex flex-row">
                      <p class="mb-0 f_400">© Leap Events Center 2023.</p>
                    </span>
                    <span class=" right-0">
                      <p>By <a href="#" target="_blank">Leap Events Center</a></p>
                    </span>
                  </div>
                </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
