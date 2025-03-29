"use client"
import React,{useState,useEffect} from "react";
import EditProfile from "@/components/EditProfile";
import { fetchuser } from "@/actions/useractions";
import { useSession } from "next-auth/react";

const Edit = () => {
  const [currentUser, setcurrentUser] = useState(null);
  // Get session details
  const { data: session, status } = useSession();

  useEffect(() => {
    const getData = async () => {
      if (session?.user?.username) {
        let user = await fetchuser(session.user.username);
        setcurrentUser(user);
        console.log("Fetched user:", user);
      }
    };

    if (session) getData();
  }, [session]);


  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p>Please log in to edit your profile.</p>;

  return (
    <div>
      <div className=" min-h-screen text-white ">
        <div className="flex justify-center items-center h-screen">
          <EditProfile currentUser={currentUser} setCurrentUser={setcurrentUser} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
