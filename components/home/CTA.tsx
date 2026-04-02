import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-linear-to-r from-blue-600 to-blue-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Innovate in Nanotechnology?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Join ARIGEN Biotech in pioneering sustainable nanotechnology solutions for modern farming. Let's build the future of agriculture together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-200 shadow-lg">
            📞 Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}