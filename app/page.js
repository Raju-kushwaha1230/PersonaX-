import Image from "next/image";
import Link from 'next/link'




export default function Home() {
  return (
    <>
      <div className="h-64 gap-3  flex flex-col justify-center items-center  bg-[url(https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-no-repeat
bg-cover ">
        <h2 className="text-5xl font-bold ">Persona<span className="text-green-500">&lt;X&gt; </span></h2>
        <p className="font-bold">Connect, Express, Evolve.</p>
        <p>Your Digital Identity, Redefined</p>

        <div>
          <Link href="/login"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Get Started</button> </Link>
            <Link href="/mighty"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Explore a Demo Profile</button> </Link>

        </div>
      </div>
    
      <div className="space-y-10 pb-10 pt-10">
        <h2 className="text-center text-2xl font-bold ">Connect with Us</h2>
        <div className="flex justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <img width={200} src="mentorship.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Empower others by sharing knowledge and expertise.

</p>
              <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Helping</button> </Link>

          </div>
          <div className="flex flex-col justify-center items-center">
            <img width={200} src="rupee.gif" alt="" />
            <p className="font-bold">Fans want to contribute</p>
            <p>Showcase your skills and contribute to the community.

</p>
              <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Contribute Now</button> </Link>

          </div>
          <div className="flex flex-col justify-center items-center">
            <img width={200} src="mentoring.gif" alt="" />
            <p className="font-bold">Fans want to collaborate</p>
            <p>Connect, team up, and build something amazing together.

</p>
                <Link href="/"><button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Collaborate Today</button> </Link>

          </div>
        </div>
      </div>
     
      <div className="pt-4 pb-4">
        <h2></h2>
        <div>
        <section className="mt-16 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Share Your Updates</h2>
        <form   className="flex flex-col items-center space-y-4">
          <textarea
            className="w-full p-3 rounded-lg bg-gray-700 text-white outline-none"
            rows="3"
            placeholder="Suggest features, report bugs, or share feedback..."
            
             }
          />
          <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Submit
          </button>
        
         
          </div>
        )}
      </section>
        </div>

      </div>

    </>
  );
}
