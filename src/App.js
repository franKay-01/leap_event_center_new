import dashboardImg from './assets/dashboard_new.gif'
import winter_tree from './assets/winter_tree.png';
import BackdropImg from './assets/leap_eventbackdrop.jpg';
import { useEffect } from 'react';
import Navbar from './components/navbar';

function App() {
  useEffect(()=>{
  
  },[])

  return (
    <>
      <Navbar/>

      <div className="App">
        <div className='home-banner flex flex-col space-y-12 justify-center items-center relative'>
          <svg viewBox="0 0 200 200" className='absolute top-12 left-12 w-32 h-32' xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M42.1,-32.7C58.1,-13.5,77.1,4.2,76.2,21C75.2,37.8,54.4,53.7,31.5,64.2C8.7,74.7,-16.1,79.8,-33.5,70.9C-50.9,62,-60.8,39.1,-66.8,14.7C-72.9,-9.7,-75,-35.6,-63.2,-53.9C-51.4,-72.1,-25.7,-82.7,-6.3,-77.7C13.1,-72.6,26.1,-51.9,42.1,-32.7Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" className='absolute top-24 right-12 w-32 h-32' xmlns="http://www.w3.org/2000/svg">
            <path fill="#000000" d="M54.7,-43.1C69.4,-25.1,78.9,-2.5,75.4,19.1C72,40.6,55.6,61.1,36.7,66.5C17.8,71.9,-3.8,62.2,-17.3,50.2C-30.8,38.2,-36.3,23.8,-42.2,7C-48.1,-9.8,-54.4,-29.1,-47.5,-45.3C-40.5,-61.5,-20.3,-74.6,-0.1,-74.5C20,-74.4,40,-61.1,54.7,-43.1Z" transform="translate(100 100)" />
          </svg>
          <svg viewBox="0 0 200 200" className='absolute bottom-4 right-12 w-52 h-52' xmlns="http://www.w3.org/2000/svg">
            <path fill="#F2F4F8" d="M46.7,-35.6C60.7,-19.7,72.3,-0.3,65.5,9.1C58.7,18.5,33.5,17.9,12.9,28.5C-7.7,39.1,-23.8,61,-29.6,59.1C-35.4,57.2,-31,31.6,-31.7,12C-32.3,-7.6,-38.1,-21.3,-33.7,-35C-29.3,-48.7,-14.6,-62.4,0.9,-63.1C16.4,-63.8,32.7,-51.5,46.7,-35.6Z" transform="translate(100 100)" />
          </svg>
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
        <div className='mb-12'>
          <div class="container conbg" id="conbg">
            <div class="bg2" id="bg2">
              <div class="bg1" id="bg1">
                <div class="bg" id="bg">
                  <div class="bg-text text-light p-8">
                    <h3 className='bg-text-header'>Selamat datang di<br />PutihNET Official</h3>
                    <p>
                      Desain Login Page Hotspot<br />
                      Desain Voucher Wifi<br />
                      Bisnis Voucher
                    </p>
                    <a class="text-light" href="#bg1"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                      </svg></a>
                  </div>
                </div>
                <div class="bg-text text-light p-8">
                  <h3 className='bg-text-header'>Selamat datang di<br />PutihNET Official</h3>
                  <p>
                    Desain Login Page Hotspot<br />
                    Desain Voucher Wifi<br />
                    Bisnis Voucher
                  </p>
                  <a class="text-light" href="#bg2"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
                      <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                    </svg></a>
                </div>
              </div>
              <div class="bg-text text-light p-8">
                <h3 className='bg-text-header'>Selamat datang di<br />PutihNET Official</h3>
                <p>
                  Desain Login Page Hotspot<br />
                  Desain Voucher Wifi<br />
                  Bisnis Voucher
                </p>
                <a class="text-light" href="#conbg"><svg viewBox="0 0 448 512" width="30" fill="#fff" title="angle-double-right">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z" />
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='grid grid-cols-2'>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
