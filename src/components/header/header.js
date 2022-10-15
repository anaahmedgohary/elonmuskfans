import React, { useEffect } from 'react';
import $ from "jquery";
import "./style/headr.css";
import "./style/sidebar/sidebar.css";
// import elon from "./style/images/elon01.jpg";
// import elon2 from "./style/images/elon-musk01.jpg";
import myLogo from "./style/images/SVG/2382696_0elonIll01.svg";
import tModel3 from "./style/images/teslawy0001111.svg";
import tesla from "./style/images/tesla-motors.svg";
import SpaceX from "./style/images/SpaceX.svg";
import Neuralink from "./style/images/progreso-Neuralink.jpg";
import twiiterlogo from "./style/images/twitter-logo.png"
//import boringC from "./style/images/TheBoringCompany.svg";
// import empire01 from "./style/images/elontexas.png"

const Header = () =>
{
    // const [width, setWidth] = useState("");

    // $('#sideBarNav').css("display", width);
    
    //let burgerMenu = $("#toggle-nav-vert").css("display");

    useEffect(() =>
    {
        function handelResize(e)
        {
            if ($(window).width() > 949)
            {
                $('.list-nav').hide();
            }
            
        }
        
        window.addEventListener("resize", handelResize) 
    });
    

    // $(window).on("resize", (e) =>
    // {
    //      let x = document.getElementById("list-nav");
    //     if ($(window).width() > 949 && window.getComputedStyle(burgerMenu).display === "none")
    //     {
    //         //$('.list-nav').hide();
    //         $('.line-nav').hide();
    //     }
    // })
    
    function showNav(e)
    {
        //$('.bar-links').slideToggle(500);

        $('.list-nav').toggleClass("hidden");
        
        $('.bar-link').hide()
            $('.bar-link').slideToggle(500);
            
            
        
        
        $('#toggle-nav-vert').toggleClass("chngeMenuebtn");
        
    }

    

    return (
        <header>
            <div>
                <button id='toggle-nav-vert' onClick={showNav}>
                    <div className='bar1'></div>
                    <div className='bar2'></div>
                    <div className='bar3'></div>
                </button>
            </div>
            <div className='hidden list-nav' id='sideBarNav'>
                <div>
                    <div className='logo-bar'>
                        <a href="/">
                            <img src={myLogo} alt="logo" />
                        </a>
                    </div>

                    <div className='nav-bar'>
                        {/* <img src={svgback} alt="where" /> */}
                        <ul className='bar-links'>
                            <li className='bar-link'>
                                <a href="/news">News</a>
                            </li>
                            <li className='bar-link'>
                                <a href="/bio">Biography</a>
                            </li>
                            <li className='bar-link'>
                                <a href="/companies">Companies</a>
                            </li>
                            <li className='bar-link'>
                                <a href="/events">Events</a>
                            </li>
                            <li className='bar-link'>
                                <a href="/contact">Contact</a>
                            </li>
                            <li>
                                <a className='join-btn-bar btn btn-success' href="/signup">Join</a>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <div className='line-nav'>
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
            
            <div className='about-block'>
                <div className='title-div'>
                    <h1 className='title'>Elon Reeve Musk</h1>
                </div>
                <div className='paragraph-div'>
                    <div className='paragraph'>
                        <span>E</span>
                        <div className='charachs'>
                            <span>ngineer</span>
                            <span>Pioneer</span>
                            <span>Founder</span>
                            <span>Innovator</span>
                            <span>Investor</span>
                            <span>Leader</span>
                        </div>
                    </div>
                </div>
            </div>




            <div className='companies-div'>
                <div className='comp-title'>
                </div>
                <div className='comp-gall'>
                    
                    <ul className='comp-list'>
                        <li className='a-company'>
                            <a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">
                                <img className='com-img1' src={twiiterlogo} alt="twitter" />
                            </a>
                        </li>
                        <li className='a-company'>
                            <a href="https://www.tesla.com" target="_blank" rel="noopener noreferrer">
                                <img className='com-img2' src={tesla} alt="tesla" />
                            </a>
                        </li>
                        <li className='a-company'>
                            <a href="https://www.spacex.com" target="_blank" rel="noopener noreferrer">
                                <img className='com-img3' src={SpaceX} alt="spacex" />
                            </a>
                            
                        </li>
                        <li className='a-company'>
                            <a href="https://neuralink.com/" target="_blank" rel="noopener noreferrer">
                                <img className='Neuralink com-img4' src={Neuralink} alt="neuralink" />
                            </a>
                            
                        </li>
                    </ul>
                </div>
                
            </div>
            <div id='companie-btn-div'>
                <button id='companie-btn' onClick={(e) =>
                {
                    $(".companies-div").fadeToggle()
                }}>
                    <img src={tModel3} alt="model3" />
                </button>
            </div>
            
        </header>
    );
}

export default Header;
