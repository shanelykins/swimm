import { Heart, Share2, Star } from "lucide-react";

export const ListingInfo = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-4xl font-black text-gray-900">
        The Urban Hot Spring
      </h1>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-current text-gray-900" />
            <span className="font-bold">5.0</span>
            <span className="text-gray-600">•</span>
            <button className="underline font-medium hover:text-gray-900">
              75 reviews
            </button>
          </div>
          <span className="text-gray-600">•</span>
          <span className="text-gray-700">Glendale, California</span>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Heart className="w-4 h-4" />
            <span className="text-sm font-medium underline">Save</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Share2 className="w-4 h-4" />
            <span className="text-sm font-medium underline">Share</span>
          </button>
        </div>
      </div>

      <div className="flex gap-3 flex-wrap">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-bold">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Top Swimply
        </span>
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-bold">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          Highly Rebooked
        </span>
      </div>
    </div>
  );
};
