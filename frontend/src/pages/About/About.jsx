import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import BgImage from '/bgimg.jpeg';
import Convener from '/bgimg.jpeg';
import SplitText from '../../components/reactBits/SplitText';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

const AboutUsPage = () => {
    const bgImageRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const convenerRef = useRef(null);
    const convenerImageRef = useRef(null);
    const convenerTextRef = useRef(null);

    useEffect(() => {
        // Background image animation: Fade in from the bottom
        gsap.from(bgImageRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bgImageRef.current,
                start: 'top bottom',
                toggleActions: 'play none none reverse',
            },
        });

        // Title animation: Slide in from the left
        gsap.from(titleRef.current, {
            opacity: 0,
            x: -100,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Paragraph animation: Slide in from the right
        gsap.from(paragraphRef.current, {
            opacity: 0,
            x: 100,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: paragraphRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Convener section animation: Slide in from the bottom
        gsap.from(convenerRef.current, {
            opacity: 0,
            y: 100,
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: convenerRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
        });

        // Convener image animation: Scale up and rotate slightly
        gsap.from(convenerImageRef.current, {
            opacity: 0,
            scale: 0.5,
            rotate: -30,
            duration: 1.5,
            ease: 'elastic.out(1, 0.5)', // Elastic bounce effect
            scrollTrigger: {
                trigger: convenerImageRef.current,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
            },
        });

        // Convener text animation: Staggered fade-in from the left
        gsap.from(convenerTextRef.current.querySelectorAll('span, h1, p'), {
            opacity: 0,
            x: -50,
            stagger: 0.2, // Staggered animation
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: convenerTextRef.current,
                start: 'top 82%',
                toggleActions: 'play none none reverse',
            },
        });
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen relative py-[80px] bg-[#0000003f] " >
                <img ref={bgImageRef} src={BgImage} alt="bgimage" className="w-screen h-screen fixed top-0 -z-10 overflow-hidden" />
                <div className="w-full min-h-screen  flex flex-col items-center overflow-hidden">
                    <SplitText
                        text="About Us"
                        className="lg:text-[100px] md:text-[80px] sm:text-7xl text-6xl font-semibold text-center py-10 text-white"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                    <p ref={paragraphRef} className=" lg:w-9/12 md:w-10/12 w-[92%] text-white text-xl font-light text-justify mb-20">
                        The Indian Institute of Technology (Indian School of Mines), i.e., IIT
                        (ISM), is a premier engineering and research institution located in
                        the heart of the mineral-rich region of India in the city of Dhanbad.
                        Founded in 1926 as Indian School of Mines, the institute is on the
                        verge of completing its centenary year of establishment. It has the
                        privilege of being recognized as the Institute of National Importance
                        under the Institutes of Technology Act, 1961. This third oldest
                        institute among the IITs stood envisioned to be a State of Art
                        educational and research destination for earth sciences and
                        engineering in India. With this legacy, it has witnessed exponential
                        growth and expansion in various technical domains besides earth
                        sciences. Recently, the institute featured at 25th rank in the QS
                        World University Rankings of 2023 in the field of Mining and Mineral
                        Engineering. The IIT (ISM) admits its undergraduate students through
                        the Joint Entrance Examination (Advanced). The institute has 18
                        academic departments covering Engineering, Applied Sciences,
                        Humanities and Social Sciences, and Management studies.
                    </p>
                    <div ref={convenerRef} className="lg:w-9/12 md:w-10/12 w-[92%] my-10 py-10 md:px-7 px-4 backdrop-blur-sm bg-white/20 text-white rounded-3xl shadow-2xl flex flex-col items-center">
                        <div className='flex md:flex-row flex-col gap-5 items-center'>
                            <img ref={convenerImageRef} src={Convener} loading='lazy' alt="convener Image" className='md:w-40 w-25 md:h-40 h-25 object-cover object-center rounded-full ' />
                            <span ref={convenerTextRef} className='flex flex-col items-center justify-center '>
                                <span className='text-2xl text-center pt-4'>Prof. Annavarapu Chandra Sekhara Rao</span>
                                <span className='text-lg text-center text-yellow-200'>Dept. of Computer Science & Engg.</span>
                            </span>
                        </div>
                        <h1 className="text-white text-5xl text-center my-8 font-bold">
                            Convener’s Message
                        </h1>
                        <p className="my-5 text-md text-justify">
                            The combination of talent, hard effort, compassion, competitive
                            spirit, and enthusiasm is what makes sports great. It is the one
                            thing that, regardless of gender, age, color, religion, caste, or
                            anything else, can unite the entire globe in a state of innocent
                            surprise and delight. Without a strong sports culture, I think
                            education is still incomplete since healthy growth benefits
                            everyone—individuals as well as society at large. Sports are the
                            only activities that combine work with delight, anger with serenity,
                            and brotherhood with rivalry. As we at IIT(ISM), Dhanbad are proud
                            of India&apos;s multifarious sports culture, we are pleased to
                            announce the creation of &apos;Parakram &apos;24&apos;, the most
                            opulent annual sports gathering in East India, in honor of it. The
                            three day annual sports festival strives to showcase the
                            sportsmanship in every individual and make them realize their true
                            potential ,rebrand the culture of sports and gaming that is
                            unfortunately often looked down upon in our country. “In the
                            symphony of life, sports provide the rhythm, the discipline, and the
                            harmony that elevate us to the highest notes of achievement.”
                        </p>
                        <p className="my-5 text-md text-justify">
                            The goal of &apos;&apos;Parakram&apos;24&apos;&apos; is to provide
                            an equitable and level playing field where all individuals and teams
                            can showcase their full potential, both mentally and physically. As
                            a team, we extend our warmest greetings and look forward to having
                            you visit us at IIT (ISM), Winning or losing is a part of the
                            game,the only thing that matters is that whether you give your best
                            or not. “To be a champ you have to believe in yourself when no one
                            else will”
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AboutUsPage;