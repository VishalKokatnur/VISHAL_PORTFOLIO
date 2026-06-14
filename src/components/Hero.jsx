


// import React, { useRef, useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import heroVideo from "../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4";

// const Hero = () => {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(true);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     });
//   }, []);

//   const toggleVideo = () => {
//     if (!videoRef.current) return;

//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="relative w-full h-screen overflow-hidden bg-[#050505] scroll-mt-24"
//     >
//       {/* Blurred Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60 z-0"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* Main Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         loop
//         muted
//         playsInline
//         className="absolute top-0 right-0 h-full w-full object-contain md:object-cover md:object-[70%_center] z-10"
//       >
//         <source src={heroVideo} type="video/mp4" />
//       </video>

//       {/* Overlay */}
//       <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/70 to-black/10"></div>
//       <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

//       {/* Content */}
//       <div className="relative z-30 flex items-center h-full px-6 md:px-16">
//         <div className="max-w-2xl">
//           <p className="mb-4 text-red-500 font-semibold tracking-[4px] uppercase text-sm">
//             Portfolio
//           </p>

//           <h1
//             data-aos="fade-up"
//             className="text-white text-4xl md:text-7xl font-bold leading-tight"
//           >
//             Hi, I'm Vishal Kokatnur
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
//               Python Full Stack & Software Developer
//             </span>
//           </h1>

//           <p
//             data-aos="fade-up"
//             data-aos-delay="200"
//             className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed"
//           >
//             MCA Graduate with hands-on experience in Python, Django,
//             Flask, React, SQL, AI/ML, and Full Stack Development.
//             Passionate about building scalable web applications,
//             REST APIs, and AI-powered solutions.
//           </p>

//           <div
//             data-aos="fade-up"
//             data-aos-delay="400"
//             className="flex flex-wrap gap-4 mt-8"
//           >
//             <a
//               href="#projects"
//               className="px-7 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>

//         {/* Play / Pause Button */}
//         <div
//           onClick={toggleVideo}
//           className="absolute right-8 bottom-8 cursor-pointer"
//         >
//           <div className="w-16 h-16 rounded-full bg-red-500/90 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition">
//             {isPlaying ? (
//               <svg
//                 className="w-7 h-7 text-white"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M6 19h4V5H6zm8 0h4V5h-4z" />
//               </svg>
//             ) : (
//               <svg
//                 className="w-7 h-7 text-white ml-1"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M8 5v14l11-7z" />
//               </svg>
//             )}
//           </div>

//           <p className="text-white text-xs mt-2 text-center font-semibold">
//             {isPlaying ? "Pause" : "Play"}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import heroVideo from "../assets/hero video/developer_intro.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#050505] scroll-mt-24"
    >
      {/* Blurred Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-60 z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Main Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 right-0 h-full w-full object-contain md:object-cover md:object-[70%_center] z-10"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/70 to-black/10"></div>
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>

      {/* Content */}
      <div className="relative z-30 flex items-center h-full px-6 md:px-16">
        <div className="max-w-2xl">
          <p className="mb-4 text-red-500 font-semibold tracking-[4px] uppercase text-sm">
            Portfolio
          </p>

          <h1
            data-aos="fade-up"
            className="text-white text-4xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm Vishal Kokatnur
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400">
              Python Full Stack & Software Developer
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-white/90 text-lg md:text-xl leading-relaxed"
          >
            MCA Graduate with hands-on experience in Python, Django,
            Flask, React, SQL, AI/ML and Full Stack Development.
            Passionate about building scalable web applications,
            REST APIs and AI-powered solutions.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap gap-4 mt-8"
          >
            <a
              href="#projects"
              className="px-7 py-3 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 transition"
            >
              View Projects
            </a>

            <a
              href="/resume/VISHAL_KOKATNUR_PYTHON.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              View Resume
            </a>

            <a
              href="/resume/VISHAL_KOKATNUR_PYTHON.pdf"
              download
              className="px-7 py-3 rounded-full border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Play / Pause Button */}
        <div
          onClick={toggleVideo}
          className="absolute right-8 bottom-8 cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-red-500/90 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition">
            {isPlaying ? (
              <svg
                className="w-7 h-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 19h4V5H6zm8 0h4V5h-4z" />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>

          <p className="text-white text-xs mt-2 text-center font-semibold">
            {isPlaying ? "Pause" : "Play"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;