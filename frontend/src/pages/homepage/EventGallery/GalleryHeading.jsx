import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GalleryHeading = () => {
    const lineTopRef = useRef(null);
    const lineBottomRef = useRef(null);
    const ampersandRef = useRef(null);
    const lettersLeftRef = useRef(null);
    const lettersRightRef = useRef(null);
    const containerHeadingRef = useRef(null);

    useEffect(() => {
        // Create a GSAP timeline
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: containerHeadingRef.current, // Element to trigger the animation
                scroller: document.body,
                start: "top 75%", // Start animation when the top of the element hits 80% of the viewport
                end: "bottom 20%", // End animation when the bottom of the element hits 20% of the viewport
                // toggleActions: "play none none none", // Play the animation once when it enters the viewport
                // markers: true
            },
        });

        // Animation for top line
        timeline.fromTo(
            lineTopRef.current,
            { opacity: 0.5, scaleX: 0 },
            { opacity: 1, scaleX: 1, duration: 0.7, ease: "power2.inOut" }
        );

        // Animation for bottom line
        timeline.fromTo(
            lineBottomRef.current,
            { opacity: 0.5, scaleX: 0 },
            { opacity: 1, scaleX: 1, duration: 0.7, ease: "power2.inOut" },
            "-=0.7" // Start at the same time as the top line
        );

        // Animation for top line (translateY)
        timeline.to(
            lineTopRef.current,
            {
                y: "-0.625em", // Move the top line up
                duration: 0.6,
                ease: "power2.out",
            },
            "-=0.1" // Overlap with the previous animation
        );

        // Animation for bottom line (translateY)
        timeline.to(
            lineBottomRef.current,
            {
                y: "0.625em", // Move the bottom line down
                duration: 0.6,
                ease: "power2.out",
            },
            "-=0.6" // Offset to start earlier
        );

        // Animation for .ampersand
        timeline.fromTo(
            ampersandRef.current,
            { opacity: 0, scaleY: 0.5 },
            { opacity: 1, scaleY: 1, duration: 0.6, ease: "power2.out" },
            "-=0.6" // Offset to start earlier
        );

        // Animation for .letters-left
        timeline.fromTo(
            lettersLeftRef.current,
            { opacity: 0, x: "0.5em" },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.3" // Offset to start earlier
        );

        // Animation for .letters-right
        timeline.fromTo(
            lettersRightRef.current,
            { opacity: 0, x: "-0.5em" },
            { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
            "-=0.6" // Offset to start earlier
        );

    }, []);

    return (
        <div id='galleryHeading' ref={containerHeadingRef}  className=' '>
            <div className=" flex flex-col items-center justify-center w-fit mx-auto" >
                {/* Top Line */}
                <div ref={lineTopRef} className="line w-full h-1 border-b-[1px] border-white "></div>

                {/* Text Content */}
                <div className="flex md:flex-row flex-col justify-center items-center md:space-x-4 px-4">
                    <div ref={lettersLeftRef} className=" md:text-4xl text-4xl font-extralight font-serif text-white nosifer-regular">Event </div>
                    <div ref={ampersandRef} className=" md:text-6xl text-6xl font-extrabold  font-serif text-white px-2 ">!</div>
                    <div ref={lettersRightRef} className=" md:text-4xl text-4xl font-extralight font-serif text-white nosifer-regular">Lineup</div>
                </div>

                {/* Bottom Line */}
                <div ref={lineBottomRef} className="line w-full h-1 border-b-[1px] border-white  "></div>
            </div>
        </div>
    );
};

export default GalleryHeading;