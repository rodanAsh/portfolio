import React,{ useRef,useState,useEffect } from "react"
import { Float } from "@react-three/drei"
import gsap from 'gsap'

const Geometry = ({r, position, geometry, materials, soundEffects}) => {
    const meshRef = useRef()
    const [visible,setVisible] = useState(false)

    const startingMaterial = getRandomMaterial()

    function getRandomMaterial(){
        return gsap.utils.random(materials)
    }

    function handleClick(e){
        const mesh = e.object;

        gsap.utils.random(soundEffects).play()

        gsap.to(mesh.rotation,{
            x:`+=${gsap.utils.random(0,2)}`,
            y:`+=${gsap.utils.random(0,2)}`,
            z:`+=${gsap.utils.random(0,2)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
        });

        mesh.material = getRandomMaterial()
    }

    const handlePointerOver = () => {
        document.body.style.cursor = "pointer"
    }

    const handlePointerOut = () => {
        document.body.style.cursor = "default"
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            setVisible(true)
            gsap.from(meshRef.current.scale,{
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: "elastic.out(1,0.3)",
                delay: 0.3,
            })
        })

        return () => ctx.revert();  //cleanup
    },[])

    return (
        <group position={position} ref={meshRef}>
            <Float speed={5 * r} rotationIntensity={6 * r} floatIntensity={5 * r}>
                <mesh
                    geometry={geometry}
                    onClick={handleClick}
                    onPointerOver={handlePointerOver}
                    onPointerOut={handlePointerOut}
                    material={startingMaterial}
                />
            </Float>
        </group>
    )
}

export default React.memo(Geometry)