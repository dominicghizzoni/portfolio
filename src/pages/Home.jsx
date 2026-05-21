import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Loader from "../components/Loader";
import Gallery from "../models/Gallery";
import Sky from "../models/Sky";
import me from "../assets/images/pfp.JPG";

const Home = () => {
  const STEP = (2 * Math.PI) / 7;

  const [currentProject, setCurrentProject] = useState(1);
  const [targetRotation, setTargetRotation] = useState(
    STEP * 1
  );

  // ---------------------------------------------------
  // PROJECT DATA
  // ---------------------------------------------------

  const projectData = {
    1: {
      title: "P2P File Sharing System",
      category: "Systems",
      description:
        "Distributed peer-to-peer file sharing system using TCP sockets and chunk-based transfer.",
      stack: "Python • TCP Sockets • Networking",
      github: "",
      angle: STEP * 1,
    },

    2: {
      title: "Vertex Cover (NP-Complete)",
      category: "Algorithms",
      description:
        "Brute-force solver and polynomial-time certifier for NP-complete Vertex Cover problem.",
      stack:
        "C++ • Graph Theory • Complexity Analysis",
      github: "",
      angle: STEP * 2,
    },

    3: {
      title: "Sideline",
      category: "Full-Stack Systems",
      description:
        "Agile-built sports management platform with authentication, AWS S3 media storage, and role-based access control.",
      stack:
        "React • Node.js • MongoDB • AWS S3 • JWT",
      github:
        "https://github.com/dominicghizzoni",
      angle: STEP * 3,
    },

    4: {
      title: "VocalSphere",
      category: "Full-Stack",
      description:
        "Social audio platform with structured backend, media uploads, and feed system architecture.",
      stack: "React • Node.js • MongoDB",
      github: "",
      angle: STEP * 4,
    },

    5: {
      title: "DayBeats",
      category: "API / Frontend Systems",
      description:
        "Spotify-integrated music personalization platform using OAuth and real-time recommendation flow.",
      stack:
        "React • Spotify API • Framer Motion",
      github:
        "https://github.com/dominicghizzoni/daybeats",
      angle: STEP * 5,
    },

    6: {
      title: "PokeTeamer",
      category: "AI Systems",
      description:
        "LLM-powered system mapping personality inputs into structured Pokémon team generation.",
      stack:
        "React • OpenAI API • Node.js",
      github: "",
      angle: STEP * 6,
    },

    7: {
      title: "Minesweeper (C++)",
      category: "CS Fundamentals",
      description:
        "Grid-based Minesweeper clone implementing recursive flood-fill and game state logic.",
      stack: "C++ • Data Structures",
      github: "",
      angle: STEP * 7,
    },
  };

  const projectIds = [1, 2, 3, 4, 5, 6, 7];

  // ---------------------------------------------------
  // PROJECT NAVIGATION
  // ---------------------------------------------------

  const nextProject = () => {
    setCurrentProject((prev) => {
      const currentIndex = projectIds.indexOf(prev);

      const nextId =
        projectIds[
          (currentIndex + 1) % projectIds.length
        ];

      setTargetRotation((prevRotation) => {
        return prevRotation + STEP;
      });

      return nextId;
    });
  };

  const previousProject = () => {
    setCurrentProject((prev) => {
      const currentIndex = projectIds.indexOf(prev);

      const previousId =
        projectIds[
          (currentIndex -
            1 +
            projectIds.length) %
            projectIds.length
        ];

      setTargetRotation((prevRotation) => {
        return prevRotation - STEP;
      });

      return previousId;
    });
  };

  // ---------------------------------------------------
  // RESPONSIVE SETTINGS
  // ---------------------------------------------------

  const adjustGalleryForScreenSize = () => {
    let screenScale = [1, 1, 1];
    let screenPosition = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    }

    return [screenScale, screenPosition];
  };

  const [galleryScale, galleryPosition] =
    adjustGalleryForScreenSize();

  // ---------------------------------------------------
  // COMPONENT
  // ---------------------------------------------------

  return (
    <>
      {/* HERO SECTION */}

      <section className="w-full min-h-[75vh] flex items-center justify-center bg-black text-white px-6">
        <div className="flex flex-col items-center text-center max-w-2xl">
          <img
            src={me}
            alt="Dominic"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl mb-6"
          />

          <h1 className="text-5xl font-bold mb-3">
            Dominic Ghizzoni
          </h1>

          <p className="text-xl text-gray-300 mb-6">
            Computer Science M.S. Student focused
            on distributed systems, scalable
            full-stack applications, and applied
            machine learning systems.
          </p>

          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/dominicghizzoni"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/dominicghizzoni"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              GitHub
            </a>
          </div>

          <p className="text-xl text-gray-300 mt-20">
            Below is a 3D gallery showcasing some
            of my projects. Drag to look around
            the gallery or use the arrows.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}

      <section className="w-full h-screen relative bg-black overflow-hidden">
        {/* LEFT PANEL */}

        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="w-80 h-100 bg-black/55 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white shadow-2xl flex flex-col">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
              Selected Project
            </p>

            <p className="text-xs uppercase tracking-widest text-blue-400 mb-2">
              {
                projectData[currentProject]
                  ?.category
              }
            </p>

            <h2 className="text-3xl font-bold mb-4">
              {
                projectData[currentProject]
                  ?.title
              }
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              {
                projectData[currentProject]
                  ?.description
              }
            </p>

            <div className="mt-auto">
              <p className="text-sm text-gray-400 mb-2">
                Tech Stack
              </p>

              <p className="text-white">
                {
                  projectData[currentProject]
                    ?.stack
                }
              </p>
            </div>

            <a
              href={
                projectData[currentProject]
                  ?.github
              }
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2 border border-white rounded-xl hover:bg-white hover:text-black transition"
            >
              View Project
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
          <div className="w-72 bg-black/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-white shadow-2xl">
            <h3 className="text-xl font-semibold mb-4">
              Gallery Controls
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                • Drag horizontally to look
                around
              </li>
              <li>
                • Camera snaps automatically
              </li>
              <li>
                • Click arrows to browse
              </li>
              <li>
                • Center project becomes active
              </li>
            </ul>
          </div>
        </div>

        {/* CANVAS */}

        <Canvas
          className="w-full h-full"
          camera={{
            near: 0.1,
            far: 1000,
            position: [0, 1.6, 0],
            fov: 75,
          }}
        >
          <Suspense fallback={<Loader />}>
            <ambientLight intensity={0.6} />

            <directionalLight
              position={[5, 5, 5]}
              intensity={2}
            />

            <hemisphereLight
              skyColor="#b1e1ff"
              groundColor="#000000"
              intensity={1}
            />

            <Sky />

            <Gallery
              scale={galleryScale}
              position={galleryPosition}
              targetRotation={targetRotation}
              setTargetRotation={
                setTargetRotation
              }
              setCurrentStage={
                setCurrentProject
              }
            />
          </Suspense>
        </Canvas>

        {/* FLOATING NAVIGATION */}

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hidden lg:flex items-center gap-8">
          <button
            onClick={previousProject}
            className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-gray-300 text-sm tracking-widest uppercase shadow-2xl">
            {currentProject} /{" "}
            {projectIds.length}
          </div>

          <button
            onClick={nextProject}
            className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 shadow-2xl"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* MOBILE PANEL */}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 lg:hidden w-[90%]">
          <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-5 text-white shadow-2xl">
            <h2 className="text-2xl font-bold mb-2">
              {
                projectData[currentProject]
                  ?.title
              }
            </h2>

            <p className="text-gray-300 text-sm mb-5">
              {
                projectData[currentProject]
                  ?.description
              }
            </p>

            <div className="flex items-center justify-between">
              <button
                onClick={previousProject}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
              >
                <ChevronLeft size={22} />
              </button>

              <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/10 text-gray-300 text-sm tracking-widest uppercase shadow-2xl">
                {currentProject} /{" "}
                {projectIds.length}
              </div>

              <button
                onClick={nextProject}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-white/20 hover:bg-white hover:text-black transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;