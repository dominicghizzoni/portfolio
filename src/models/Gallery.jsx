import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import FloatingIcon from '../components/FloatingIcon'

import scene from "../assets/3d/gallery.glb";

export function Gallery({
  setCurrentStage,
  ...props
}) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(scene);

  // -----------------------------
  // STAGE DETECTION (camera-based illusion preserved)
  // -----------------------------
  useFrame(({ camera }) => {
    if (!groupRef.current) return;

    // We fake "rotation-based stages" using camera angle
    const target = groupRef.current.rotation.y;

    const normalized =
      ((target % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    switch (true) {
      case normalized >= 5.45 && normalized <= 5.85:
        setCurrentStage(4);
        break;
      case normalized >= 0.85 && normalized <= 1.3:
        setCurrentStage(3);
        break;
      case normalized >= 2.4 && normalized <= 2.6:
        setCurrentStage(2);
        break;
      case normalized >= 4.25 && normalized <= 4.75:
        setCurrentStage(1);
        break;
      default:
        setCurrentStage(null);
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
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

        <FloatingIcon
          position={[5, 0.5, 10]}
          label="Sideline"
        />
    </group>
  );
}

useGLTF.preload(scene);

export default Gallery;