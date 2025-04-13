import React, { useEffect, useState } from "react";
import { useAppContext } from "../../context/AppContext";
import axios from "../../api/axios";

const Ratings = () => {
  const { user, ratings, isSeller, fetchRatingsForStore } = useAppContext();

  useEffect(() => {
    if (user?.id && isSeller) {
      fetchRatingsForStore(user.id);
    }
  }, [user, isSeller]);

  const storeRatings = ratings;

  // Password update states
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [passwordMsgType, setPasswordMsgType] = useState("success");

  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setPasswordMsgType("error");
      setPasswordMsg("New passwords do not match.");
      return;
    }

    try {
      const res = await axios.put("/stores/change-password", {
        storeId: user.id,
        currentPassword,
        newPassword,
      });

      setPasswordMsgType("success");
      setPasswordMsg(res.data.message || "Password updated successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      setPasswordMsgType("error");
      setPasswordMsg(error.response?.data?.message || "Failed to update password.");
    }
  };

  return (
    <div className="flex-1 py-10 flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">User Ratings</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          {storeRatings.length === 0 ? (
            <p className="text-gray-500 py-6">No ratings yet for this store.</p>
          ) : (
            <table className="md:table-auto table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">#</th>
                  <th className="px-4 py-3 font-semibold truncate">Username</th>
                  <th className="px-4 py-3 font-semibold truncate">Rating</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {storeRatings.map((r, index) => (
                  <tr key={index} className="border-t border-gray-500/20">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 truncate">{r.username}</td>
                    <td className="px-4 py-3 text-yellow-500 font-semibold">
                      ⭐ {r.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Change Password Form */}
        <div className="mt-10 w-full max-w-md bg-white border border-gray-200 p-6 rounded-md">
          <h3 className="text-md font-semibold mb-4">Change Store Password</h3>
          <form onSubmit={handlePasswordChange} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border rounded px-3 py-2"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white rounded px-4 py-2 hover:bg-primary-dull"
            >
              Update Password
            </button>
            {passwordMsg && (
              <p
                className={`text-sm ${
                  passwordMsgType === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {passwordMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
