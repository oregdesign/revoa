export default function Portfolio() {
  const projects = [
    {
      title: "Café & Restaurant",
      img: "https://via.placeholder.com/400x250?text=Cafe+Demo",
      link: "#",
    },
    {
      title: "Online Store",
      img: "https://via.placeholder.com/400x250?text=Ecommerce+Demo",
      link: "#",
    },
    {
      title: "Service Business",
      img: "https://via.placeholder.com/400x250?text=Service+Demo",
      link: "#",
    },
    {
      title: "Creative Agency",
      img: "https://via.placeholder.com/400x250?text=Agency+Demo",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Live Demo Examples</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                <div className="absolute bottom-4 left-4 text-left">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-300">View Live Demo →</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
