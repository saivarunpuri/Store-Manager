import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const StoreList = () => {
  const { stores } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredStores, setFilteredStores] = useState([]);

  const categories = ['All', 'Restaurants', 'Hotels', 'Education', 'Hospitals', 'Rent & Hire', 'Gym', 'Courier Service'];

  useEffect(() => {
    let filtered = [...stores];

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(store => store.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(
        store =>
          store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          store.address.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredStores(filtered);
  }, [searchQuery, selectedCategory, stores]);

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Stores</h2>

        {/* Filter controls */}
        <div className="flex flex-wrap gap-4 items-center mb-4">
          <input
            type="text"
            placeholder="Search by name or address"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-3 py-1.5 rounded-md text-sm"
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border px-3 py-1.5 rounded-md text-sm"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Table */}
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          <table className="md:table-auto table-fixed w-full overflow-hidden">
            <thead className="text-gray-900 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold truncate">Store Name</th>
                <th className="px-4 py-3 font-semibold truncate">Address</th>
                <th className="px-4 py-3 font-semibold truncate">Category</th>
                <th className="px-4 py-3 font-semibold truncate">Rating</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-500">
              {filteredStores.map((store, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="px-4 py-3 truncate">{store.name}</td>
                  <td className="px-4 py-3 truncate">{store.address}</td>
                  <td className="px-4 py-3 truncate">{store.category}</td>
                  <td className="px-4 py-3 truncate">{store.rating}</td>
                </tr>
              ))}
              {filteredStores.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-400">
                    No stores found.
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

export default StoreList;
