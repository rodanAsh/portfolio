import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { workExperiences } from '../constants'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../components/CanvasLoader'

const Experience = () => {
  return (
    <div className='c-space my-20'>
        <div className='w-full text-white-600'>
            <h3 className='head-text'>My Work Experience</h3>
            <div className='work-container'>
                <div className='work-canvas'>
                    <Canvas>
                        <ambientLight intensity={7} />
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1} />
                        <directionalLight position={[10,10,10]} intensity={1} />
                        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                        <Suspense fallback={<CanvasLoader />}>
                            
                        </Suspense>
                    </Canvas>
                </div>
                <div className='work-content'>
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {
                            workExperiences.map(({id,name,pos,duration,icon,title,animation},index) => (
                                <div key={id} className='work-content_container group'>
                                    <div className='flex flex-col h-full justify-start items-center py-2'>
                                        <div className='work-content_logo'>
                                            <img src={icon} alt="logo" className='w-full h-full' />
                                        </div>
                                        <div className='work-content_bar'></div>
                                    </div>

                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white-800'>{name}</p>
                                        <p className='text-sm mb-5'>{pos} -- {duration}</p>
                                        <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience