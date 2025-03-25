import Image from "next/image";






export default function Home() {
  return (
    <>
      <div className="h-64 gap-3  flex flex-col justify-center items-center  ">
        <h2 className="text-5xl font-bold ">Persona<span className="text-green-500">&lt;X&gt; </span></h2>
        <p className="font-bold">Connect, Express, Evolve.</p>
        <p>Your Digital Identity, Redefined</p>

        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Learn More</button>

        </div>
      </div>
      <div className="bg-slate-500 h-1 opacity-50">

      </div>
      <div className="space-y-10 pb-10">
        <h2 className="text-center text-2xl font-bold">Connect with Us</h2>
        <div className="flex justify-around items-center">
          <div className="flex flex-col justify-center items-center">
            <img width={200} src="mentorship.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available to donate</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img width={200} src="rupee.gif" alt="" />
            <p className="font-bold">Fans want to contribute</p>
            <p>Your fans are willing to contribute financilaly</p>

          </div>
          <div className="flex flex-col justify-center items-center">
            <img width={200} src="mentoring.gif" alt="" />
            <p className="font-bold">Fans want to collaborate</p>
            <p>Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-500 h-1 opacity-50">

      </div>
      <div className="pt-4 pb-4">
        <h2></h2>
        <div>
        
        </div>

      </div>

    </>
  );
}
