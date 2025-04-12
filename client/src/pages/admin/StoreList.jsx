import React from 'react';
import { useAppContext } from '../../context/AppContext';

const StoreList = () => {
  const { stores } = useAppContext();

  return (
    <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">All Stores</h2>
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
              {stores.map((store, index) => (
                <tr key={index} className="border-t border-gray-500/20">
                  <td className="px-4 py-3 truncate">{store.name}</td>
                  <td className="px-4 py-3 truncate">{store.address}</td>
                  <td className="px-4 py-3 truncate">{store.category}</td>
                  <td className="px-4 py-3 truncate">{store.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StoreList;
