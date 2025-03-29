"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function UploadForm() {
  const { data: session } = useSession();
  const [selectedFile, setSelectedFile] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  console.log("Session Data:", session);
  useEffect(() => {
    if (session?.user?.id) {
      setUserId(session.user.id);
    }
  }, [session]);

  // Handles file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]); // ✅ Fix setFile -> setSelectedFile
  };

  // Uploads file to the backend API
  const uploadFile = async () => {
    if (!selectedFile) {
      console.error("No file selected!");
      return;
    }

    if (!userId) {
      console.error("User ID is missing!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("userId", userId);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Upload Success:", data);
      return data;
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  // Creates a post after uploading the file
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile || !caption) { // ✅ Fix file -> selectedFile
      alert("Please add a file and caption.");
      return;
    }

    setLoading(true);

    try {
      const uploadedFile = await uploadFile();
      if (!uploadedFile?.success) throw new Error("Upload failed!");

      const mediaId = uploadedFile.upload._id;

      const res = await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, caption, mediaIds: [mediaId] }),
      });

      const postResponse = await res.json();
      if (!postResponse.success) throw new Error("Post creation failed!");

      alert("Post created successfully!");
      setSelectedFile(null); // ✅ Fix setFile -> setSelectedFile
      setCaption("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>

      <div className=" h-[50vh] p-4 d  ">
        <h2 className="text-xl text-center font-bold mb-2">Create a Post</h2>
        <div className="container mx-auto flex flex-col items-center p-10 w-[70vw]  border rounded shadow-md  ">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full p-10 ">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="p-3 border rounded "
              required
            />
            {/* <input
          type="text"
          
          placeholder="Enter caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="p-2 border rounded bg-slate-200 textwhite "
          required
        /> */}
            <textarea
              placeholder="Enter caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="p-2 border rounded bg-slate-200 w-full"
              rows="3"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Post"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
