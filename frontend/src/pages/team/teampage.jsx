import {
  CardBody,
  CardContainer,
  CardItem,
} from "../../components/ui/3d-card.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import SplitText from "../../components/reactBits/SplitText.jsx";
import { Link } from "react-router-dom";
import React from "react";

function Teampage() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500",
    },
  ];
  const Leadershipdata = [
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
  ];

  const CoreTeam = [
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
  ];

  const Developers = [
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
    {
      image:
        "https://res.cloudinary.com/dfczrbv7b/image/upload/v1736708702/tndurhwxcbbttytnmlnr.png",
      name: "Prof. Vinay Kumar Rajak",
      Role: "Convenor",
      Dept: "Dept. of Petroleum Engineering",
    },
  ];
  console.log(words);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="mb-36 h-5">{/* Spacer */}</div>

      {/* Leadership Section */}
      <div className="text-center">
        <SplitText
          text="LEADERSHIP"
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

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {Leadershipdata.map((item, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-md max-w-sm mt-2"
              >
                {item.Dept}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl  bg-white text-black  text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="mb-36 h-5">{/* Spacer */}</div>

      {/* Core Team Section */}
      <div className="text-center">
        <SplitText
          text="CORE TEAM"
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

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {CoreTeam.map((item, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-[#0000008b] border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-md max-w-sm mt-2"
              >
                {item.Dept}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="mb-36 h-5">{/* Spacer */}</div>

      {/* Developers Section */}
      <div className="text-center">
        <SplitText
          text="DEVELOPERS"
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

      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {Developers.map((item, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-full h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-md max-w-sm mt-2"
              >
                {item.Dept}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={item.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="mb-36 h-5">{/* Spacer */}</div>

      <Footer />
    </div>
  );
}

export default Teampage;