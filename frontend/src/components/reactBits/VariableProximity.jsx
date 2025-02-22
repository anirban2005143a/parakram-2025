
// import React, { useState, useCallback } from 'react';

// function VariableProximity() {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const text = `Fast. Fierce. Fearless.`
//   const hoverRadius = 40; // pixels

//   const handleMouseMove = useCallback((e) => {
//     setMousePos({
//       x: e.clientX,
//       y: e.clientY
//     });
//   }, []);

//   const calculateDistance = (element) => {
//     const rect = element.getBoundingClientRect();
//     const elementCenterX = rect.left + rect.width / 2;
//     const elementCenterY = rect.top + rect.height / 2;
    
//     return Math.sqrt(
//       Math.pow(mousePos.x - elementCenterX, 2) + 
//       Math.pow(mousePos.y - elementCenterY, 2)
//     );
//   };

//   return (
//     <div 
//       className=" cursor-default"
//       onMouseMove={handleMouseMove}
//     >
//       <p className=" text-gray-200 leading-relaxed tracking-wide text-center">
//         {text.split('').map((char, index) => (
//           char === ' ' ? (
//             <span key={index} className="inline-block">&nbsp;</span>
//           ) : (
//             <span
//               key={index}
//               className="inline-block text-7xl font-bold transition-all duration-200 hover:text-yellow-400"
//               ref={(el) => {
//                 if (el) {
//                   const distance = calculateDistance(el);
//                   const scale = distance < hoverRadius 
//                     ? 1 + (distance / (hoverRadius ))
//                     : 1;
//                   const weight = distance < hoverRadius ? '700' : '400';
                  
//                   // el.style.transform = `scale(${scale})`;
//                   // el.style.fontWeight = weight;
//                   // el.classList.add(fontSize)
//                   el.style.scale = scale
//                 }
//               }}
//             >
//               {char}
//             </span>
//           )
//         ))}
//       </p>
//     </div>
//   );
// }

// export default VariableProximity;


// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { SplitText } from 'gsap/SplitText';
// import { Sparkles } from 'lucide-react';

// gsap.registerPlugin(SplitText);

// function VariableProximity() {
//   const textRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!textRef.current) return;

//     const split = new SplitText(textRef.current, { type: "chars, words" });
    
//     gsap.from(split.chars, {
//       opacity: 0,
//       y: 50,
//       rotateX: -90,
//       stagger: 0.02,
//       duration: 1,
//       ease: "back.out(1.7)",
//       onComplete: () => {
//         // Create a timeline for continuous animation
//         const tl = gsap.timeline({ repeat: -1 });
        
//         tl.to(split.chars, {
//           y: -20,
//           duration: 0.5,
//           ease: "power2.out",
//           stagger: {
//             amount: 0.3,
//             from: "random"
//           }
//         })
//         .to(split.chars, {
//           y: 0,
//           duration: 0.5,
//           ease: "bounce.out",
//           stagger: {
//             amount: 0.3,
//             from: "random"
//           }
//         });
//       }
//     });

//     // Cleanup
//     return () => {
//       split.revert();
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black flex flex-col items-center justify-center p-4">
//       <div className="relative">
//         <Sparkles className="absolute -top-8 -left-8 text-yellow-400 animate-pulse" size={24} />
//         <Sparkles className="absolute -top-8 -right-8 text-yellow-400 animate-pulse" size={24} />
//         <div
//           ref={textRef}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"
//         >
//           Awesome Animation!
//         </div>
//         <Sparkles className="absolute -bottom-8 -left-8 text-yellow-400 animate-pulse" size={24} />
//         <Sparkles className="absolute -bottom-8 -right-8 text-yellow-400 animate-pulse" size={24} />
//       </div>
//       <p className="mt-8 text-gray-400 text-lg animate-bounce">
//         Watch the magic happen ✨
//       </p>
//     </div>
//   );
// }

// export default VariableProximity;