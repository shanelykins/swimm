import { Grid } from "lucide-react";

const photos = [
  "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1488267/pexels-photo-1488267.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export const PhotoGallery = () => {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 rounded-2xl overflow-hidden h-[500px]">
        <div className="col-span-2 row-span-2 relative group cursor-pointer">
          <img
            src={photos[0]}
            alt="Main"
            className="w-full h-full object-cover group-hover:brightness-90 transition-all"
          />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src={photos[1]}
            alt="Gallery"
            className="w-full h-full object-cover group-hover:brightness-90 transition-all"
          />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src={photos[2]}
            alt="Gallery"
            className="w-full h-full object-cover group-hover:brightness-90 transition-all"
          />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src={photos[3]}
            alt="Gallery"
            className="w-full h-full object-cover group-hover:brightness-90 transition-all"
          />
        </div>

        <div className="relative group cursor-pointer">
          <img
            src={photos[4]}
            alt="Gallery"
            className="w-full h-full object-cover group-hover:brightness-90 transition-all"
          />
          <button className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-white border border-gray-900 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm">
            <Grid className="w-4 h-4" />
            All photos
          </button>
        </div>
      </div>
    </div>
  );
};
