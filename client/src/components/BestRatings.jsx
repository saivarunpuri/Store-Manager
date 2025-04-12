import React from "react";
import { useAppContext } from "../context/AppContext";
import StoreCard from "./StoreCard";

const BestRatings = () => {
  const { stores } = useAppContext();

  const bestRatedStores = stores.filter((store) => store.overallRating > 4.3);

  return (
    <div className="mt-16">
      <p className="text-xl font-semibold mb-4 ml-2">Best Rated Stores</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bestRatedStores.map((store) => (
          <StoreCard key={store._id} store={store} />
        ))}
      </div>
    </div>
  );
};

export default BestRatings;
