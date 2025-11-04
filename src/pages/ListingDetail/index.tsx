import { useParams } from "react-router-dom";
import { Header } from "./components/Header";
import { PhotoGallery } from "./components/PhotoGallery";
import { ListingInfo } from "./components/ListingInfo";
import { BookingCard } from "./components/BookingCard";
import { Amenities } from "./components/Amenities";
import { LocationMap } from "./components/LocationMap";
import { AboutSpace } from "./components/AboutSpace";
import { Reviews } from "./components/Reviews";
import { HostInfo } from "./components/HostInfo";
import { HouseRules } from "./components/HouseRules";

export const ListingDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <ListingInfo />
        <PhotoGallery />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
          <div className="lg:col-span-2 space-y-12">
            <Amenities />
            <LocationMap />
            <AboutSpace />
            <Reviews />
            <HostInfo />
            <HouseRules />
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <BookingCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
