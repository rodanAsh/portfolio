import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {calculateSizes} from '../constants/index.js'
import { useMediaQuery } from 'react-responsive';

const Target = (props) => {
  const isSmall = useMediaQuery({maxWidth: 480})

  const sizes = calculateSizes(isSmall)

  const targetRef = useRef()
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    })
  })
  return (
    <mesh {...props} ref={targetRef} scale={sizes.targetScale} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Target