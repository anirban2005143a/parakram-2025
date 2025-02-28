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
      className: "text-blue-500 dark:text-blue-500",
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
    <div>
      <Navbar />
      <div className="mb-36 h-5 text-white">{/* feff */}</div>
      {/* Text section  */}
      <div className="text-center">
        <SplitText
          text="LEADERSHIP"
          className="text-3xl sm:text-2xl lg:text-6xl font-semibold text-center py-10 text-white font-serif"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          loop={true}
        />
      </div>

      <div className="p-5 flex flex-wrap gap-4 sm:gap-2 lg:gap-x-60 justify-center items-center">
        {Leadershipdata.map((item) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-md  max-w-sm mt-2 "
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
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="mb-36 h-5 text-white">{/* feff */}</div>
      {/* Text and core team section  */}
      <div className="text-center">
        <SplitText
          text="CORE TEAM"
          className=" text-6xl font-semibold text-center py-10 text-white"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          loop={true}
        />
      </div>

      <div className="p-5 flex flex-wrap gap-4 sm:gap-2 lg:gap-x-60 justify-center items-center">
        {CoreTeam.map((item) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-md  max-w-sm mt-2 "
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
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="mb-36 h-5 text-white">{/* feff */}</div>
      {/* Text section and Developers   */}
      <div className="text-center">
        <SplitText
          text="Sexy developers "
          className=" text-6xl font-semibold text-center py-10 text-white"
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          loop={true}
        />
      </div>

      <div className="p-5 flex flex-wrap gap-4 sm:gap-2 lg:gap-x-60 justify-center items-center">
        {Developers.map((item) => (
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-neutral-600 dark:text-white"
              >
                {item.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-white text-md  max-w-sm mt-2 "
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
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
      <div className="mb-36 h-5 text-white">{/* feff */}</div>

      <Footer />
    </div>
  );
}

export default Teampage;
