import hero from "@/public/images/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 relative bg-[radial-gradient(circle_at_top,#2f6ff1,#0b4175)] text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.4),transparent_70%)]" />
      <div className="container mx-auto px-4 pt-10 lg:pt-16 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 text-center md:text-left">
            <p className="inline-flex items-center gap-2 bg-indigo-500/20 text-indigo-100 px-3 py-1 rounded-full text-sm font-medium mb-2">
              <span>🧬</span> Research-driven nanobiotech
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Advanced Nanobiotechnology for a Sustainable Future
            </h1>
            <p className="mt-6 text-lg md:text-xl text-indigo-100 max-w-xl">
              ARIGEN Biotech builds high-impact solutions in smart fertilizers,
              drug delivery, diagnostics, and environment remediation with a
              strong emphasis on scalability and impact.
            </p>
            <div className="max-w-[80%] mx-auto md:mx-0 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="/#research"
                className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-3xl text-black bg-white overflow-hidden group"
              >
                <span className="absolute inset-0 bg-linear-to-r from-cyan-400 via-blue-500 to-fuchsia-500 opacity-40 blur-xl group-hover:opacity-100 transition duration-500 animate-[gradient_4s_linear_infinite]" />
                <span className="absolute inset-0 border border-white/70 rounded-3xl pointer-events-none" />
                <span className="relative z-10">Explore Research</span>
              </a>
              <a
                href="/products"
                className="relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-3xl text-black bg-white overflow-hidden group"
              >
                <span className="absolute inset-0 bg-linear-to-r from-violet-400 via-indigo-500 to-cyan-300 opacity-40 blur-xl group-hover:opacity-100 transition duration-500 animate-[gradient_4s_linear_infinite]" />
                <span className="absolute inset-0 border border-white/70 rounded-3xl pointer-events-none" />
                <span className="relative z-10">View Products</span>
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-3xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <Image
              src={hero}
              alt="ARIGEN biotechnology illustration"
              className="w-full h-72 md:h-96 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
