import { useState } from 'react';
import Navbar from './components/navbar';
import HomeBannerVid from './assets/home_banner.mp4'

function App() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const formatDate = () => {
    const d = new Date();
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
  
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');
  
    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  const submitEmail = () => {
    if (email === ""){
      alert("Email can not be empty")
      return
    }

    const dt = formatDate()

    setIsLoading(true)
    const formData = new URLSearchParams();
    formData.append('Emails', email);
    formData.append('Date', dt);

    fetch(
      "https://script.google.com/macros/s/AKfycby_byttHKvfwlRiEGae9b_Tr_RRWfiQ_7GjQx8-qmRWEtAy43u491uAOJKumvkSYrbk6A/exec",
      {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
      }
    ).then((res) => {
      res.json()
    }).then(() => {
      const message = "Your message was successfully submitted!"
      setEmail('')
      setIsLoading(false)
      alert(message)
    })
    .catch((error) => {
      console.log("ERR "+error);
    });
  }

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
            <div className='grid grid-cols-2 gap-8'>
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
        <div className='mb-12' id="targetSectionAlt">
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
        <div class="contact-h bg-gradient-to-r from-white to-yellow-700 mt-24">
          <div className='container grid grid-cols-1'>
            <div className='flex flex-col'>
              <div className='contact-us-header'>Contact Us!</div>
            </div>
            <div id="targetSection" className='flex flex-col space-y-4 contact-div m-auto'>
              <h1 className='contact-text'>The <i><b>perfect</b></i> space for your event, workshop, meeting, or anything you need!</h1>
              <div className='flex flex-row space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                </svg>
                <h1 className='contact-text'><b>240 878 0277</b></h1>
              </div>
              <div className='flex flex-row space-x-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
                <h1 className='contact-text'>1423 Dual highway Hagerstown Md 21740</h1>
              </div>
              <input className='email-text-box' onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address"/>  
              
              {isLoading? 
              <div className="email-button flex flex-row justify-between cursor-pointer">
                <span className="spinner-position spinner-position-alt">
                  <div class="w-6 h-6 rounded-full animate-spin
                    border border-solid border-black border-t-transparent"></div>
                </span>
              </div>
              :
              <button onClick={()=>submitEmail()} className='email-button'>Let's Talk!</button>         
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
