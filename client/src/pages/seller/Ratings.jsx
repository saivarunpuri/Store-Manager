import React, { useEffect } from "react";
import { useAppContext } from "../../context/AppContext";

const Ratings = () => {
  const { user, ratings, isSeller, fetchRatingsForStore } = useAppContext();

  useEffect(() => {
    if (user?.id && isSeller) {
      fetchRatingsForStore(user.id); // ✅ Fetch for logged-in store
    }
  }, [user, isSeller]);

  const storeRatings = ratings;

  return (
    <div className="flex-1 py-10 flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-4 text-lg font-medium">User Ratings</h2>
        <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
          {storeRatings.length === 0 ? (
            <p className="text-gray-500 py-6">No ratings yet for this store.</p>
          ) : (
            <table className="md:table-auto table-fixed w-full overflow-hidden">
              <thead className="text-gray-900 text-sm text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">#</th>
                  <th className="px-4 py-3 font-semibold truncate">Username</th>
                  <th className="px-4 py-3 font-semibold truncate">Rating</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-500">
                {storeRatings.map((r, index) => (
                  <tr key={index} className="border-t border-gray-500/20">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 truncate">{r.username}</td>
                    <td className="px-4 py-3 text-yellow-500 font-semibold">
                      ⭐ {r.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
