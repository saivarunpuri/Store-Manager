import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { useAppContext } from "./context/AppContext";
import Login from "./components/Login";
import AllStores from "./pages/AllStores";
import ProductCategory from "./pages/ProductCategory";
import SellerLogin from "./components/seller/SellerLogin";
import SellerLayout from "./pages/seller/SellerLayout";
import Ratings from "./pages/seller/Ratings";
import AdminLayout from "./pages/admin/AdminLayout";
import AddUser from "./pages/Admin/AddUser";
import AdminLogin from "./components/admin/AdminLogin";
import UserList from "./pages/admin/UserList";
import StoreList from "./pages/admin/StoreList";
import SubmittedRatings from "./pages/admin/SubmittedRatings";
import AddStore from "./pages/Admin/AddStore";

const App = () => {
  const location = useLocation();
  const isStorePath = location.pathname.includes("seller");
  const isAdminPath = location.pathname.includes("admin");
  const { showUserLogin, isSeller, isAdmin } = useAppContext();

  return (
    <div className="text-default min-h-screen text-gray-700 bg-white">
      {/* Navbar only shows if not on seller/admin routes */}
      {!isStorePath && !isAdminPath && <Navbar />}

      {/* Show Login only if not on seller/admin routes and user login is true */}
      {!isStorePath && !isAdminPath && showUserLogin && <Login />}

      <div
        className={
          isStorePath || isAdminPath ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores" element={<AllStores />} />
          <Route path="/stores/:category" element={<ProductCategory />} />

          {/* Seller Routes */}
          <Route
            path="/seller"
            element={isSeller ? <SellerLayout /> : <SellerLogin />}
          >
            {isSeller && (
              <>
                <Route index element={<Ratings />} />
              </>
            )}
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={isAdmin ? <AdminLayout /> : <AdminLogin />}
          >
            {isAdmin && (
              <>
                <Route index element={<AddUser />} />
                <Route path="add-store" element={<AddStore/>} />
                <Route path="users" element={<UserList />} />
                <Route path="stores" element={<StoreList />} />
                <Route path="ratings" element={<SubmittedRatings />} />
              </>
            )}
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
