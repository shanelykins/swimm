import { Star } from "lucide-react";

export const HostInfo = () => {
  return (
    <div className="border-b border-gray-200 pb-12">
      <div className="flex items-start gap-6">
        <img
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200"
          alt="Becky and Collin"
          className="w-24 h-24 rounded-full object-cover"
        />

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">
            Hosted by Becky and Collin
          </h2>

          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span>Hosting since Jan 2023</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Verified Host</span>
            </div>

            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-current text-gray-900" />
              <span className="text-sm font-medium">75 reviews</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">
            Family, friends and loved ones.
          </p>

          <div className="mb-6">
            <p className="text-sm text-gray-700 mb-2">
              <span className="font-bold">Response time:</span> Within an hour
            </p>
          </div>

          <button className="px-6 py-3 border border-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Message host
          </button>
        </div>
      </div>
    </div>
  );
};
