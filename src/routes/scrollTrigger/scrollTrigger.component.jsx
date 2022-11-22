import './scrollTrigger.styles.scss';

import { useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
//Register plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerPractice = () => {

    useLayoutEffect (() => {
        let panels = gsap.utils.toArray(".panel"),
        copy = panels[0].cloneNode(true);
        panels[0].parentNode.appendChild(copy); // copy the first panel to the end (for seamless looping)
        console.log(panels[0]);

        panels.forEach((panel, i) => {
            ScrollTrigger.create({
                //The element (or selector text for the element) whose position in the normal document flow is used to calculate where the ScrollTrigger starts.
                trigger: panel,
                //Determines the starting position of the ScrollTrigger.
                start: "top top",
                //An element (or selector text for the element) that should be pinned during the time that the ScrollTrigger is active, meaning it will appear to "stick" in its starting position while the rest of the content continues scrolling underneath it. 
                //pin: true, 
                //By default, padding will be added to the bottom (or right for horizontal: true) to push other elements down so that when the pinned element gets unpinned, the following content catches up perfectly.
                pinSpacing: false,
                markers: true, 
            });
        });
    
        let maxScroll;
        //Creates a standalone ScrollTrigger instance
        let pageScrollTrigger = ScrollTrigger.create({ // snap whole page to the closest section!
        // normally we'd just do snap: 1 / panels.length but we'll use a function-based value so that we can handle the very start and end values in a special way to prevent looping on the snap

            //snap allows you to snap to certain progress values (between 0 and 1) after the user stops scrolling
            snap(value) {
                let snappedValue = gsap.utils.snap(1 / panels.length, value);
                if (snappedValue <= 0) { // don't let it go all the way back to exactly 0 or it'll wrap. Keep it a bit more than 1px from the top.
                return 1.05 / maxScroll;
                } else if (snappedValue >= 1) { // don't let it go all the way to the end or it'll wrap. Keep it a bit more than 1px from the bottom. 
                return maxScroll / (maxScroll + 1.05);
                }
                return snappedValue;
            }  
        });

        function onResize() {
            //A utility function for getting the maximum scroll value for a particular element/scroller.
            maxScroll = ScrollTrigger.maxScroll(window) - 1;
        }
        onResize();
        window.addEventListener("resize", onResize);

        // make sure we use a non-passive event listener so that we can preventDefault() on the scroll if it's at the very top or bottom
        window.addEventListener("scroll", e => {
            let scroll = pageScrollTrigger.scroll() //Gets/Sets the scroll position of the associated scroller (numeric).
            if (scroll > maxScroll) {
                pageScrollTrigger.scroll(1);
                e.preventDefault();
            } else if (scroll < 1) {
                pageScrollTrigger.scroll(maxScroll - 1);
                e.preventDefault();
            }
        }, {passive: false});
    }, [])
    
    return (
        <div>
            <div className="description panel blue">
                <div>
                    <h1>Layered pinning with infinite looping</h1>
                    <p>Use pinning to layer panels on top of each other as you scroll.</p>
                    <div className="scroll-down">Scroll down<div className="arrow"></div></div>
                </div>
            </div>
            <section className="panel red">ONE</section>
            <section className="panel orange">TWO</section>
            <section className="panel purple">THREE</section>
            <section className="panel green">FOUR</section>
        </div>
    )

}

export default ScrollTriggerPractice;