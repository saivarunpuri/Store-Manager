import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";

const StoreCard = ({ store }) => {
  const { updateStoreRating, navigate, user } = useAppContext();
  const [inputRating, setInputRating] = useState(store.userRating || "");
  const [hasSubmitted, setHasSubmitted] = useState(!!store.userRating);

  const handleRatingChange = (e) => {
    setInputRating(e.target.value);
  };

  const handleSubmit = () => {
    const numericRating = parseFloat(inputRating);
    if (numericRating >= 1 && numericRating <= 5) {
      if (!user || !user.id) {
        alert("You must be logged in to rate a store.");
        return;
      }
      updateStoreRating(store.id, numericRating, user.id);
      setHasSubmitted(true);
    } else {
      alert("Please enter a rating between 1 and 5");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm text-sm max-w-80 cursor-pointer">
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">
        {store.name}
      </p>
      <p className="text-gray-500 mt-1 ml-2">{store.address}</p>
      <div className="ml-2 mt-2 flex items-center text-yellow-500">
        <p className="text-sm font-medium text-gray-600 mr-1">Overall Rating:</p>
        <span className="font-semibold">{store.overallRating} ⭐</span>
      </div>
      <div className="ml-2 mt-1 flex items-center text-green-500">
        <p className="text-sm font-medium text-gray-600 mr-1">Your Rating:</p>
        <span className="font-semibold">{store.userRating || "N/A"} ⭐</span>
      </div>

      <input
        type="number"
        min="1"
        max="5"
        value={inputRating}
        onChange={handleRatingChange}
        className="border border-gray-300 rounded px-2 py-1 mt-3 ml-2 w-24"
        placeholder="1-5"
      />

      <button
        onClick={handleSubmit}
        type="button"
        className="bg-primary mt-3 ml-2 px-6 py-2 font-medium rounded text-white cursor-pointer"
      >
        {hasSubmitted ? "Modify Rating" : "Submit Rating"}
      </button>
    </div>
  );
};

export default StoreCard;
