// import React, { useRef } from 'react';
// import { motion, useScroll, useTransform } from 'framer-motion';


// const Contact = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "end start"]
//   });
  
//   // Parallax translation for the big text
//   const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

//   return (
//     <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
//       {/* Huge Background Text */}
//       <motion.div 
//         style={{ y }}
//         className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
//       >
//         <h1 
//           className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
//           style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
//         >
//           Contact
//         </h1>
//       </motion.div>

//       {/* Form Card Overlay */}
//       <div className="relative z-10 w-full flex justify-end items-end">
//         <div 
//           data-aos="fade-up"
//           className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between"
//         >
//           <div className="text-xs font-bold tracking-[0.2em] mb-12 md:mb-20 uppercase opacity-90">
//             Reach Us
//           </div>

//           <form className="flex flex-col gap-12 md:gap-16 w-full">
//             <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
//               {/* Left Column */}
//               <div className="flex-1 flex flex-col gap-10">
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     id="firstName" 
//                     placeholder="First Name" 
//                     className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
//                   />
//                 </div>
//                 <div className="relative">
//                   <input 
//                     type="text" 
//                     id="lastName" 
//                     placeholder="Last Name" 
//                     className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
//                   />
//                 </div>
//                 <div className="relative">
//                   <input 
//                     type="email" 
//                     id="email" 
//                     placeholder="Email" 
//                     className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none"
//                   />
//                 </div>
//               </div>

//               {/* Right Column */}
//               <div className="flex-1 flex flex-col">
//                 <div className="relative h-full flex flex-col">
//                   <textarea 
//                     id="message" 
//                     placeholder="Type your message here" 
//                     className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none"
//                   ></textarea>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom Section */}
//             <div className="flex flex-col md:flex-row gap-12 mt-4">
//               {/* Left text */}
//               <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
//                 <input 
//                   type="checkbox" 
//                   id="permission" 
//                   className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer" 
//                   style={{ accentColor: "white" }}
//                 />
//                 <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
//                   I give permission to contact me at this email address.
//                 </label>
//               </div>

//               {/* Right text & button */}
//               <div className="flex-1 flex flex-col gap-8 text-xs text-white/70 font-medium">
//                 <p className="leading-relaxed max-w-[400px]">
//                   This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a> and <a href="#" className="underline hover:text-white transition-colors">Terms of Service</a> apply.
//                 </p>
//                 <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6">
//                   <p className="max-w-[250px] leading-relaxed">
//                     For information on how to unsubscribe, please review our <a href="#" className="underline hover:text-white transition-colors">privacy policy</a>.
//                   </p>
                  
//                   <button 
//                     type="submit" 
//                     className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group whitespace-nowrap self-start sm:self-auto"
//                   >
//                     Send
//                     <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </form>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const contactInfo = {
  name: "Vishal Kokatnur",
  email: "vishalkokatnur96@gmail.com",
  phone: "+91 7483251136",
  location: "Bangalore, Karnataka",
  github: "https://github.com/Vishalkokatnur",
  linkedin: "https://linkedin.com/in/vishal-kokatnur-4b0a75280",
};

const Contact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex justify-center items-start overflow-hidden pointer-events-none z-0 pt-16"
      >
        <h1
          className="text-[22vw] leading-[0.75] font-black text-white/10 uppercase tracking-tighter select-none scale-y-[1.5]"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Contact Card */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-gradient-to-br from-[#ff2a2a] via-[#d71920] to-[#7a0000] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white"
        >
          <p className="text-xs font-bold tracking-[0.25em] mb-5 uppercase opacity-90">
            Contact Me
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            Let's Build Something Amazing Together
          </h2>

          <p className="text-white/85 max-w-2xl mb-10 leading-relaxed">
            I am open to Python Full Stack Developer, AI/ML Developer, and
            Software Developer opportunities. Feel free to contact me for
            projects, internships, or job opportunities.
          </p>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md">
              <p className="text-white/60 text-sm mb-1">Name</p>
              <h3 className="text-xl font-bold">{contactInfo.name}</h3>
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md">
              <p className="text-white/60 text-sm mb-1">Location</p>
              <h3 className="text-xl font-bold">{contactInfo.location}</h3>
            </div>

            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md hover:bg-white hover:text-[#ff2a2a] transition"
            >
              <p className="text-white/60 text-sm mb-1">Email</p>
              <h3 className="text-lg md:text-xl font-bold break-all">
                {contactInfo.email}
              </h3>
            </a>

            <a
              href={`tel:${contactInfo.phone}`}
              className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md hover:bg-white hover:text-[#ff2a2a] transition"
            >
              <p className="text-white/60 text-sm mb-1">Phone</p>
              <h3 className="text-xl font-bold">{contactInfo.phone}</h3>
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full bg-white text-[#ff2a2a] font-bold hover:bg-black hover:text-white transition text-center"
            >
              GitHub
            </a>

            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition text-center"
            >
              LinkedIn
            </a>

           <a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Portfolio Contact&body=Hi Vishal, I saw your portfolio and would like to connect with you.`}
  target="_blank"
  rel="noreferrer"
  className="px-8 py-3 rounded-full border border-white text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition text-center"
>
  Send Email
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;