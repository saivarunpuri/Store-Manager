import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import axios from "../../api/axios"; // adjust the path if needed


const AdminLogin = () => {
  const { isAdmin, setIsAdmin, navigate } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAdmin) {
      navigate("/admin"); // Navigate to the admin dashboard after login
    }
  }, [isAdmin, navigate]);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/admin/login", { email, password });

      const adminData = res.data.data;
      console.log("Login Success:", adminData);
      setIsAdmin(true);
      // Optional: store admin data in localStorage if needed
      // localStorage.setItem("admin", JSON.stringify(adminData));
    } catch (err) {
      console.error("Admin login failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    !isAdmin && ( // Ensure you're checking for !isAdmin instead of !isSeller
      <form
        onSubmit={onSubmitHandler}
        className="min-h-screen flex items-center text-sm text-gray-600"
      >
        <div className="flex flex-col gap-5 m-auto items-start p-8 py-12 min-w-80 sm:min-w-88 rounded-lg shadow-xl border border-gray-200">
          <p className="text-2xl font-medium m-auto">
            <span className="text-primary">Admin</span> Login
          </p>
          <div className="w-full">
            <p>Email</p>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              required
            />
          </div>
          <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
            Login
          </button>
        </div>
      </form>
    )
  );
};

export default AdminLogin;
