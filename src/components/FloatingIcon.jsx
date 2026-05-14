import React from 'react'
import { Billboard, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

import icon from '../assets/images/sidelineicon.png'

const FloatingIcon = ({ position = [0, 2, 0], label = 'My App' }) => {
  const texture = useLoader(THREE.TextureLoader, icon)

  return (
    <Billboard position={position}>
      <mesh>
        <planeGeometry args={[1.5, 1.5]} />
        <meshBasicMaterial
          map={texture}
          transparent
        />
      </mesh>

      <Text
        position={[0, -1.2, 0]}
        fontSize={0.25}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {label}
      </Text>
    </Billboard>
  )
}

export default FloatingIcon