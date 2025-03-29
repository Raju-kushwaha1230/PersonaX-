// "use client"

// import React, { useEffect, useState } from 'react'
// import { fetchuser } from '@/actions/useractions'
// import connectDB from '@/db/connectDb'
// import PostList from '@/components/PostList'
// import { notFound } from 'next/navigation'
// import Link from 'next/link'

// const Username = ({ params }) => {
//   const resolvedParams = React.use(params);

//   const [currentUser, setcurrentUser] = useState({})
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     getData()


//   }, [])

//   const getData = async () => {
//     let u = await fetchuser(resolvedParams?.username)
//     console.log("Fetched User Data:", u);
//     setcurrentUser(u)


//   }


//   return (
//     <>
//       <div className='bg-slate-900 min-h-screen text-white '>

//         <div>
//           <img className='w-[100%] h-[50vh] object-cover relative' src={currentUser.CoverPic} alt="cover" />
//           <div className="    border-2 border-black absolute left-[44%] bottom-1/3  rounded-2xl">
//             <img width={150} className='rounded-xl' src={currentUser.profilePic} alt="profile" />

//           </div>
//         </div>

//         <div className="intro  flex  flex-col justify-center items-center  mt-12 gap-1">
//           <h2 className='text-3xl font-bold text-slate-300 '>@{resolvedParams?.username}</h2>
//           <p className='text-xl font-mono'>{currentUser.bio || "This user hasn't added a bio yet."}</p>
//           <p className='text-gray-400'>1,386 members 	&amp;  210 posts

//           </p>
//           <div className='w-full flex justify-center items-center gap-3  '>
//            <Link href="/upload"> <button className='bg-white w-20   mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Post</button></Link>
//            <Link href="/edit"> <button className='bg-white w-30   mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >Edit Profile</button></Link>


//           </div>

//           <button type="button" className="bg-white w-60   p-2  t-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">Join for free</button>

//           <lord-icon
//             className="bg-white rounded-xl mt-2   text-black font-bold"
//             src="https://cdn.lordicon.com/japmxdiq.json"
//             trigger="hover"
//             stroke="bold"
//             style={{ "width": "40px", "height": "44px" }}>
//           </lord-icon>
//         </div>
//         <div className='container mx-auto flex justify-around items-center w-full mt-4 gap-2 pb-20 '>
//           <div className="support bg-slate-700 w-1/2  pl-4 min-h-96  p-4 rounded-xl text-white ">
//             {/* <h2 className='text-2xl font-bold pb-3'>Supporters</h2> */}
//             <h2 className='text-2xl font-bold pb-3'>About {currentUser.name}</h2>
//             <p className='text-gray-400'>{currentUser.bio || "This user hasn't added a bio yet."}</p>
//             <ul  className="portfolio-item w-full bg-slate-800 p-4 rounded-lg">
//               <li><strong>Location:</strong> {currentUser.location || "Unknown"}</li>
//               <li><strong>Joined:</strong> {new Date(currentUser.joinedDate).toLocaleDateString() || "N/A"}</li>
//               <li><strong>Website:</strong> {currentUser.website ? <a href={currentUser.website} target="_blank" rel="noopener noreferrer" className="text-blue-400">{currentUser.website}</a> : "Not provided"}</li>
//             </ul>
            
//           </div>
//           <div className="payment w-1/2 bg-slate-800 min-h-80  flex flex-col items-center gap-2 ">
//             {/* <h2 className='font-bold text-2xl'>Make a payment</h2> */}
//             {/* <input className='p-2 w-[68%] rounded-xl text-gray-300 font-medium  outline-none  bg-slate-700' type="text " placeholder='Enter name' />
//             <div className='w-full flex justify-center items-center gap-2 '>
//               <input className='p-2 w-1/3 rounded-xl text-gray-300 font-medium  outline-none  bg-slate-700' type="text" placeholder='Enter message' />
//               <input className='p-2 w-1/3 rounded-xl text-gray-300 font-medium outline-none  bg-slate-700' type="num" placeholder='Amount' />
//             </div>
//             <button type="button" className="w-[68%] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

//             <div className='w-full  flex justify-center items-center  gap-3  '>
//               <button className='bg-white w-20   mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >$10</button>
//               <button className='bg-white w-20   p-2  mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >$20</button>
//               <button className='bg-white w-20    p-2    mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2' >$30</button>
//             </div> */}
//             <div className="developer-showcase w-full p-4 bg-slate-700 rounded-xl text-white">
//               <h2 className="text-2xl font-bold mb-4">Freelancer & Developer Showcase</h2>
//               <div className="flex flex-col items-center gap-4">
//                 <div className="portfolio-item w-full bg-slate-800 p-4 rounded-lg">
//                   <h3 className="text-xl font-semibold">Portfolio</h3>
//                   <p className="text-gray-400">Check out my latest projects and contributions.</p>
//                   <a
//                     href={currentUser.portfolio || "#"}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-400 hover:underline"
//                   >
//                     {currentUser.portfolio ? "View Portfolio" : "No portfolio available"}
//                   </a>
//                 </div>
//                 <div className="skills-item w-full bg-slate-800 p-4 rounded-lg">
//                   <h3 className="text-xl font-semibold">Skills</h3>
//                   <ul className="list-disc list-inside text-gray-400">
//                     {currentUser.skills && currentUser.skills.length > 0 ? (
//                       currentUser.skills.map((skill, index) => <li key={index}>{skill}</li>)
//                     ) : (
//                       <li>No skills added yet.</li>
//                     )}
//                   </ul>
//                 </div>
//                 <div className="contact-item w-full bg-slate-800 p-4 rounded-lg">
//                   <h3 className="text-xl font-semibold">Contact</h3>
//                   <p className="text-gray-400">Get in touch for collaborations or projects.</p>
//                   <a
//                     href={`mailto:${currentUser.email || "#"}`}
//                     className="text-blue-400 hover:underline"
//                   >
//                     {currentUser.email || "No contact email provided"}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className=''>
//           <PostList />
//         </div>
//       </div >

