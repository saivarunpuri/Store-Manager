import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const { user, setUser, setShowUserLogin, navigate, searchQuery, setSearchQuery } = useAppContext();

  const logout = async () => {
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/stores");
    }
  }, [searchQuery]);

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      setPasswordMessage("New passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/users/change-password", {
        method: "PUT", // ✅ FIXED METHOD
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          currentPassword,
          newPassword,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setPasswordMessage("Password updated successfully!");
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        setShowPasswordForm(false);
      } else {
        setPasswordMessage(data.message || "Failed to update password.");
      }
    } catch (err) {
      console.error(err);
      setPasswordMessage("Something went wrong.");
    }
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/" onClick={() => setOpen(false)}>
        <img className="h-9" src={assets.LOGO} alt="dummyLogoColored" />
      </NavLink>

      <div className="hidden sm:flex items-center gap-8">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/stores">All Stores</NavLink>
        <NavLink to="/">Contact</NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Stores"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={assets.search_icon} alt="Search" className="w-4 h-4" />
        </div>

        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full"
          >
            Login
          </button>
        ) : (
          <div className="relative group">
            <img src={assets.profile_icon} className="w-10 cursor-pointer" alt="Profile" />
            <ul className="hidden group-hover:block absolute top-10 right-0 bg-white shadow border border-gray-200 py-2.5 w-40 rounded-md text-sm z-40">
              <li onClick={logout} className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer">Logout</li>
              <li
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="p-1.5 pl-3 hover:bg-primary/10 cursor-pointer"
              >
                Change Password
              </li>
            </ul>

            {showPasswordForm && (
              <div className="absolute top-20 right-0 bg-white p-4 shadow-lg border rounded-md w-72 z-50">
                <input
                  type="password"
                  placeholder="Current Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mb-2 p-2 border rounded"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full mb-2 p-2 border rounded"
                />
                {passwordMessage && (
                  <p className="text-sm mb-1 text-red-500">{passwordMessage}</p>
                )}
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setShowPasswordForm(false)}
                    className="px-3 py-1 text-sm bg-gray-200 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePasswordUpdate}
                    className="px-3 py-1 text-sm bg-primary text-white rounded"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
