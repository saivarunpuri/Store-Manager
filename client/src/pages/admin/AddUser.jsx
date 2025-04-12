import React, { useState } from 'react';
import axios from '../../api/axios';

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/admin/add-user', {
        name,
        email,
        address,
        password,
      });

      // Clear form
      setName("");
      setEmail("");
      setAddress("");
      setPassword("");

      // Show popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error("Add user failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Failed to add user");
    }
  };

  return (
    <div className="relative py-10 flex flex-col justify-between bg-white">
      {/* Success Popup */}
      {showPopup && (
        <div className="absolute top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-in">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">User added successfully!</span>
        </div>
      )}

      <form className="md:p-10 p-4 space-y-5 max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="user-name">Name</label>
          <input
            id="user-name"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="user-email">Email</label>
          <input
            id="user-email"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="user-address">Address</label>
          <input
            id="user-address"
            type="text"
            placeholder="Enter your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="user-password">Password</label>
          <input
            id="user-password"
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 hover:bg-indigo-600 transition-all text-white font-medium rounded"
        >
          ADD USER
        </button>
      </form>
    </div>
  );
};

export default AddUser;
