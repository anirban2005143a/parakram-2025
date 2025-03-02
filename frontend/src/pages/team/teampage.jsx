import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/ui/3d-card.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import SplitText from "../../components/reactBits/SplitText.jsx";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import OthersDisplay from "./other.jsx";

function Teampage() {

  const comingSoonRef = useRef(null);
  const circlesRef = useRef(null);
  const textRef = useRef(null);
  const formRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 12,
    minutes: 34,
    seconds: 56
  });


  const Organizers = [
    {
      "Position": "Sports Officer",
      "Name": "Dr. D.N. Acharya",
      "Email": "spo@iitism.ac.in",
      "image": "/members/D N Acharya.jpg"
    }
  ];

  const CoreTeam = [
    {
      "Position": "Convener",
      "Name": "Prof. Ajit Kumar",
      "Email": "convener.parakram@iitism.ac.in",
      "image": "/members/ajitkumar.png"
    },
    {
      "Position": "Co-Convener",
      "Name": "Prof. Esha Saha",
      "Email": "eshasaha@iitism.ac.in",
      "image": "/members/esha SAHA.jpg"
    },
    {
      "Position": "Treasurer",
      "Name": "Prof. Pattiapaban Sahu",
      "Email": "pattiapaban@iitism.ac.in",
      "image": "/members/prof patitapaban sahu.jpg"
    }, {
      "Position": "Organizing Secretary",
      "Name": "Mr. Avishek Baisya",
      "Email": "spo@iitism.ac.in",
      "image": "/members/demoUser.jpg"
    },
    {
      "Position": "AO(Sports)",
      "Name": "Shri. Naveen Kumar",
      "Email": "aosports@iitism.ac.in",
      "image": "/members/naveen kumar.jpg"
    },

    {
      "Position": "General Secretary (Sports)",
      "Name": "Mr. Shivam Kumar",
      "Email": "gsec_gns@iitism.ac.in",
      "image": "/members/shivam.jpg"
    },
    {
      "Position": "Advisor",
      "Name": "Ankit Kumar Singh",
      "Email": "21je0124@iitism.ac.in",
      "image": "/members/demoUser.jpg"
    },
  ];

  const Coordinators = [
    {
      "Position": "Overall Coordinator",
      "Name": "Rishi Raj",
      "Email": "21je0767@iitism.ac.in",
      "Contact": "9508823691",
      "image": "/members/rishi raj.jpg",
      "linkdin": "https://www.linkedin.com/in/rishi-raj-46a839233/"
    },
    {
      "Position": "Joint Coordinator",
      "Name": "Abhinav Aditya",
      "Email": "22je0021@iitism.ac.in",
      "Contact": "9472088772",
      "image": "/members/Abhinav Aditya .JPG"
    }
  ];

  const others = [
    {
      "Team": "Web and App development Team",
      "Role": "Develops webstrategies for registrations, live updates, etc.",
      "Head": {
        "Name": "Angothu Rahul Naik",
        "AdmissionNo": "21JE0110",
        "image": "/members/rahul sir.jpg"
      },
      "JointHeads": [
        {
          "Name": "Harsh Singh",
          "AdmissionNo": "22JE0388",
          "image": "/members/harsh sir.jpg"
        },
        {
          "Name": "Savara Jayavardhan",
          "AdmissionNo": "22JE0883",
          "image": "/members/demoUser.jpg"
        }
      ]
    }, {
      "Team": "Event Management Team",
      "Role": "Oversees the entire fest, ensures smooth execution",
      "Head": [
        {
          "Name": "Guijani Sridhara Teja",
          "Role": "Outdoor Games & Ground Management",
          "AdmissionNo": "2AMB0027",
          "image": "/members/Gujjari Sridhara teja .jpg"
        },
        {
          "Name": "Revant Vora",
          "Role": "Indoor Games",
          "AdmissionNo": "21je0759",
          "image": "/members/Revant vora.jpg",
          "linkdin" : "https://www.linkedin.com/feed?trk=p_mwlite_my_network-primary_nav"
        }
      ],
      "JointHeads": [
        {
          "Name": "Allada Praneeth",
          "Role": "Gonouls & Court Management",
          "AdmissionNo": "22JE0089",
          "image": "/members/demoUser.jpg"
        },
        {
          "Name": "Shailesh Singh",
          "Role": "Outdoor Games)",
          "AdmissionNo": "22MC0084",
          "image": "/members/demoUser.jpg"
        },
        {
          "Name": "Lakavath Akhil",
          "Role": "Indoor Games",
          "AdmissionNo": "22JE0515",
          "image": "/members/demoUser.jpg"
        },
        {
          "Name": "Anurag Shukla",
          "Role": "Indoor Games",
          "AdmissionNo": "22JE0151",
          "image": "/members/Anurag_shukla.HEIC"
        },
        {
          "Name": "Dabbada Sai Sandeep",
          "Role": "Outdoor Games",
          "AdmissionNo": "22JE0289",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Operations & Logistics Team",
      "Role": "Handles venue setup, equipment, schedules, and logistics",
      "Head": {
        "Name": "Vikas Parihar",
        "AdmissionNo": "23MT0439",
        "image": "/members/Vikas Parihar.jpg"
      },
      "JointHeads": [
        {
          "Name": "Siddu Bhukya",
          "AdmissionNo": "22JE0954",
          "image": "/members/demoUser.jpg"
        },
        {
          "Name": "Sumit Kumar Raj",
          "AdmissionNo": "22JE0989",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Public Relation Team",
      "Role": "Handles meet, contextual speakers & guests, communication, and record image",
      "Head": {
        "Name": "Aman Kumar",
        "AdmissionNo": "21JE0085",
        "image": "/members/demoUser.jpg"
      },
      "JointHeads": [
        {
          "Name": "Eisha Singh",
          "AdmissionNo": "24MB0025",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Hospitality Team",
      "Role": "Manager guest, VIP, and participant accommodation & fooding",
      "Head": {
        "Name": "Riddhi Patra",
        "AdmissionNo": "21JE0761",
        "image": "/members/riddhi patra.jpg"
      },
      "JointHeads": [
        {
          "Name": "Bhukya Sriharsha",
          "AdmissionNo": "22JE0251",
          "image": "/members/Bhukya Sriharsha .jpg"
        },
        {
          "Name": "Vikash Prasad",
          "AdmissionNo": "23MT0438",
          "image": "/members/VIKASH PRASAD.jpg"
        }
      ]
    },
    {
      "Team": "Sponsorship Team",
      "Role": "Secures funds and partnerships for the fest",
      "Head": {
        "Name": "Abhinav Pratham",
        "AdmissionNo": "21JE0021",
        "image": "/members/demoUser.jpg"
      },
      "JointHeads": [
        {
          "Name": "Siddela Keerthi",
          "AdmissionNo": "21JE0916",
          "image": "/members/Siddela keerthi.jpg"
        },
        {
          "Name": "Shivam Sharan Bhagat",
          "AdmissionNo": "24MT0423",
          "image": "/members/demoUser.jpg"
        },
        {
          "Name": "Subhash Singh",
          "AdmissionNo": "22JE0984",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Security Team",
      "Role": "Ensures safety, crowd control, and emergency response",
      "Head": {
        "Name": "Saurabh Kumar Singh",
        "AdmissionNo": "21JE0848",
        "image": "/members/demoUser.jpg"
      },
      "JointHeads": [
        {
          "Name": "Virendra Biloniya",
          "AdmissionNo": "22JE1079",
          "image": "/members/Virendra Biloniya.jpg"
        }
      ]
    },
    {
      "Team": "Design Team",
      "Role": "Creates logo, teaser, posters, banners, branding materials, etc.",
      "Head": {
        "Name": "Abhinav Dhiman",
        "AdmissionNo": "22JE0023",
        "image": "/members/demoUser.jpg"
      },
      "JointHeads": [
        {
          "Name": "Ankita Negi",
          "AdmissionNo": "24MB0011",
          "image": "/members/Ankita Negi .JPG"
        },
        {
          "Name": "Khushi",
          "AdmissionNo": "22JE0478",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Content and Documentation Team",
      "Role": "Manager content, press releases, and reports; Manager media for wider dissemination of the fest",
      "Head": {
        "Name": "Harshita Mahbubani",
        "AdmissionNo": "22JE0398",
        "image": "/members/Harshita Mahbubani.jpeg"
      },
      "JointHeads": [
        {
          "Name": "Kadiyala Bhaskar",
          "AdmissionNo": "22JE0444",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Finance Team",
      "Role": "Manages budget, payments, and financial planning",
      "Head": {
        "Name": "Preet Samanta",
        "AdmissionNo": "23MT0273",
        "image": "/members/demoUser.jpg"
      },
      "JointHeads": [
        {
          "Name": "Arko Bhattacharjya",
          "AdmissionNo": "22JE0168",
          "image": "/members/demoUser.jpg"
        }
      ]
    },

    {
      "Team": "Aburnit Connect Team",
      "Role": "Engages aburnit for sponsorships and participation",
      "Head": {
        "Name": "Rishav Ranjan",
        "AdmissionNo": "21JE0765",
        "image": "/members/Rishav Ranjan.jpg"
      },
      "JointHeads": [
        {
          "Name": "Anurag Jha",
          "AdmissionNo": "22JE0148",
          "image": "/members/Anurag Jha.jpg"
        },
        {
          "Name": "Vimlesh Awasthi",
          "AdmissionNo": "22MC0114",
          "image": "/members/demoUser.jpg"
        }
      ]
    },
    {
      "Team": "Promotion and Marketing Team",
      "Role": "Drives publicity, attracts participants",
      "Head": {
        "Name": "Chhavi Sharma",
        "AdmissionNo": "24MB0022",
        "image": "/members/Chhavi Sharma.JPG"
      },
      "JointHeads": [
        {
          "Name": "Swathi Chavan",
          "AdmissionNo": "22JE1006",
          "image": "/members/Swathi Chavan.jpeg"
        },
        {
          "Name": "Khushu",
          "AdmissionNo": "24MB0039",
          "image": "/members/Khushu.jpg"
        }
      ]
    }];

  const Developers = [
    {
      "name": "Anirban Das",
      "admission_number": "23JE0104",
      "linkedin": "https://www.linkedin.com/in/anirban-das-2014412b9/",
      "image": "/members/anirban.jpg"
    },
    {
      "name": "Vaibhav Aryan",
      "image": "/members/vaibhav.jpg",
      "admission_number": "23JE1055",
      "linkedin": "https://www.linkedin.com/in/vaibhav-aryan-00650b287/"
    },
    {
      "name": "Rajdeep Sonkar",
      "image": "/members/rajdeeep.jpg",
      "admission_number": "23JE0778",
      "linkedin": "https://www.linkedin.com/in/rajdeep-sonkar-8b811a287/"
    }
  ]
    ;

  // Set to true to show Coming Soon page, false to show Sponsors
  const showComingSoon = false;

  useEffect(() => {
    if (!showComingSoon) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showComingSoon]);


  useEffect(() => {
    if (showComingSoon && comingSoonRef.current) {
      // Animate the main title
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      });

      // Animate the decorative circles
      const circles = circlesRef.current.querySelectorAll('.circle');
      gsap.from(circles, {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5
      });

      // Animate the countdown
      // gsap.from(countdownRef.current.querySelectorAll('.countdown-item'), {
      //     y: 50,
      //     opacity: 0,
      //     duration: 0.8,
      //     stagger: 0.15,
      //     ease: "power3.out",
      //     delay: 1
      // });

      // Animate the form
      gsap.from(formRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.5
      });

      // Text typing animation
      const textElements = textRef.current.querySelectorAll('.typing-text');
      textElements.forEach((el, index) => {
        const originalText = el.textContent;
        el.textContent = '';

        gsap.to(el, {
          duration: 2,
          text: originalText,
          delay: 0.5 + (index * 0.5),
          ease: "none"
        });
      });

      // Floating animation for circles
      circles.forEach((circle, index) => {
        gsap.to(circle, {
          y: `${Math.sin(index) * 20}px`,
          x: `${Math.cos(index) * 20}px`,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      });
    }
  }, [showComingSoon]);

  return (
    <>
      <Navbar />


      {/* Coming Soon Page */}
      {showComingSoon && (
        <section
          ref={comingSoonRef}
          className="min-h-screen bg-gradient-to-br from-[#272e374d] to-[#00000079] flex flex-col items-center justify-center px-4 overflow-hidden relative"
        >
          {/* Decorative circles */}
          <div ref={circlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="circle absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-pink-500 opacity-20"></div>
            <div className="circle absolute top-[40%] left-[80%] w-48 h-48 rounded-full bg-indigo-500 opacity-20"></div>
            <div className="circle absolute top-[70%] left-[25%] w-40 h-40 rounded-full bg-purple-500 opacity-20"></div>
            <div className="circle absolute top-[20%] left-[60%] w-24 h-24 rounded-full bg-blue-500 opacity-20"></div>
            <div className="circle absolute top-[85%] left-[75%] w-36 h-36 rounded-full bg-indigo-300 opacity-20"></div>
          </div>

          {/* Main content */}
          <div className="container mx-auto  text-center">
            <div ref={textRef} className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                <span className="typing-text">Coming Soon</span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 max-w-2xl mx-auto">
                <span className="typing-text">We're working on something amazing. Stay tuned for the Sponsors!</span>
              </p>
            </div>


          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
              <path fill="rgba(255,255,255,0.1)" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
      )}
      {/* I have kept this hidden for now */}
      {!showComingSoon && <div className="min-h-screen  overflow-hidden  text-white py-[120px] md:px-8 px-2  z-10 relative">



        {/* Organizers Section */}
        <div className="  md:p-6 p-2 rounded-xl border-[1px] border-gray-600 bg-[#100f0f59] backdrop-blur-xs my-10 ">
          <div className="text-center">
            <SplitText
              text="Organizers"
              className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10 font-serif"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              loop={true}
            />
          </div>

          <div className="px-2 w-full sm:flex sm:flex-wrap  sm:justify-center items-center ">
            {Organizers.map((item, index) => {

              return (
                <CardContainer key={index} className="inter-var sm:w-[380px] w-full  sm:mx-4">
                  <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="sm:text-3xl text-lg font-bold text-white"
                    >
                      {item.Name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-white text-md max-w-sm mt-2"
                    >
                      {item.Position}
                    </CardItem>
                    <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                      <img
                        src={item.image || '/members/demoUser.jpg'}
                        className="h-60 w-55 object-cover  group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-center items-center ">
                      <CardItem
                        translateZ={20}
                        as={Link}
                        className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                      >
                        {item.Email}
                      </CardItem>

                    </div>
                  </CardBody>
                </CardContainer>
              )
            })}
          </div>
        </div>

        {/* CoreTeam Team Section */}
        <div className=" md:p-6 p-2 rounded-xl border-[1px] border-gray-600 bg-[#100f0f59] backdrop-blur-xs my-10 ">
          <div className="text-center pt-10">
            <SplitText
              text="Core Team"
              className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              loop={true}
            />
          </div>

          <div className="md:px-2 w-full sm:flex sm:flex-wrap  sm:justify-center items-center">
            {CoreTeam.map((item, index) => {

              return (
                <CardContainer key={index} className="inter-var h-[480px] sm:w-[380px] w-full mx-2">
                  <CardBody className="h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full  rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="sm:text-3xl text-lg font-bold text-white"
                    >
                      {item.Name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-white text-md max-w-sm mt-2"
                    >
                      {item.Position}
                    </CardItem>
                    <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                      <img
                        src={item.image || '/members/demoUser.jpg'}
                        className="h-60 w-55 object-cover  group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20 absolute w-10/12 h-fit bottom-5">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                      >

                      </CardItem>
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                      >
                        {item.Email}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              )
            })}
          </div>
        </div>

        {/*Coordinators  Team Section */}
        <div className=" md:p-6 p-2 rounded-xl border-[1px] border-gray-600 bg-[#100f0f59] backdrop-blur-xs my-10">
          <div className="text-center pt-10">
            <SplitText
              text="Coordinators"
              className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              loop={true}
            />
          </div>

          <div className="md:px-5 w-full sm:flex sm:flex-wrap  sm:justify-center  ">
            {Coordinators.map((item, index) => {

              return (
                <CardContainer key={index} className="inter-var h-[500px] sm:w-[380px] w-full sm:mx-4">
                  <CardBody className=" h-full relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full rounded-xl p-6 border">
                    <CardItem
                      translateZ="50"
                      className="sm:text-3xl text-lg font-bold text-white"
                    >
                      {item.Name}
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-white text-md max-w-sm mt-2"
                    >
                      {item.Position}
                    </CardItem>
                    {item.linkdin && <a
                      as="p"
                      href={item.linkdin}
                      target="_blank"
                      translateZ="60"
                      className="text-blue-500 underline underline-offset-8 text-md max-w-sm mt-2"
                    >
                      Linkedin
                    </a>}
                    <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        className="h-60 w-55 object-cover  group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </CardItem>
                    <div className=" absolute w-[80%] bottom-5 flex justify-between items-center mt-20">
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                      >
                        {item.Contact}
                      </CardItem>
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                      >
                        {item.Email}
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              )
            })}
          </div>
        </div>

        {/* developers Team Section */}
        <div className=" md:p-6 p-2 rounded-xl border-[1px] border-gray-600 bg-[#100f0f59] backdrop-blur-xs my-10">
          <div className="text-center pt-10">
            <SplitText
              text="Developer"
              className="text-3xl sm:text-4xl lg:text-6xl font-semibold py-10"
              delay={150}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              loop={true}
            />
          </div>

          <div className="md:px-5 w-full sm:flex sm:flex-wrap  sm:justify-center items-center ">

            {Developers.map((person, index) => {

              return (<CardContainer key={index} className="inter-var md:w-[380px] sm:h-[480px] h-[450px] w-full md:mx-4">
                <CardBody className=" relative group/card hover:shadow-2xl h-full hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full rounded-xl p-6 border">
                  <CardItem
                    translateZ="50"
                    className="sm:text-3xl text-lg font-bold text-white"
                  >
                    {person.name}
                  </CardItem>
                  <a
                    as="p"
                    href={person.linkedin}
                    target="_blank"
                    translateZ="60"
                    className="text-blue-500 underline underline-offset-8 text-md max-w-sm mt-2"
                  >
                    Linkedin
                  </a>
                  <CardItem translateZ="100" className="w-fit mx-auto my-10 shadow-2xl shadow-[#444444c5] rounded-md overflow-hidden">
                    <img
                      src={person.image}
                      className="h-60 w-full object-contain  group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex absolute bottom-5 w-[80%] justify-between items-end mt-20">
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                    >
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      className="px-4 py-2 underline underline-offset-4 rounded-xl text-xs font-normal text-white"
                    >
                      {person.admission_number}
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>)
            })}

          </div>
        </div>

        {/* others Section */}
        <OthersDisplay others={others} />

        <div className="mb-36 h-5">{/* Spacer */}</div>

      </div>}
      <Footer />
    </>
  );
}

export default Teampage;