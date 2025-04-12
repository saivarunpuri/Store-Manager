import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null); // changed from false to null
  const [isSeller, setSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(true);
  const [stores, setStores] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ratings, setRatings] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // ✅ Fetch stores
  const fetchStores = async () => {
    try {
      const response = await axios.get("/admin/stores");
      setStores(response.data.data); // Assuming response = { data: [...] }
    } catch (error) {
      console.error("Failed to fetch stores:", error);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

  // ✅ Submit + Update store rating
  const updateStoreRating = async (storeId, rating) => {
    if (!user || !user.id) {
      alert("Please log in to rate a store");
      return;
    }

    try {
      await axios.post("/ratings", {
        user_id: user.id, // 👈 from logged-in user
        store_id: storeId,
        rating,
      });

      // Optimistically update UI
      setStores((prevStores) =>
        prevStores.map((store) =>
          store.id === storeId
            ? { ...store, userRating: rating } // Update user's rating
            : store
        )
      );

      // Optionally refetch all stores to update average
      // await fetchStores();

      alert("Rating submitted successfully!");
    } catch (error) {
      console.error("Failed to submit rating:", error);
      alert("Error submitting rating");
    }
  };
  useEffect(() => {
    console.log("Current user state:", user);
  }, [user]);
  

  // Add this function inside AppContextProvider
// In AppContext.jsx
const fetchRatingsForStore = async (storeId) => {
  try {
    const res = await axios.get(`/ratings/store/${storeId}`); // ✅ Correct endpoint
    setRatings(res.data.data); // ✅ Assuming your backend returns { data: [...] }
  } catch (error) {
    console.error("Failed to fetch ratings:", error);
  }
};



// Call it when a store logs in
useEffect(() => {
  if (isSeller && user?.id) {
    fetchRatingsForStore(user.id);
  }
}, [user, isSeller]);


  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setSeller,
    showUserLogin,
    setShowUserLogin,
    stores,
    setStores,
    fetchStores,
    updateStoreRating,
    searchQuery,
    setSearchQuery,
    ratings,
    setRatings,
    isAdmin,
    setIsAdmin,
    fetchRatingsForStore
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
