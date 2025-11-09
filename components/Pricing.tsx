export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "from $99",
      desc: "Perfect for landing pages or single-service businesses.",
      features: ["1-page site", "Responsive design", "Free demo"],
    },
    {
      name: "Business",
      price: "from $299",
      desc: "Ideal for growing companies with multiple pages.",
      features: [
        "Up to 5 pages",
        "CMS (editable content)",
        "Contact form + chat",
      ],
    },
    {
      name: "Premium",
      price: "from $499",
      desc: "Custom integrations and e-commerce ready.",
      features: [
        "Unlimited pages",
        "E-commerce or booking",
        "Advanced SEO setup",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Transparent Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition"
            >
              <h3 className="text-2xl font-semibold">{p.name}</h3>
              <p className="text-gray-400 mt-2">{p.desc}</p>
              <p className="text-3xl font-bold mt-4">{p.price}</p>
              <ul className="mt-6 space-y-2 text-gray-400 text-sm">
                {p.features.map((f, j) => (
                  <li key={j}>✅ {f}</li>
                ))}
              </ul>
              <a
                href="#chat"
                className="mt-8 inline-block w-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-md py-3 font-semibold hover:from-blue-600 hover:to-purple-700 transition"
              >
                Chat for Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
