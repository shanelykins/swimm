import { SearchHeader } from "./components/SearchHeader";
import { CategoryNav } from "./components/CategoryNav";
import { ListingGrid } from "./components/ListingGrid";
import { MapView } from "./components/MapView";
import { useState } from "react";

export const SearchResults = () => {
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="min-h-screen bg-white">
      <SearchHeader />
      <CategoryNav />

      <div className="flex h-[calc(100vh-180px)]">
        <div className={`${showMap ? 'w-1/2' : 'w-full'} overflow-y-auto`}>
          <ListingGrid onToggleMap={() => setShowMap(!showMap)} showMap={showMap} />
        </div>

        {showMap && (
          <div className="w-1/2 sticky top-0 h-full">
            <MapView />
          </div>
        )}
      </div>
    </div>
  );
};
