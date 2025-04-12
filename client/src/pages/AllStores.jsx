import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import StoreCard from "../components/StoreCard";

const AllStores = () => {
  const { stores, searchQuery } = useAppContext();
  const [filteredStores, setFilteredStores] = useState([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setFilteredStores(
        stores.filter((store) =>
          store.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredStores(stores);
    }
  }, [stores, searchQuery]);

  return (
    <div className="mt-16 flex flex-col">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All Stores</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {filteredStores.map((store, index) => (
          <StoreCard key={index} store={store} />
        ))}
      </div>
    </div>
  );
};

export default AllStores;
