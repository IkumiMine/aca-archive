import { Fragment } from 'react';
import React, { useState, useLayoutEffect, useRef } from 'react';
import ArchiveModal from '../archive-modal/archive-modal.component';
import './archive-item.styles.scss';

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

//Register plugin
gsap.registerPlugin(ScrollTrigger);

//this is your new "modal" rendering function
let detailObj;

const renderData = (detail) => {
    //console.log(detail)
    detailObj = {
        "id": detail.id,
        "header": detail.header,
        "country": detail.country,
        "content": detail.content,
        "image": detail.image,
    }

    return (
        <div>
            {detailObj["id"]}
            {detailObj["header"]}
            {detailObj["country"]}
            {detailObj["content"]}
            {detailObj["image"]}
        </div>
    )
}

//console.log(detailObj);

const ArchiveItem = ({details}) => {
    
    //create a ref for the root level element for scroll animation
    const comp = useRef();

    //Scroll animation runs only on first render 
    useLayoutEffect(() => {
        
        const contents = gsap.utils.toArray(".archive-item");
        let contentFirst = [], contentSecond =[], contentThird = [], contentFourth = [];

        //Assign into each array by line
        contents.map((content, i) => {
            if(i < 3) {
                contentFirst.push(contents[i]);
            } else if (i >= 3 && i < 6) {
                contentSecond.push(contents[i]);
            } else if (i >= 6 && i < 9) {
                contentThird.push(contents[i]);
            } else if (i >= 9 && i < 12) {
                contentFourth.push(contents[i]);
            }
        })

        //const copyOne = contentFirst[0].cloneNode(true);
        //contentFirst[0].parentNode.appendChild(copyOne); // copy the first panel to the end (for seamless 
    
        gsap.context(() => {
            /*
            contentFirst.forEach((c, i) => {
                ScrollTrigger.create({
                    trigger: c,
                    start: 0,
                    end: "max",
                    scrub: true, 
                    onLeave: self => {
                        self.scroll(1);
                        ScrollTrigger.update();
                    },
                    onLeaveBack: self => {
                        self.scroll(ScrollTrigger.maxScroll(window-1));
                        ScrollTrigger.update();
                    }
                });
            });
            contentSecond.forEach((c, i) => {
                ScrollTrigger.create({
                    trigger: c,
                    start: "top top",
                    pinSpacing: false 
                });
            });
            contentThird.forEach((c, i) => {
                ScrollTrigger.create({
                    trigger: c,
                    start: "top top",
                    pinSpacing: false 
                });
            });
            contentFourth.forEach((c, i) => {
                ScrollTrigger.create({
                    trigger: c,
                    start: "top top",
                    pinSpacing: false 
                });
            });
            */
            
            gsap.to(contentFirst, {
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    scrub: true,
                    onLeave: self => {
                        self.scroll(1);
                        ScrollTrigger.update();
                    },
                    onLeaveBack: self => {
                        self.scroll(ScrollTrigger.maxScroll(window-1));
                        ScrollTrigger.update();
                    }
                },
                ease: "none",
                //yPercent: 10,    
            });
            gsap.to(contentSecond, {
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    scrub: true,
                    onLeave: self => {
                        self.scroll(1);
                        ScrollTrigger.update();
                    },
                    onLeaveBack: self => {
                        self.scroll(ScrollTrigger.maxScroll(window-1));
                        ScrollTrigger.update();
                    }
                },
                ease: "none",
                //yPercent: -10,    
            });
            gsap.to(contentThird, {
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    scrub: true,
                    onLeave: self => {
                        self.scroll(1);
                        ScrollTrigger.update();
                    },
                    onLeaveBack: self => {
                        self.scroll(ScrollTrigger.maxScroll(window-1));
                        ScrollTrigger.update();
                    }
                },
                ease: "none",
                //yPercent: 30,    
            });
            gsap.to(contentFourth, {
                scrollTrigger: {
                    start: 0,
                    end: "max",
                    scrub: true,
                    onLeave: self => {
                        self.scroll(1);
                        ScrollTrigger.update();
                    },
                    onLeaveBack: self => {
                        self.scroll(ScrollTrigger.maxScroll(window-1));
                        ScrollTrigger.update();
                    }
                },
                ease: "none",
                //yPercent: 50,    
            });    
        }, comp);

        /*
        let maxScroll;
        //Creates a standalone ScrollTrigger instance
        let pageScrollTrigger = ScrollTrigger.create({ // snap whole page to the closest section!
        // normally we'd just do snap: 1 / panels.length but we'll use a function-based value so that we can handle the very start and end values in a special way to prevent looping on the snap

            //snap allows you to snap to certain progress values (between 0 and 1) after the user stops scrolling
            snap(value) {
                let snappedValue = gsap.utils.snap(1 / contents.length, value);
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
        */
    }, []);

    //open/close modal state
    const [openModal, setOpenModal] = useState(false);

    return (
        <Fragment>
            <div className='archive-item-container' ref={comp}>
                {details.map((detail, i) => (
                    <div 
                        className='archive-item'    
                        key={detail.id}
                        onClick={() => {
                            renderData(detail);
                            setOpenModal(true);
                        }}
                    >
                        <img alt={detail.header} src={Object.values(detail.image)}/>
                    </div>
                ))}
            </div>

            {/*if openModal is true, display ArchiveModal*/}
            {openModal &&
                <ArchiveModal detailObj={detailObj} setOpenModal={setOpenModal} />
            }

        </Fragment>
    )
}

export default ArchiveItem;