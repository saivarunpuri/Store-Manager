import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import StoreCard from "../components/StoreCard";

const ProductCategory = () => {
  const { stores } = useAppContext();
  const { category } = useParams();

  console.log("Current stores:", stores);

  if (!Array.isArray(stores)) {
    return (
      <div className="flex items-center justify-center h-[60vh] mt-16">
        <p>Loading stores...</p>
      </div>
    );
  }

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );

  const filteredStores = stores.filter(
    (store) =>
      store.category &&
      store.category.toLowerCase() === category
  );

  return (
    <div className="mt-16">
      {searchCategory && (
        <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium">
            {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full"></div>
        </div>
      )}

      {filteredStores.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
          {filteredStores.map((store) => (
            <StoreCard key={store._id} store={store} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[60vh]">
          <p>No stores are found in this category</p>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
