import React, { useState } from "react";
import axios from "../../api/axios";
import { categories } from "../../assets/assets";

const AddStore = () => {
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState(""); // ✅ new
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newStore = {
      name: storeName,
      email, // ✅ include email in payload
      address,
      category,
      password,
    };

    try {
      const response = await axios.post("/admin/add-store", newStore);
      console.log("Store Added:", response.data);

      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

      // reset fields
      setStoreName("");
      setEmail("");
      setAddress("");
      setCategory("");
      setPassword("");
    } catch (error) {
      console.error("Add store failed:", error);
      alert("Failed to add store");
    }
  };

  return (
    <div className="py-10 flex flex-col justify-between bg-white relative">
      {showPopup && (
        <div className="absolute top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce-in">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm font-medium">Store added successfully!</span>
        </div>
      )}

      <form className="md:p-10 p-4 space-y-5 max-w-lg" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="store-name">Store Name</label>
          <input
            id="store-name"
            type="text"
            placeholder="Enter Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="store-email">Email</label>
          <input
            id="store-email"
            type="email"
            placeholder="Enter Store Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="store-address">Address</label>
          <input
            id="store-address"
            type="text"
            placeholder="Enter Store Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="w-full flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat.text}>{cat.text}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="store-password">Password</label>
          <input
            id="store-password"
            type="password"
            placeholder="Enter Store Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 bg-indigo-500 text-white font-medium rounded"
        >
          ADD STORE
        </button>
      </form>
    </div>
  );
};

export default AddStore;
