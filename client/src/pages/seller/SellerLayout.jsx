import React from "react";
import { useAppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link, NavLink, Outlet } from "react-router-dom";

const SellerLayout = () => {
  const { setSeller } = useAppContext();

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

  const sidebarLinks = [
   
    { name: "Ratings", path: "/seller/ratings", icon: ratingIcon },
  ];

  const logout = async () => {
    setSeller(false);
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
          <p>Hi! Store Owner</p>
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
              end={item.path === "/seller"}
              className={({ isActive }) =>
                `flex items-center py-3 px-4 gap-3 
                ${
                  isActive
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

export default SellerLayout;
