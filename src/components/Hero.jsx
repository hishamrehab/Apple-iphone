import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
    useGSAP(() => {
        gsap.to()
    }, [])

    return (
        <section className='w-full nav-height bg-black relative'>
            <div className='h-5/6 w-full flex-col'>
                <p className='hero-title'>iPhone 15 Pro</p>
            </div>
        </section>
    )
}

export default Hero