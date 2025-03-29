// import Image from "next/image";
// import Link from 'next/link'




// export default function Home() {
//   return (
//     <>
//       <div className="h-[80vh] gap-3  flex flex-col justify-center items-center font-mono  bg-[url(https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat
// bg-cover ">
//         <h2 className="text-5xl font-bold ">Persona<span className="text-green-500">&lt;X&gt; </span></h2>
//         <p className="font-bold text-2xl">Your Digital Identity, Simplified!.</p>
//         <p >Create, manage, and share your professional identity effortlessly.</p>

//         <div>
//           <Link href="/login"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button> </Link>
//             <Link href="/mighty"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore a Demo Profile</button> </Link>

//         </div>
//       </div>
    
//       <div className="space-y-10 pb-10 pt-10 p-3  font-mono">
//         <h2 className="text-center text-2xl font-bold ">Connect with Us</h2>
//         <div className="flex justify-around items-center ">
//           <div className="flex flex-col justify-center items-center text-center">
//             <img width={200} src="mentorship.gif" alt="" />
//             <p className="font-bold">Fans want to help</p>
//             <p>Empower others by sharing knowledge and expertise.

// </p>
//               <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Helping</button> </Link>

//           </div>
//           <div className="flex flex-col justify-center items-center text-center">
//             <img width={200} src="rupee.gif" alt="" />
//             <p className="font-bold">Fans want to contribute</p>
//             <p>Showcase your skills and contribute to the community.

// </p>
//               <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contribute Now</button> </Link>

//           </div>
//           <div className="flex flex-col justify-center items-center text-center">
//             <img width={200} src="mentoring.gif" alt="" />
//             <p className="font-bold">Fans want to collaborate</p>
//             <p>Connect, team up, and build something amazing together.

// </p>
//                 <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Collaborate Today</button> </Link>

//           </div>
//         </div>
//       </div>
     
//       <div className="pt-4 pb-4">
        
        
       
//         </div>

   
//     </>
//   );
// }


import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-[80vh] flex flex-col justify-center items-center text-center font-mono 
        bg-[url('https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] 
        bg-no-repeat bg-cover p-4"
      >
        <h2 className="text-5xl font-bold">
          Persona<span className="text-green-500">&lt;X&gt;</span>
        </h2>
        <p className="font-bold text-2xl">Your Digital Identity, Simplified!</p>
        <p className="max-w-xl">Create, manage, and share your professional identity effortlessly.</p>

        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Get Started
            </button>
          </Link>
          <Link href="/mighty">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
              focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
              font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Explore a Demo Profile
            </button>
          </Link>
        </div>
      </div>

      {/* Connect Section */}
      <div className="space-y-10 pb-10 pt-10 px-5 font-mono">
        <h2 className="text-center text-2xl font-bold">Connect with Us</h2>

        <div className="flex flex-wrap justify-center gap-10">
          {/* Fans Want to Help */}
          <div className="flex flex-col justify-center items-center text-center max-w-xs">
            <Image width={200} height={200} src="/mentorship.gif" alt="Mentorship" />
            <p className="font-bold mt-2">Fans want to help</p>
            <p className="text-sm">Empower others by sharing knowledge and expertise.</p>
            <Link href="/">
              <button
                type="button"
                className="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Start Helping
              </button>
            </Link>
          </div>

          {/* Fans Want to Contribute */}
          <div className="flex flex-col justify-center items-center text-center max-w-xs">
            <Image width={200} height={200} src="/rupee.gif" alt="Rupee" />
            <p className="font-bold mt-2">Fans want to contribute</p>
            <p className="text-sm">Showcase your skills and contribute to the community.</p>
            <Link href="/">
              <button
                type="button"
                className="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Contribute Now
              </button>
            </Link>
          </div>

          {/* Fans Want to Collaborate */}
          <div className="flex flex-col justify-center items-center text-center max-w-xs">
            <Image width={200} height={200} src="/mentoring.gif" alt="Mentoring" />
            <p className="font-bold mt-2">Fans want to collaborate</p>
            <p className="text-sm">Connect, team up, and build something amazing together.</p>
            <Link href="/">
              <button
                type="button"
                className="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Collaborate Today
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

