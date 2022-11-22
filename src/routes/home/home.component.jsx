import './home.styles.scss';

import { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//Register plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

    const acaHeaderRef = useRef();

    useEffect(() => {
        gsap.to("#aca-header", {
            scrollTrigger: {
                trigger: ".main-overlay",
                start: "top center",
                scrub: 1,
            },    
            scale: 1,
            duration: 1.5,
          });
    }, []);

    return (
        <div className="main-page">
            <div className='main-overlay'>

                <div className='header'>
                    <p ref={acaHeaderRef} id='aca-header'>ACA</p>
                </div>

                <div id='site-details'>
                    <p>A collection dedicated to the muse of Asian Cinema, archived through essays, video and design.</p>
                </div>

                <div className='links'>

                </div>

            </div>
        </div>
    )
};

export default Home;