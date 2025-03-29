// import React, { useEffect, useState } from 'react'

// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from "next/navigation";
// import { updatProfile, fetchuser } from '@/actions/useractions';
// import { ToastContainer, toast } from 'react-toastify';
// import { Bounce } from 'react-toastify';


// function Dashboards() {
//   const { data: session, update } = useSession()
//   const [form, setform] = useState({})

//   const router = useRouter()
//   useEffect(() => {
//     getData()
//     if (!session) {

//       router.push('/login')
//     }
//   }, [router, session])




//   const handleChange = (e) => {
//  setform({ ...form, [e.target.name]: e.target.value });
//   }




//   const getData = async () => {
//     let u = await fetchuser(session.user.name)
     
//       console.log("Session user:", session.user);
//   console.log("Profile image URL:", session.user.image);
//   setform({ ...u, profilePic: u.profilePic ? u.profilePic : session.user.image || "" });
//   }




//   const handleSubmit = async (e) => {

//     let a = await updatProfile(e, session.user.name)
//     toast('🦄 Profile Updated!', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: false,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       transition: Bounce,
//       });
//   }


//   return (
//     <><ToastContainer
//       position="top-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick={false}
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="light"
//       transition={Bounce}
//     />
//       <div>

//         <form className="max-w-md mx-auto text-black " action={handleSubmit}>
//           <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={form.name ? form.name : ""} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input type="email" onChange={handleChange} value={form.email ? form.email : ""} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={form.username ? form.username : ""} name="username" id="username" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="username" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
//           </div>
//           <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={form.profilePic ? form.profilePic : ""} name="profilePic" id="profilePic" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="profilePic" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Profile Pic</label>
//           </div>
//           <div className="grid md:grid-cols-2 md:gap-6">
//             <div className="relative z-0 w-full mb-5 group">
//               <input type="text" onChange={handleChange} value={form.CoverPic ? form.CoverPic : ""} name="CoverPic" id="CoverPic" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//               <label htmlFor="CoverPic" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cover Pic</label>
//             </div>

//           </div>
//           <div className="grid md:grid-cols-2 md:gap-6">

//             <div className="relative z-0 w-full mb-5 group">
//               <input type="text" onChange={handleChange} value={form.company ? form.company : ''} name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//               <label htmlFor="company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
//             </div>
//           </div>
//           <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
//         </form>

//       </div>
//     </>
//   )
// }

// export default Dashboards


import React, { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { updatProfile, fetchuser } from '@/actions/useractions';
import { ToastContainer, toast } from 'react-toastify';
import { Bounce } from 'react-toastify';

function Dashboards() {
  const { data: session } = useSession();
  const [form, setForm] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push('/login');
    } else {
      getData();
    }
  }, [session]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    let user = await fetchuser(session?.user?.name);
    setForm({ ...user, profilePic: user.profilePic || session?.user?.image || "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatProfile(form, session.user.name);
    toast.success('🎉 Profile Updated!', { position: "top-right", autoClose: 5000, transition: Bounce });
  };

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen flex items-center justify-center p-4">
        <form 
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg" 
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Edit Profile</h2>

          {/** Name Field **/}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={form.name || ""} 
              onChange={handleChange} 
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/** Email Field **/}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={form.email || ""} 
              onChange={handleChange} 
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/** Username Field **/}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input 
              type="text" 
              id="username"
              name="username"
              value={form.username || ""} 
              onChange={handleChange} 
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/** Profile Pic URL **/}
          <div className="mb-4">
            <label htmlFor="profilePic" className="block text-gray-700">Profile Picture URL</label>
            <input 
              type="text" 
              id="profilePic"
              name="profilePic"
              value={form.profilePic || ""} 
              onChange={handleChange} 
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/** Cover Pic URL **/}
          <div className="mb-4">
            <label htmlFor="CoverPic" className="block text-gray-700">Cover Picture URL</label>
            <input 
              type="text" 
              id="CoverPic"
              name="CoverPic"
              value={form.CoverPic || ""} 
              onChange={handleChange} 
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/** Company Field **/}
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700">Company</label>
            <input 
              type="text" 
              id="company"
              name="company"
              value={form.company || ""} 
              onChange={handleChange} 
              className="mt-1 w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/** Submit Button **/}
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Update Profile
          </button>
        </form>
      </div>
    </>
  );
}

export default Dashboards;
