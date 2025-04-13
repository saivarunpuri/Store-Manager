import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("/admin/users");
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        alert("Could not load user list");
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    let filtered = [...users];

    if (searchQuery.trim() !== "") {
      filtered = filtered.filter(
        (user) =>
          user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Users</h2>

        {/* Search filter */}
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-1.5 rounded-md text-sm"
          />
        </div>

        {/* User table */}
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Name</th>
                <th className="px-4 py-3 font-semibold truncate">Email</th>
                <th className="px-4 py-3 font-semibold truncate">Address</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="px-4 py-3 truncate">{user.name}</td>
                  <td className="px-4 py-3 truncate">{user.email}</td>
                  <td className="px-4 py-3 truncate">{user.address}</td>
                </tr>
              ))}
              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="3" className="text-center py-4 text-gray-400">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
