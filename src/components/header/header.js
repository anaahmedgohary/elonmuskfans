import React from 'react';
import $ from "jquery";
import "./style/headr.css";
// import elon from "./style/images/elon01.jpg";
// import elon2 from "./style/images/elon-musk01.jpg";
import myLogo from "./style/images/SVG/2382696_0elonIll01.svg";

const Header = () =>
{
    
    function showNav(e)
    {
        $('.list-nav').toggle()
    }

    return (
        <header>
            <div>
                <button id='toggle-nav-vert' onClick={showNav}>
                    =
                </button>
            </div>
            <div className='line-nav list-nav'>
                <div className='logo-hdr'>
                    <a href="/">
                        <img src={myLogo} alt="" />
                    </a>
                </div>
                
                <div className='nav-hdr'>
                    {/* <img src={svgback} alt="where" /> */}
                    <ul className='nav-links'>
                        <li className='nav-link'>
                            <a href="/news">News</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/bio">Biography</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/companies">Companies</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/events">Events</a>
                        </li>
                        <li className='nav-link'>
                            <a href="/contact">Contact</a>
                        </li>
                        <li className='join-btn btn btn-success'>
                            <a href="/signup">Join</a>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className='tester'>
                <p></p>
            </div>
            <div className='about-block'>
                <div className='title-div'>
                    <h1 className='title'>Elon Reeve Musk</h1>
                </div>
                <div className='paragraph-div'>
                    <p className='paragraph'>
                         
                        <span className='first-letter'>F</span>ounder, CEO, Engineer, Innovator, Investor, Leader...
                        
                    </p>
                </div>

            </div>
            
        </header>
    );
}

export default Header;
