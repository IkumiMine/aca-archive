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
        
        /*
        let copyOne = contentFirst[0].cloneNode(true);
        contentFirst[0].parentNode.appendChild(copyOne); // copy the first panel to the end (for seamless    

        let copyTwo = contentSecond[0].cloneNode(true);
        contentSecond[0].parentNode.appendChild(copyTwo);

        let copyThree = contentThird[0].cloneNode(true);
        contentThird[0].parentNode.appendChild(copyThree);

        let copyFour = contentFourth[0].cloneNode(true);
        contentFourth[0].parentNode.appendChild(copyFour);
        */

        gsap.context(() => {
        
            contentFirst.forEach((cF, i) => {
                gsap.to(cF, { 
                    yPercent: -1,
                    duration: 5,
                    ease: "none",
                });
                ScrollTrigger.create({
                    trigger: cF,
                    start: "top top",
                    pinSpacing: false,
                    markers: true,
                });
            });
/*
            contentSecond.forEach((cF, i) => {
                gsap.to(cF, { 
                    yPercent: -5,
                    ease: "none",
                });
                ScrollTrigger.create({
                    trigger: cF,
                    start: "top top",
                    pinSpacing: false,
                    markers: true,
                });
            });

            contentThird.forEach((cF, i) => {
                gsap.to(cF, { 
                    yPercent: -2,
                    ease: "none",
                });
                ScrollTrigger.create({
                    trigger: cF,
                    start: "top top",
                    pinSpacing: false,
                    markers: true,
                });
            });

            contentFourth.forEach((cF, i) => {
                gsap.to(cF, { 
                    ease: "none",
                });
                ScrollTrigger.create({
                    trigger: cF,
                    start: "top top",
                    pinSpacing: false,
                    markers: true,
                });
            });
*/
        }, comp);

        let maxScroll;
        //Creates a standalone ScrollTrigger instance
        let pageScrollTriggerOne = ScrollTrigger.create({ 
            snap(value) {
                let snappedValue = gsap.utils.snap(1 / contentFirst.length, value);
                if (snappedValue <= 0) { 
                return 1.05 / maxScroll;
                } else if (snappedValue >= 1) { 
                return maxScroll / (maxScroll + 1.05);
                }
                return snappedValue;
            }  
        });
/*
        let pageScrollTriggerTwo = ScrollTrigger.create({ 
            snap(value) {
                let snappedValue = gsap.utils.snap(1 / contentSecond.length, value);
                if (snappedValue <= 0) { 
                return 1.05 / maxScroll;
                } else if (snappedValue >= 1) { 
                return maxScroll / (maxScroll + 1.05);
                }
                return snappedValue;
            }  
        });

        let pageScrollTriggerThree = ScrollTrigger.create({ 
            snap(value) {
                let snappedValue = gsap.utils.snap(1 / contentThird.length, value);
                if (snappedValue <= 0) { 
                return 1.05 / maxScroll;
                } else if (snappedValue >= 1) { 
                return maxScroll / (maxScroll + 1.05);
                }
                return snappedValue;
            }  
        });

        let pageScrollTriggerFour = ScrollTrigger.create({ 
            snap(value) {
                let snappedValue = gsap.utils.snap(1 / contentFourth.length, value);
                if (snappedValue <= 0) { 
                return 1.05 / maxScroll;
                } else if (snappedValue >= 1) { 
                return maxScroll / (maxScroll + 1.05);
                }
                return snappedValue;
            }  
        });
*/

        function onResize() {
            //A utility function for getting the maximum scroll value for a particular element/scroller.
            maxScroll = ScrollTrigger.maxScroll(window) - 1;
        }
        onResize();
        window.addEventListener("resize", onResize);

        window.addEventListener("scroll", e => {
            let scroll = pageScrollTriggerOne.scroll() 
            if (scroll > maxScroll) {
                pageScrollTriggerOne.scroll(1);
                e.preventDefault();
            } else if (scroll < 1) {
                pageScrollTriggerOne.scroll(maxScroll - 1);
                e.preventDefault();
            }
        }, {passive: false});

        /*
        window.addEventListener("scroll", e => {
            let scroll = pageScrollTriggerTwo.scroll() 
            if (scroll > maxScroll) {
                pageScrollTriggerTwo.scroll(1);
                e.preventDefault();
            } else if (scroll < 1) {
                pageScrollTriggerTwo.scroll(maxScroll - 1);
                e.preventDefault();
            }
        }, {passive: false});

        window.addEventListener("scroll", e => {
            let scroll = pageScrollTriggerThree.scroll() 
            if (scroll > maxScroll) {
                pageScrollTriggerThree.scroll(1);
                e.preventDefault();
            } else if (scroll < 1) {
                pageScrollTriggerThree.scroll(maxScroll - 1);
                e.preventDefault();
            }
        }, {passive: false});

        window.addEventListener("scroll", e => {
            let scroll = pageScrollTriggerFour.scroll() 
            if (scroll > maxScroll) {
                pageScrollTriggerFour.scroll(1);
                e.preventDefault();
            } else if (scroll < 1) {
                pageScrollTriggerFour.scroll(maxScroll - 1);
                e.preventDefault();
            }
        }, {passive: false});
        */
    }, []);

    //open/close modal state
    const [openModal, setOpenModal] = useState(false);

    return (
        <Fragment>
            <div ref={comp}>
                <div className='archive-item-container'> 
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
            </div>

            {/*if openModal is true, display ArchiveModal*/}
            {openModal &&
                <ArchiveModal detailObj={detailObj} setOpenModal={setOpenModal} />
            }

        </Fragment>
    )
}

export default ArchiveItem;