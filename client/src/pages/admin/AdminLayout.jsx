import React from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const { setIsAdmin } = useAppContext();

  const ratingIcon = (
    <svg
      className="w-6 h-6 text-yellow-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.778 1.4 8.165L12 18.897l-7.334 3.857 1.4-8.165L.132 9.211l8.2-1.193L12 .587z" />
    </svg>
  );

  const addStoreIcon = (
    <svg
      className="w-6 h-6 text-green-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 13v-2h-8v-8h-2v8h-8v2h8v8h2v-8h8z" />
    </svg>
  );

  const addUserIcon = (
    <svg
      className="w-6 h-6 text-blue-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zM2 17c0-3 4-5 10-5s10 2 10 5v2h-20v-2z" />
    </svg>
  );

  const storeListIcon = (
    <svg
      className="w-6 h-6 text-purple-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M3 7h18v2H3zm0 4h18v2H3zm0 4h18v2H3z" />
    </svg>
  );

  const userListIcon = (
    <svg
      className="w-6 h-6 text-orange-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12c2.48 0 4.5-2.02 4.5-4.5s-2.02-4.5-4.5-4.5-4.5 2.02-4.5 4.5 2.02 4.5 4.5 4.5zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zM2 17c0-3 4-5 10-5s10 2 10 5v2h-20v-2z" />
    </svg>
  );

  const sidebarLinks = [
    { name: "Add User", path: "/admin", icon: addUserIcon },
    { name: "Add Store", path: "/admin/add-store", icon: addStoreIcon },
    { name: "Users", path: "/admin/users", icon: userListIcon },
    { name: "Stores", path: "/admin/stores", icon: storeListIcon },
    { name: "Submitted Ratings", path: "/admin/ratings", icon: ratingIcon },
  ];

  const logout = async () => {
    setIsAdmin(false);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white">
        <Link to="/">
          <img
            src={assets.LOGO}
            alt="Logo"
            className="cursor-pointer w-34 md:w-38"
          />
        </Link>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! Admin</p>
          <button
            onClick={logout}
            className="border rounded-full text-sm px-4 py-1"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="md:w-64 w-16 border-r h-[550px] text-base border-gray-300 pt-4 flex flex-col transition-all duration-300">
          {sidebarLinks.map((item) => (
            <NavLink
              to={item.path}
              key={item.name}
              end={item.path === "/admin"}  // Ensure exact path matching for "/admin"
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 
                ${isActive 
                  ? "border-r-4 md:border-r-[6px] bg-primary/10 border-primary-dull text-primary"
                  : "hover:bg-gray-100/90 border-white"
                }`
              }
            >
              <span className="w-7 h-7 flex items-center justify-center">
                {typeof item.icon === "string" ? (
                  <img src={item.icon} alt="" className="w-7 h-7" />
                ) : (
                  item.icon
                )}
              </span>
              <p className="md:block hidden text-center">{item.name}</p>
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
