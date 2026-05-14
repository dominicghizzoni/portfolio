import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Loader from "../components/Loader";
import Gallery from "../models/Gallery";
import Sky from "../models/Sky";
import HomeInfo from "../components/HomeInfo";
import me from "../assets/images/pfp.JPG";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);

  const adjustGalleryForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, 0, 0];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [galleryScale, galleryPosition, galleryRotation] =
    adjustGalleryForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <>
      <section className="w-full h-[75vh] flex items-center justify-center bg-black text-white px-6">
        <div className="flex flex-col items-center text-center max-w-2xl">

          {/* Profile Image */}
          <img
            src={me}
            alt="Dominic"
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-2xl mb-6"
          />

          {/* Name */}
          <h1 className="text-5xl font-bold mb-3">
            Dominic Ghizzoni
          </h1>

          {/* Info */}
          <p className="text-xl text-gray-300 mb-6">
            Current MS Computer Science Student at the University of Florida.
          </p>

          {/* Links */}
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
            Below is a 3D gallery showcasing some of my projects. For a simpler overview, check out the Projects page.
          </p>

        </div>
      </section>

    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000, position: [0, 1.6, 0] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#b97a20"
            intensity={1}
          />

          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            rotateSpeed={0.4}
          />

          <Sky />
          <Gallery
            scale={galleryScale}
            position={galleryPosition}
            rotation={galleryRotation}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
    </>
  );
};

export default Home;