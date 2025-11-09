export default function Footer() {
  return (
    <footer className="py-12 bg-black text-gray-400 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-white font-bold text-2xl mb-4">Revoa</h3>
        <p className="text-gray-500 mb-6">
          See your website — before you even pay.
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white transition">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition">
            WhatsApp
          </a>
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Revoa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
