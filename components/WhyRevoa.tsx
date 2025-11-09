import { Zap, MessageCircle, Globe2, Shield } from "lucide-react";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function WhyRevoa() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Instant Demo",
      desc: "See your new website live within hours — not weeks.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-400" />,
      title: "Chat-First Workflow",
      desc: "Talk directly with our designers via chat — no forms needed.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-blue-400" />,
      title: "Global Clients",
      desc: "We design for businesses worldwide, across all industries.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "No Risk",
      desc: "Only pay if you love your live demo website.",
    },
  ];

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeInWhenVisible>
        <h2 className="text-3xl font-bold mb-12">Why Choose Revoa</h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <FadeInWhenVisible delay={i * 0.15} key={i}>
            <div
              key={i}
              className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 transition text-left"
            >
              {r.icon}
              <h3 className="mt-4 text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-gray-400">{r.desc}</p>
            </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
