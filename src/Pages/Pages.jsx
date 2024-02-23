import React from 'react'
import { BrowserRouter as HashRouter, Router, Routes, Route, Link } from "react-router-dom";
import Index from './Index';
import ServicesPage from '../components/ServicesPage/ServicesPage';


const Pages = () => {
  return (
    <div>
        <HashRouter>
            <Routes>
                <Route path="/" element={ <Index/> } />


                {/* Routes To Services Page */}
                <Route path="/web-development" element={ <ServicesPage currentPage="web-development" /> } />
                <Route path="/design" element={ <ServicesPage currentPage="design" />  } />
                <Route path="/poster-billboards" element={ <ServicesPage currentPage="poster-billboards" />  } />
                <Route path="/mobile-design" element={ <ServicesPage currentPage="mobile-design" />  } />
                <Route path="/business-card-leaflets" element={ <ServicesPage currentPage="business-card-leaflets" />  } />
            </Routes>
        </HashRouter>
    </div>
  )
}

export default Pages