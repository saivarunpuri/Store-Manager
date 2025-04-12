import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("/admin/users");
        setUsers(response.data); // Since it's a raw array
      } catch (error) {
        console.error("Failed to fetch users:", error);
        alert("Could not load user list");
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Users</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Name</th>
                <th className="px-4 py-3 font-semibold truncate">Email</th>
                <th className="px-4 py-3 font-semibold truncate">Address</th>
                <th className="px-4 py-3 font-semibold truncate">Password</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {users.map((user, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="px-4 py-3 truncate">{user.name}</td>
                  <td className="px-4 py-3 truncate">{user.email}</td>
                  <td className="px-4 py-3 truncate">{user.address}</td>
                  <td className="px-4 py-3 truncate">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
