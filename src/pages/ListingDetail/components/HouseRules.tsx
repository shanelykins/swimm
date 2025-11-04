import { Check, X } from "lucide-react";

export const HouseRules = () => {
  const rules = [
    { label: "Nudity", allowed: true },
    { label: "Third-party vendors", allowed: true },
    { label: "Parties", allowed: true },
    { label: "Alcohol", allowed: true },
    { label: "Smoking", allowed: false },
    { label: "Loud music", allowed: false },
  ];

  const additionalRules = [
    "Feel free to bring drinks!",
    "Vapes are good to go. But no cigarettes, cigars, or similar (no ash).",
    "Sun-Thurs, Music and voices must be low after 9:30PM so as not to disturb the neighbors.",
  ];

  return (
    <div className="pb-12">
      <h2 className="text-2xl font-bold mb-8">Things to know</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-4">House rules</h3>
          <div className="space-y-3">
            {rules.map((rule, index) => (
              <div key={index} className="flex items-center gap-3">
                {rule.allowed ? (
                  <Check className="w-5 h-5 text-sky-500 flex-shrink-0" />
                ) : (
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
                <span className={rule.allowed ? "text-gray-900" : "text-gray-400"}>
                  {rule.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="font-bold mb-3">Additional rules</h4>
            <div className="space-y-2 text-sm text-gray-700">
              {additionalRules.map((rule, index) => (
                <p key={index}>{rule}</p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Space privacy</h3>
          <div className="mb-6">
            <h4 className="font-bold mb-2">Very Private</h4>
            <p className="text-sm text-gray-700">
              Your own space, secluded from neighbors; may be visible to the main residence.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-2">Report Listing</h4>
            <button className="px-6 py-3 border border-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Report listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
