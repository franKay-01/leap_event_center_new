import { useState } from 'react';
import Navbar from './components/navbar';
import HomeBannerVid from './assets/home_banner.mp4'

function App() {

  const scrollToSection = () => {
    const targetSection = document.getElementById('targetSection');
    targetSection.scrollIntoView({ behavior: 'smooth' });
  }

  const scrollToSectionAlt = () => {
    const targetSectionAlt = document.getElementById('targetSectionAlt');
    targetSectionAlt.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar/>

      <div className="App">
        <div class="video-background justify-center items-center flex">
          <video autoPlay loop muted>
            <source src={HomeBannerVid} type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          <div class="video-overlay"></div>
          <div className='flex flex-col space-y-12 justify-center items-center relative'>
           
            <h1 className='home-banner-header'>
              Leap Event Center
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
              <a target="_blank" rel="noreferrer" href='https://leapeventscenter.hbportal.co/schedule/63fe5580069c19098fd7e73f' className='button-main cursor-pointer'>
                <h1 className='button-text'>book a tour</h1>
              </a>
              <a target="_blank" rel="noreferrer" href='https://leapeventscenter.hbportal.co/schedule/649139513f8f4526b14afc78' className='button-main button-main-alt cursor-pointer'>
                <h1 className='button-text button-text-alt'>book a consult</h1>
              </a>
            </div>
          </div>
          <div className='absolute bottom-12'>
            <svg onClick={scrollToSectionAlt} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 white-label cursor-pointer">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        <div class="gradLine3"></div>
        
        <div className='container'>
          <div className='mission-div grid grid-cols-1 lg:grid-cols-2 mt-12 lg:mt-12 md:mt-12'>
            <div className='mission-div-sub'>
              <video autoPlay loop muted className='mission-div-video'>
                <source src={HomeBannerVid} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
            </div>
            
            <div className='flex flex-col justify-center mt-12 space-y-12 lg:space-y-0 md:space-y-0 lg:mt-0 md:mt-0'>
              <h1 className='mission-header'>Our Mission</h1>
              <h1 className='mission-subs'>
                At Leap Events Center, our mission is to provide our clients with exceptional event spaces, unparalleled customer service, and turnkey solutions to create successful and memorable events.<br/><br/>We strive to offer up-to-date amenities in an elegant and modern setting to inspire creativity and cultivate inspiration to bring our clients' visions to life.
              </h1>
            </div>
          </div>
        </div>
        <div className='container' onClick={scrollToSection}>
          <div class="ribbon-wrapper mt-8">
            <div class="ribbon-content">
              <span class="ribbon">20% off</span>
              </div>
              <p>
                <h1 className='percentage-off'>
                  20% Off
                </h1>
                <div>
                  <span className='percentage-sub'> Get 20% Off your event space rental!</span>
                </div>
              </p>
          </div>
        </div>
        <div class="contact-h contact-us-gradient mt-24">
          <div className='container grid grid-cols-1'>
            <div className='flex flex-col'>
              <div className='contact-us-header'>Contact Us!</div>
            </div>
            <div id="targetSection" className='flex flex-col space-y-4 contact-div m-auto'>
              <h1 className='contact-text'>The <i><b>perfect</b></i> space for your event, workshop, meeting, or anything you need!</h1>
              <div className='flex flex-row space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-8 hidden lg:flex md:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
                <h1 className='contact-text'><b>240 878 0277</b></h1>
              </div>
              <div className='flex flex-row space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-8 hidden lg:flex md:flex">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
                <h1 className='contact-text'>1423 Dual highway Hagerstown Md 21740</h1>
              </div>
              <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8'>
                <a target="_blank" rel="noreferrer" 
                href='https://leapeventscenter.hbportal.co/schedule/63fe5580069c19098fd7e73f' className='button-main button-main-alt-2 cursor-pointer'>
                  <h1 className='button-text'>book a tour</h1>
                </a>
                <a target="_blank" rel="noreferrer" href='https://leapeventscenter.hbportal.co/schedule/649139513f8f4526b14afc78' 
                className='button-main button-main-alt-1 cursor-pointer'>
                  <h1 className='button-text button-text-alt'>book a consult</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
