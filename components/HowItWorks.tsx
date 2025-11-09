import FadeInWhenVisible from "./FadeInWhenVisible";

export default function HowItWorks() {
  const steps = [
    { title: "Tell us about your business", desc: "Just send your business name and what you do." },
    { title: "We build your demo site", desc: "Preview-ready website within hours." },
    { title: "Chat & refine", desc: "Collaborate live — make changes instantly." },
    { title: "Get your quote & go live", desc: "Only pay if you love it." },
  ];

  return (
    <section id="how" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <FadeInWhenVisible delay={i * 0.1} key={i}>
              <div className="bg-gray-900 p-6 rounded-2xl hover:bg-gray-800 transition">
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
