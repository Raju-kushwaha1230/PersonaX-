// "use client";

// import React, { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
// import { fetchuser } from "@/actions/useractions";

// const EditProfile = ({ currentUser, setCurrentUser }) => {
//   const { data: session, status } = useSession();
//   const [formData, setFormData] = useState({
//     bio: "",
//     location: "",
//     website: "",
//     portfolio: "",
//     skills: "",
//   });

//   useEffect(() => {
//     console.log("Session in useEffect:", session); // 🔍 Debugging

//     if (currentUser) {
//       setFormData({
//         bio: currentUser.bio || "",
//         location: currentUser.location || "",
//         website: currentUser.website || "",
//         portfolio: currentUser.portfolio || "",
//         skills: currentUser.skills?.join(", ") || "",
//       });
//     }
//   }, [currentUser]);

//   if (status === "loading") return <p>Loading...</p>;
//   if (!session) return <p>Please log in to edit your profile.</p>;

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Session data:", session); // 🔍 Debugging
//     if (!session || !session.user || !session.user.username) {
//         alert("Username not found. Please log in.");
//         return;
//       }
//       const username = session.user.username; // Ensure username exists
//       if (!username) {
//         alert("Username not found. Please log in.");
//         return;
//       }
//     const response = await fetch(`/api/update/${username}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         bio: formData.bio,
//         location: formData.location,
//         website: formData.website,
//         portfolio: formData.portfolio,
//         skills: formData.skills.split(",").map((skill) => skill.trim()),
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       setCurrentUser(data.user);
//       alert("Profile updated successfully!");
//     } else {
//       alert("Failed to update profile.");
//     }
//   };

//   return (
//     <div className="w-[60vw] p-6 rounded-lg ">
//       <h2 className="text-2xl font-bold text-slate-600 text-center">Edit Profile</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 p-10">
//       <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={formData.bio} name="bio" id="bio" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="bio" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bio</label>
//           </div>
          
//       <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={formData.location} name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
//           </div>
//       <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={formData.website} name="website" id="website" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="website" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Website</label>
//           </div>
//       <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange} value={formData.portfolio} name="portfolio" id="portfolio" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="portfolio" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Portfolio</label>
//           </div>
//       <div className="relative z-0 w-full mb-5 group">
//             <input type="text" onChange={handleChange}  value={formData.skills} name="skills" id="skills" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
//             <label htmlFor="skills" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">skills</label>
//           </div>
          
       
       
        
//         <button type="submit" className="bg-blue-500 p-2 rounded text-white">
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditProfile;


"use client";

import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

const EditProfile = ({ currentUser, setCurrentUser }) => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    bio: "",
    location: "",
    website: "",
    portfolio: "",
    skills: "",
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        bio: currentUser.bio || "",
        location: currentUser.location || "",
        website: currentUser.website || "",
        portfolio: currentUser.portfolio || "",
        skills: currentUser.skills?.join(", ") || "",
      });
    }
  }, [currentUser]);

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please log in to edit your profile.</p>;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = session?.user?.username;
    if (!username) {
      alert("Username not found. Please log in.");
      return;
    }

    const response = await fetch(`/api/update/${username}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bio: formData.bio,
        location: formData.location,
        website: formData.website,
        portfolio: formData.portfolio,
        skills: formData.skills.split(",").map((skill) => skill.trim()),
      }),
    });

    if (response.ok) {
      const data = await response.json();
      setCurrentUser(data.user);
      alert("Profile updated successfully!");
    } else {
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="w-full max-w-[600px] p-4 sm:p-6 bg-white rounded-lg shadow-md mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-700 text-center">Edit Profile</h2>
      
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-4">
        {["bio", "location", "website", "portfolio", "skills"].map((field) => (
          <div key={field} className="relative z-0 w-full group">
            <input
              type="text"
              onChange={handleChange}
              value={formData[field]}
              name={field}
              id={field}
              className="block py-2.5 px-0 w-full text-base sm:text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={field}
              className="absolute text-sm text-gray-500 transform -translate-y-6 scale-75 top-3 left-0 transition-all peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-blue-600"
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
          </div>
        ))}

        <button type="submit" className="w-full sm:w-auto bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
