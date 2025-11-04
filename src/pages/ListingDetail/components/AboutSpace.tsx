export const AboutSpace = () => {
  const occasions = [
    "Friend hangouts",
    "Family gatherings",
    "Celebrations",
    "Photo shoots",
    "Video shoots",
  ];

  const features = [
    {
      icon: "🏊",
      title: "Free WiFi available",
      description: "Free WiFi available.",
    },
    {
      icon: "🔥",
      title: "Gas fire pit",
      description: "Free gas fire can be enjoyed while in th...",
      price: "$2",
    },
    {
      icon: "🎵",
      title: "Bluetooth speaker",
      description: "Kick back with some good tunes. We'll...",
      price: "$4",
    },
    {
      icon: "⭐",
      title: "S'mores",
      description: "Yup, that's right. You're going to get...",
      price: "$9",
    },
    {
      icon: "♨️",
      title: "Heated",
      description: "",
      price: "$8",
    },
    {
      icon: "⭐",
      title: "Roll up Jacuzzi sid...",
      description: "Roll up Jacuzzi side cooler. Because col...",
      price: "$8",
    },
  ];

  return (
    <div className="border-b border-gray-200 pb-12">
      <h2 className="text-2xl font-bold mb-4">About the igloo</h2>

      <div className="space-y-4 text-gray-700 mb-8">
        <p>
          This large private hot tub is the perfect relaxation getaway. Let the Jacuzzi jets provide a massage. Grab a
          beer, wine or whatever floats your boat and kick back in the serine oasis. Perfect for a date night. Or perhaps
          a friends hangout. Or even a mimosa brunch. Come and enjoy, you're going to love it!
        </p>
        <p>
          Our Jacuzzi is known for its crystal clear water. It is equipped with two pool sized filters and an ultraviolet
          (UV) sanitizing light system. And unlike swimming pools and spas, we are able to drain and refill with fresh
          water frequently.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold mb-4">This space is great for...</h3>
        <div className="flex flex-wrap gap-3">
          {occasions.map((occasion) => (
            <span
              key={occasion}
              className="px-4 py-2 bg-sky-500 text-white rounded-full text-sm font-bold"
            >
              {occasion}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4">What makes it special</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-3xl">{feature.icon}</span>
                {feature.price && (
                  <span className="text-sm font-bold text-gray-700">{feature.price}</span>
                )}
              </div>
              <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
              {feature.description && (
                <p className="text-sm text-gray-600">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
