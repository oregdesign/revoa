export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to see your new website?
        </h2>
        <p className="text-lg mb-8">
          Chat now to get your personalized live demo and free quote.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#chat"
            className="px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
          >
            💬 Chat Now
          </a>
          <a
            href="mailto:hello@revoa.com"
            className="px-6 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            📧 Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
