import React, { useRef, useEffect } from 'react'
import Globe from "react-globe.gl";
import { useMediaQuery } from 'react-responsive';


const AboutGlobe = () => {
    const globeRef = useRef()
    const isTablet = useMediaQuery({maxWidth:864})

    useEffect(() => {
      if(isTablet){
        globeRef.current.controls().enableZoom = false;
        globeRef.current.controls().autoRotate = true;
        globeRef.current.controls().autoRotateSpeed = 1;
      }else{
        globeRef.current.controls().enableZoom = true;
        globeRef.current.controls().autoRotate = false;
      }
    },[isTablet])

  return (
    <Globe 
        ref={globeRef}
        height={326}
        width={326}
        backgroundColor="rgba(0,0,0,0)"
        backgroundImageOpacity={0.5}
        showAtmosphere
        showGraticules
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        labelsData={[
          {
            lat: 11.744699,
            lng: 79.768021,
            text: "I'm here!",
            color: "white",
            size: 30,
          },
        ]}
    />
  )
}

export default AboutGlobe