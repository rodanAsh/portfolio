import React from 'react'
import { Float, useGLTF } from '@react-three/drei'
import {calculateSizes} from '../constants/index.js'
import { useMediaQuery } from 'react-responsive';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')

  const isSmall = useMediaQuery({maxWidth: 480})
  const sizes = calculateSizes(isSmall)

  return (
    <Float floatIntensity={1}>
      <group {...props} scale={sizes.reactLogoScale} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;