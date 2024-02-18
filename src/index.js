import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Herosection from './heroSection';
import Offersection from "./whatWeOffer";
import Blogsection from "./blogs";
import Connectsection from './letConnect';
import Webfooter from "./webFooter";

import Navbar from './navBar'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container' style={{backgroundColor: '#B9D9EB'}}>
        <Navbar/>
        <Herosection/>
        <Offersection/>
        <Blogsection/>
        <Connectsection/>
        <Webfooter/>
    </div>
    
  </React.StrictMode>
);