//     </>
//   )
// }

// export default Username




"use client"

import React, { useEffect, useState } from 'react'
import { fetchuser } from '@/actions/useractions'
import connectDB from '@/db/connectDb'
import PostList from '@/components/PostList'
import { notFound } from 'next/navigation'
import Link from 'next/link'

const Username = ({ params }) => {
  const resolvedParams = React.use(params);

  const [currentUser, setcurrentUser] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let u = await fetchuser(resolvedParams?.username)
    console.log("Fetched User Data:", u);
    setcurrentUser(u)
  }

  return (
    <div className='bg-slate-900 min-h-screen text-white'>
      {/* Profile Header */}
      <div className="relative">
        <img className='w-full h-[50vh] object-cover' src={currentUser.CoverPic} alt="cover" />
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 border-2 border-black rounded-full">
          <img width={120} className='rounded-full' src={currentUser.profilePic} alt="profile" />
        </div>
      </div>

      {/* User Info */}
      <div className="intro flex flex-col justify-center items-center mt-20 text-center px-4">
        <h2 className='text-2xl md:text-3xl font-bold text-slate-300'>@{resolvedParams?.username}</h2>
        <p className='text-lg md:text-xl font-mono'>{currentUser.bio || "This user hasn't added a bio yet."}</p>
        <p className='text-gray-400 text-sm md:text-md'>1,386 members & 210 posts</p>

        {/* Buttons */}
        <div className='w-full flex flex-col md:flex-row justify-center items-center gap-3 mt-4'>
          <Link href="/upload">
            <button className='w-full md:w-24 text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg px-5 py-2.5 text-center'>
              Post
            </button>
          </Link>
          <Link href="/edit">
            <button className='w-full md:w-32 text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg px-5 py-2.5 text-center'>
              Edit Profile
            </button>
          </Link>
        </div>

        <button className="w-60 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-lg px-5 py-2.5 mt-4">
          Join for free
        </button>
      </div>

      {/* User Details Section */}
      <div className='container mx-auto flex flex-col md:flex-row justify-around items-start w-full mt-8 px-4 gap-4'>
        {/* About Section */}
        <div className="support bg-slate-700 w-full md:w-1/2 p-4 rounded-xl">
          <h2 className='text-xl font-bold pb-3'>About {currentUser.name}</h2>
          <p className='text-gray-400'>{currentUser.bio || "This user hasn't added a bio yet."}</p>
          <ul className="portfolio-item bg-slate-800 p-4 rounded-lg mt-4">
            <li><strong>Location:</strong> {currentUser.location || "Unknown"}</li>
            <li><strong>Joined:</strong> {currentUser.joinedDate ? new Date(currentUser.joinedDate).toLocaleDateString() : "N/A"}</li>
            <li><strong>Website:</strong> {currentUser.website ? <a href={currentUser.website} target="_blank" rel="noopener noreferrer" className="text-blue-400">{currentUser.website}</a> : "Not provided"}</li>
          </ul>
        </div>

        {/* Freelancer & Developer Showcase */}
        <div className="developer-showcase bg-slate-800 w-full md:w-1/2 p-4 rounded-xl">
          <h2 className="text-xl font-bold mb-4">Freelancer & Developer Showcase</h2>
          <div className="flex flex-col gap-4">
            {/* Portfolio */}
            <div className="portfolio-item bg-slate-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Portfolio</h3>
              <p className="text-gray-400">Check out my latest projects and contributions.</p>
              <a href={currentUser.portfolio || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                {currentUser.portfolio ? "View Portfolio" : "No portfolio available"}
              </a>
            </div>

            {/* Skills */}
            <div className="skills-item bg-slate-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Skills</h3>
              <ul className="list-disc list-inside text-gray-400">
                {currentUser.skills && currentUser.skills.length > 0 ? (
                  currentUser.skills.map((skill, index) => <li key={index}>{skill}</li>)
                ) : (
                  <li>No skills added yet.</li>
                )}
              </ul>
            </div>

            {/* Contact */}
            <div className="contact-item bg-slate-700 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Contact</h3>
              <p className="text-gray-400">Get in touch for collaborations or projects.</p>
              <a href={`mailto:${currentUser.email || "#"}`} className="text-blue-400 hover:underline">
                {currentUser.email || "No contact email provided"}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Post List */}
      <div className='mt-6 px-4'>
        <PostList />
      </div>
    </div>
  )
}

export default Username

