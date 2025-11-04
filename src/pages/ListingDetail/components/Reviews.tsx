import { Star } from "lucide-react";

const reviews = [
  {
    name: "Bobby",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Great fun! thank you",
    repeatGuest: true,
  },
  {
    name: "Cindy",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Wonderfully relaxing",
    repeatGuest: true,
  },
  {
    name: "Keiyona",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Very private, very comfortable, very clean, very relaxing environment. Everything was already signed up for us. We are definitely ..read more",
  },
  {
    name: "Maria",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Great",
  },
  {
    name: "Briana",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "I love this spot",
    repeatGuest: true,
  },
  {
    name: "Joe",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Amazing",
  },
  {
    name: "Alejandro",
    avatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Great",
  },
  {
    name: "R",
    avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Perfect",
    repeatGuest: true,
  },
  {
    name: "Kenaniah",
    avatar: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100",
    rating: 5,
    comment: "Amazing experience",
  },
];

export const Reviews = () => {
  return (
    <div className="border-b border-gray-200 pb-12">
      <div className="flex items-center gap-2 mb-8">
        <Star className="w-6 h-6 fill-current text-gray-900" />
        <h2 className="text-2xl font-bold">5.0 • 75 reviews</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold text-gray-900">{review.name}</h3>
                {review.repeatGuest && (
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <svg className="w-3 h-3 text-sky-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Repeat Guest
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current text-sky-500" />
              ))}
            </div>

            <p className="text-sm text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
