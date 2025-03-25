import React from 'react'
import Image from 'next/image'
const About = () => {
    return (
        <div className='min-h-[85vh]  container mx-auto flex flex-col items-center gap-10   '>
            <div className='text-center'>
                <h1 className='text-2xl font-bold text-green-800 my-3'>About Page</h1>
                <p className='font-mono'>Welcome to the About Page. Here you can find information about our application and its purpose.</p>
                <p className='font-mono'>PersonaX is a cutting-edge platform designed to streamline digital identity management. Whether you're a developer, freelancer, or professional, PersonaX helps you create, manage, and showcase your online persona with ease.</p>

            </div>
            <div className='flex flex-col items-center gap-5'>
                <Image src="/profile-pic.png" alt="" height="200" width="200" />
                <p className='text-center font-mono mt-4 w-[70%]'>
                    <p>Hi, I'm <span className='text-green-500'>&lt;/Raju Kushwaha&gt;</span>,</p> a passionate developer with a love for creating efficient and user-friendly web applications.
                    <p>I specialize in modern web technologies and enjoy solving complex problems through code.</p>
                </p>
            </div>
        </div>
    )
}

export default About
