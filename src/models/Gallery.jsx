import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import FloatingIcon from "../components/FloatingIcon";

import scene from "../assets/3d/gallery.glb";

import sidelineIcon from "../assets/images/sidelineicon.png";
import daybeatsIcon from "../assets/images/DayBeatsLogo.png";
import vocalsphereIcon from "../assets/images/VocalSphereLogo.png";
import p2pIcon from "../assets/images/p2pIcon.png";
import vcIcon from "../assets/images/vcIcon.png";
import pokeIcon from "../assets/images/pokeIcon.png";
import minesweeperIcon from "../assets/images/minesweeperIcon.png";

export function Gallery({
  setCurrentStage,
  targetRotation,
  setTargetRotation,
  ...props
}) {
  const groupRef = useRef();

  const dragging = useRef(false);
  const previousX = useRef(0);

  const currentRotation = useRef(0);

  const { camera } = useThree();

  const { nodes, materials } = useGLTF(scene);

  const STEP = (2 * Math.PI) / 7;

  // ---------------------------------------------------
  // PROJECT CONFIG
  // ---------------------------------------------------

  const PROJECTS = [
    {
      id: 1,
      name: "P2P File Sharing",
      angle: STEP * 1,
      position: [0, 0.5, -3],
      image: p2pIcon,
    },
    {
      id: 2,
      name: "Vertex Cover (NP-Complete)",
      angle: STEP * 2,
      position: [-3, 0.5, -1],
      image: vcIcon,
    },
    {
      id: 3,
      name: "Sideline",
      angle: STEP * 3,
      position: [-3, 0.5, 2],
      image: sidelineIcon,
    },
    {
      id: 4,
      name: "VocalSphere",
      angle: STEP * 4,
      position: [0, 0.5, 3],
      image: vocalsphereIcon,
    },
    {
      id: 5,
      name: "DayBeats",
      angle: STEP * 5,
      position: [3, 0.5, 2],
      image: daybeatsIcon,
    },
    {
      id: 6,
      name: "PokeTeamer (AI)",
      angle: STEP * 6,
      position: [3, 0.5, -1],
      image: pokeIcon,
    },
    {
      id: 7,
      name: "Minesweeper (C++)",
      angle: STEP * 7,
      position: [0, 0.5, -3],
      image: minesweeperIcon,
    },
  ];

  // ---------------------------------------------------
  // FIND CLOSEST PROJECT
  // ---------------------------------------------------

  const findClosestProject = (rotation) => {
    const normalized =
      ((rotation % (Math.PI * 2)) + Math.PI * 2) %
      (Math.PI * 2);

    let closest = PROJECTS[0];
    let smallestDistance = Infinity;

    PROJECTS.forEach((project) => {
      let distance = Math.abs(normalized - project.angle);

      distance = Math.min(
        distance,
        Math.PI * 2 - distance
      );

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closest = project;
      }
    });

    return closest;
  };

  // ---------------------------------------------------
  // ANIMATION LOOP
  // ---------------------------------------------------

  useFrame(() => {
    const TWO_PI = Math.PI * 2;

    // -----------------------------------------
    // SHORTEST ROTATION DIRECTION
    // -----------------------------------------

    let difference =
      targetRotation - currentRotation.current;

    difference =
      ((difference + Math.PI) % TWO_PI) - Math.PI;

    if (!dragging.current) {
      currentRotation.current += difference * 0.08;
    }

    // -----------------------------------------
    // CAMERA ORBIT
    // -----------------------------------------

    const radius = 2;

    camera.position.x =
      Math.sin(currentRotation.current) * radius;

    camera.position.z =
      Math.cos(currentRotation.current) * radius;

    camera.position.y = 1.8;

    camera.lookAt(0, 1.5, 0);

    // -----------------------------------------
    // ACTIVE PROJECT
    // -----------------------------------------

    const activeProject = findClosestProject(
      currentRotation.current
    );

    setCurrentStage((prev) =>
      prev !== activeProject.id
        ? activeProject.id
        : prev
    );
  });

  // ---------------------------------------------------
  // POINTER EVENTS
  // ---------------------------------------------------

  const handlePointerDown = (e) => {
    dragging.current = true;
    previousX.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    if (!dragging.current) return;

    const delta = e.clientX - previousX.current;

    currentRotation.current += delta * 0.005;

    setTargetRotation(currentRotation.current);

    previousX.current = e.clientX;
  };

  const handlePointerUp = () => {
    dragging.current = false;

    const closestProject = findClosestProject(
      currentRotation.current
    );

    setTargetRotation(closestProject.angle);
  };

  // ---------------------------------------------------
  // COMPONENT
  // ---------------------------------------------------

  return (
    <group
      ref={groupRef}
      {...props}
      dispose={null}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* ------------------------------------------------ */}
      {/* GALLERY MODEL */}
      {/* ------------------------------------------------ */}

      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003__0.geometry}
          material={materials.Cylinder__0}
          position={[0, 46.149, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1327.45, 1327.45, 501.949]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004__0.geometry}
          material={materials.Cylinder__0}
          position={[0, 343.929, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1940.379, 1940.379, 733.716]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005__0.geometry}
          material={materials.Cylinder__0}
          position={[0, 463.774, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2630.109, 2630.108, 786.067]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006__0.geometry}
          material={materials.Cylinder__0}
          position={[0, 417.743, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3366.385, 3366.384, 676.562]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0, -491.111, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1664.058, 1664.057, 181.851]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0, -430.178, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2429.868, 2429.867, 103.57]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0, -365.182, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[3246.547, 3246.547, 103.57]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_Material002_0.geometry}
          material={materials["Material.002"]}
          position={[0, -296.993, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[4105.58, 4105.579, 103.57]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001__0.geometry}
          material={materials.Cylinder__0}
          position={[0, -213.755, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2287.581, 2287.581, 661.655]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder012_Material004_0.geometry}
          material={materials["Material.004"]}
          position={[0, -213.755, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2287.581, 2287.581, 661.655]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013__0.geometry}
          material={materials.Cylinder__0}
          position={[0, -213.755, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[2287.581, 2287.581, 661.655]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder014_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[0, 444.248, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[-2140.546, -2140.546, -41.441]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015__0.geometry}
          material={materials.Cylinder__0}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1327.45, 1327.45, 501.949]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_Material009_0.geometry}
          material={materials["Material.009"]}
          position={[0, 691.037, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[-998.133, -998.133, -73.472]}
        />

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus011__0.geometry}
          material={materials.Cylinder__0}
          position={[0, 929.591, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={-1351.922}
        />

      </group>

      {/* ------------------------------------------------ */}
      {/* FLOATING PROJECT ICONS */}
      {/* ------------------------------------------------ */}

      {PROJECTS.map((project) => (
        project.image && (
          <FloatingIcon
            key={project.id}
            position={project.position}
            label={project.name}
            image={project.image}
          />
        )
      ))}
    </group>
  );
}

useGLTF.preload(scene);

export default Gallery;