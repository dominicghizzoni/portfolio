import React from 'react'
import { Billboard, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingIcon = ({
  position = [0, 2, 0],
  image
}) => {

  const texture = useLoader(
    THREE.TextureLoader,
    image
  )

  return (
    <Billboard position={position}>

      {/* ICON */}

      <mesh>
        <planeGeometry args={[1.5, 1.5]} />

        <meshBasicMaterial
          map={texture}
          transparent
        />
      </mesh>



    </Billboard>
  )
}

export default FloatingIcon