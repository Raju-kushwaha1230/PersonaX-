"user"

import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  // Fetch posts from API
  const fetchPosts = async () => {
    const res = await fetch("/api/post");
    const data = await res.json();
    setPosts(data.posts);
  };

  return (
    <div className="p-4 container mx-auto h-[100%] flex flex-col items-center ">
      <h2 className="text-4xl text-slate-300 mb-4 w-full font-mono  text-center">Recent Posts</h2>
      {(posts?.length ?? 0) === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post._id} className="border p-3 rounded mb-2 shadow-md h-full w-[60vw]">
            <div classsName="flex items-center  gap-2">
              <div className="flex items-center gap-3 justify-between">
                <div className="flex items-center ">
                  <img
                    src={post.userId.profilePic}
                    alt={`${post.userId.name}'s profile`}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <h3 className="font-semibold">{post.userId.name}</h3>
                  <h3 className="font-semibold text-gray-500 m-2">(@{post.userId.username})</h3>
                  <button className=" text-slate-400 px-3 py-1 rounded hover:text-slate-100  transition duration-200">
                    Edit
                  </button>
                </div>







              </div>
              <div className="flex items-center mb-2 ml-10 ">
                <p className="text-sm pl-1 text-gray-500">@created at </p>
                <p className="text-sm pl-1 text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p className="text-sm pl-2 text-gray-500">{new Date(post.createdAt).toLocaleTimeString()}</p>
              </div>
              <h3 className="font-mono ">{post.caption}</h3>
            </div>
            <div className="  flex flex-col items-center justify-center">
              {post.media.length > 0 && (
                <img
                  width={460}
                  src={post.media[0].fileUrl}
                  alt="Post Media"
                  className=" object-cover mt-2 p-3 rounded-md shadow-md"
                />

              )}
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-500">Likes: {post.likes?.length || 0}</p>
                <p className="text-sm text-gray-500">Comments: {post.comments?.length || 0}</p>
                <p className="text-sm text-gray-500">Shares: {post.shares?.length || 0}</p>
              </div>
              <div className="flex items-center gap-4">

                <button className="bg-blue-300 text-white px-1 py- rounded hover:bg-blue-500 transition duration-200">
                  <lord-icon
                    src="https://cdn.lordicon.com/msyeyaka.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-up"
                    style={{ "width": "30px", "height": "30px" }}>
                  </lord-icon>
                </button>
                <button className="bg-green-200 text-white px-1 rounded hover:bg-green-300 transition duration-200">
                  <lord-icon
                    src="https://cdn.lordicon.com/jdgfsfzr.json"
                    trigger="hover"
                    stroke="bold"
                    state="hover-conversation-alt"
                    style={{ "width": "30px", "height": "30px" }}>
                  </lord-icon>
                </button>
                <button className="bg-slate-300 text-white px-1 rounded hover:bg-blue-300 transition duration-200">
                  <lord-icon
                    src="https://cdn.lordicon.com/hmqxevgf.json"
                    trigger="loop"
                    stroke="bold"
                    state="loop-slide"
                    style={{ "width": "30px", "height": "30px" }}>
                  </lord-icon>
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200">
                  Save
                </button>
              </div>

            </div>

          </div>
        ))
      )}
    </div>
  );
}
