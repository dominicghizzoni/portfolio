import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

const Sky = () => {
  const sky = useGLTF(skyScene);
  const skyRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    if (!skyRef.current) return;

    skyRef.current.rotation.y += (camera.rotation.y - skyRef.current.rotation.y) * 0.05;
  });

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
};

export default Sky;