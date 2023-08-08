import dashboardImg from './assets/dashboard_new.gif'
import winter_tree from './assets/winter_tree.png';
import BackdropImg from './assets/leap_eventbackdrop.jpg';
import { useEffect } from 'react';
import Navbar from './components/navbar';
import HomeBannerVid from './assets/home_banner.mp4'
import ArrowGif from './assets/arrow_down.gif'

function App() {
  useEffect(()=>{
  
  },[])

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
            <div className='grid grid-cols-2 gap-8'>
              <button className='button-main'>
                <h1 className='button-text'>book a tour</h1>
              </button>
              <button className='button-main button-main-alt'>
                <h1 className='button-text button-text-alt'>book a consult</h1>
              </button>
            </div>
          </div>
          <div className='absolute bottom-12'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 white-label cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
          </svg>

          </div>
        </div>
        <div class="gradLine3"></div>
        <div className='mb-12'>
          <div class="container conbg" id="conbg">
            <div class="bg2" id="bg2">
              <div class="bg1" id="bg1">
                <div class="bg" id="bg">
                  <div class="bg-text text-light p-8">
                    <h3 className='bg-text-header'>Leap Event</h3>
                    <p>
                    Providing our clients with<br/>exceptional event spaces
                    </p>
                    {/* <a class="text-light" href="#bg1"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                      </svg></a> */}
                  </div>
                </div>
                <div class="bg-text text-light p-8">
                  {/* <h3 className='bg-text-header'>Selamat datang di<br />PutihNET Official</h3>
                  <p>
                    Desain Login Page Hotspot<br />
                    Desain Voucher Wifi<br />
                    Bisnis Voucher
                  </p>
                  <a class="text-light" href="#bg2"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                    </svg></a> */}
                </div>
              </div>
              <div class="bg-text text-light p-8">
                {/* <h3 className='bg-text-header'>Selamat datang di<br />PutihNET Official</h3>
                <p>
                  Desain Login Page Hotspot<br />
                  Desain Voucher Wifi<br />
                  Bisnis Voucher
                </p>
                <a class="text-light" href="#conbg"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg></a> */}
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='mission-div grid grid-cols-2 mt-52'>
            <div className='mission-div-sub'>
              <video autoPlay loop muted className='mission-div-video'>
                <source src={HomeBannerVid} type="video/mp4"/>
                  Your browser does not support the video tag.
              </video>
            </div>
            
            <div className='flex flex-col justify-center'>
              <h1 className='mission-header'>Our Mission</h1>
              <h1 className='mission-subs'>
                At Leap Events Center, our mission is to provide our clients with exceptional event spaces, unparalleled customer service, and turnkey solutions to create successful and memorable events.<br/><br/>We strive to offer up-to-date amenities in an elegant and modern setting to inspire creativity and cultivate inspiration to bring our clients' visions to life.
              </h1>
            </div>
          </div>
          {/* <div className='grid grid-cols-2 mt-52'>
            <div className='flex justify-center items-center p-8 mission-bg'>
              <h1 className='mission-header'>Our Mission</h1>
            </div>
            <div className='flex'>
              <img className='mission-img' src={MissionImg}/>
            </div>
            <div className='flex'>
              <img className='mission-img' src={VisionImg}/>
            </div>
            <div className='flex justify-center items-center p-8 mission-bg'>
              <h1 className='mission-subs'>
                At Leap Events Center, our mission is to provide our clients with exceptional event spaces, unparalleled customer service, and turnkey solutions to create successful and memorable events.
              </h1>
            </div>
            <div className='flex justify-center items-center p-8 mission-bg'>
              <h1 className='mission-subs'>
              We strive to offer up-to-date amenities in an elegant and modern setting to inspire creativity and cultivate inspiration to bring our clients' visions to life.
              </h1>
            </div>
            <div className='flex'>
              <img className='mission-img' src={GoalImg}/>
            </div>
          </div> */}
        </div>
        <div className='container'>
          <a href='#' class="ribbon-wrapper mt-8">
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
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
