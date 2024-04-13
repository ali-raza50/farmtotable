import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../components/context/AuthContext.jsx";

const UserFormData = () => {
  const { userData, setUserData } = useAuth();
  const [name, setName] = useState(userData?.name || "");
  const [email, setEmail] = useState(userData?.email || "");
  console.log(userData);

  // State to store user's image URL
  // const [imageURL, setImageURL] = useState(userData?.image || "");
  // Constructing the absolute image URL
  const serverAddress = "http://localhost:8080";
  const imageURL = userData?.image
    ? `${serverAddress}/${userData.image.replace(/\\/g, "/")}`
    : "";

  console.log("imageurl", imageURL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:8080/api/v1/updateProfile",
        {
          _id: userData._id,
          name,
          email,
        }
      );
      if (data.error) {
        toast.error(data.error);
      } else {
        setUserData(data.updatedUser);
        toast.success("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>
      {/* Display user's image */}
      {imageURL && (
        <img
          src={imageURL}
          alt="User"
          className="mb-4 w-32 h-32 rounded-full mx-auto"
        />
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // Disable email field as it shouldn't be editable
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit" // Change to type="submit" to submit the form
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UserFormData;
