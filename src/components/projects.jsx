// // import React from "react";

// // const projects = [
// //   {
// //     title: "Real-Time Iris Recognition System",
// //     tech: "Python, Flask, OpenCV, Deep Learning",
// //     description:
// //       "Developed an AI-based iris recognition system with real-time iris detection, segmentation, and comparison using OpenCV, Flask, and Deep Learning techniques.",
// //   },
// //   {
// //     title: "AWS DevOps Platform",
// //     tech: "React, Node.js, MongoDB, Docker",
// //     description:
// //       "Built a full-stack AWS DevOps training platform with authentication, course management, enquiry modules, admin dashboard, and Docker deployment.",
// //   },
// //   {
// //     title: "Banking Management System",
// //     tech: "HTML, CSS, JavaScript",
// //     description:
// //       "Designed and developed responsive banking interfaces for customer operations, account management, and transaction workflows.",
// //   },
// // ];

// // const Projects = () => {
// //   return (
// //     <section
// //       id="projects"
// //       className="bg-[#0d0d0d] text-white py-24 px-6 md:px-12"
// //     >
// //       <div className="max-w-7xl mx-auto">
// //         {/* Section Heading */}
// //         <div className="mb-16 text-center">
// //           <span className="text-red-500 uppercase tracking-[4px] text-sm font-bold">
// //             My Projects
// //           </span>

// //           <h2 className="text-4xl md:text-6xl font-black mt-4">
// //             Featured Work
// //           </h2>

// //           <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
// //             A collection of projects showcasing my skills in Full Stack
// //             Development, AI/ML, Python, Cloud Technologies, and Modern Web
// //             Applications.
// //           </p>
// //         </div>

// //         {/* Projects Grid */}
// //         <div className="grid md:grid-cols-3 gap-8">
// //           {projects.map((project, index) => (
// //             <div
// //               key={index}
// //               className="bg-[#161616] border border-gray-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-2 transition-all duration-300"
// //             >
// //               <div className="text-red-500 font-bold text-lg mb-3">
// //                 0{index + 1}
// //               </div>

// //               <h3 className="text-2xl font-bold mb-4">
// //                 {project.title}
// //               </h3>

// //               <div className="mb-4">
// //                 <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 text-red-400 text-sm">
// //                   {project.tech}
// //                 </span>
// //               </div>

// //               <p className="text-gray-400 leading-relaxed">
// //                 {project.description}
// //               </p>

// //               <button className="mt-6 px-5 py-2 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition">
// //                 View Project
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Projects;

// import React from "react";

// const projects = [
//   {
//     number: "01",
//     title: "Real-Time Iris Recognition System",
//     tech: "Python, Flask, OpenCV, Deep Learning",
//     description:
//       "Developed an AI-based iris recognition system with real-time iris detection, segmentation, and comparison using OpenCV, Flask, and Deep Learning techniques.",
//     github: "https://github.com/VishalKokatnur",
//   },

//   {
//     number: "02",
//     title: "AWS DevOps Platform",
//     tech: "React, Node.js, MongoDB, Docker",
//     description:
//       "Built a full-stack AWS DevOps training platform with authentication, course management, enquiry modules, admin dashboard, and Docker deployment.",
//     github: "https://github.com/VishalKokatnur",
//   },

//   {
//     number: "03",
//     title: "Banking Management System",
//     tech: "HTML, CSS, JavaScript",
//     description:
//       "Designed and developed responsive banking interfaces for customer operations, account management, and transaction workflows.",
//     github: "https://github.com/VishalKokatnur",
//   },
// ];

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12"
//     >
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <p className="text-red-500 uppercase tracking-[5px] font-bold text-sm">
//             My Projects
//           </p>

//           <h2 className="text-4xl md:text-6xl font-black mt-4">
//             Featured Work
//           </h2>

//           <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
//             A collection of projects showcasing my skills in Full Stack
//             Development, AI/ML, Python, Cloud Technologies, and Modern Web
//             Applications.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-3 transition-all duration-300"
//             >
//               {/* Number */}
//               <div className="text-red-500 font-bold text-3xl mb-6">
//                 {project.number}
//               </div>

//               {/* Title */}
//               <h3 className="text-3xl font-bold mb-6 leading-tight">
//                 {project.title}
//               </h3>

//               {/* Tech Stack */}
//               <div className="mb-6">
//                 <span className="inline-block bg-red-500/20 text-red-400 px-5 py-3 rounded-full text-sm">
//                   {project.tech}
//                 </span>
//               </div>

//               {/* Description */}
//               <p className="text-gray-400 leading-8 text-lg">
//                 {project.description}
//               </p>

//               {/* GitHub Button */}
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-8 px-6 py-3 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
//               >
//                 View Project →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
import React from "react";

const projects = [
  {
    number: "01",
    title: "Real-Time Iris Recognition System",
    tech: "Python, Flask, OpenCV, Deep Learning",
    description:
      "Developed an AI-based iris recognition system with real-time iris detection, segmentation, and comparison using OpenCV, Flask, and Deep Learning techniques.",
    github:
      "https://github.com/VishalKokatnur/iris-multispectral-hybrid-model",
  },

  {
    number: "02",
    title: "AWS DevOps Platform",
    tech: "React, Node.js, MongoDB, Docker",
    description:
      "Built a full-stack AWS DevOps training platform with authentication, course management, enquiry modules, admin dashboard, analytics, and Docker deployment.",
    github:
      "https://github.com/VishalKokatnur/aws-devops-platform",
  },

  {
    number: "03",
    title: "Banking Management System",
    tech: "HTML, CSS, JavaScript",
    description:
      "Designed and developed a responsive banking management system with customer operations, account management, and transaction workflow features.",
    github:
      "https://github.com/VishalKokatnur/Banking-Management-System",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-red-500 uppercase tracking-[5px] font-bold text-sm">
            My Projects
          </p>

          <h2 className="text-4xl md:text-6xl font-black mt-4">
            Featured Work
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            A collection of projects showcasing my skills in Python,
            Full Stack Development, AI/ML, Cloud Technologies,
            and Modern Web Applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-[#111111] border border-gray-800 rounded-3xl p-8 hover:border-red-500 hover:-translate-y-3 transition-all duration-300"
            >
              {/* Project Number */}
              <div className="text-red-500 font-bold text-2xl mb-5">
                {project.number}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-5 leading-tight">
                {project.title}
              </h3>

              {/* Tech Stack */}
              <div className="mb-6">
                <span className="inline-block bg-red-500/20 text-red-400 px-5 py-3 rounded-full text-sm">
                  {project.tech}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 leading-8 text-lg">
                {project.description}
              </p>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                GitHub Repository
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;