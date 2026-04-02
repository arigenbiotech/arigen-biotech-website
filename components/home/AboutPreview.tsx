import aboutImage from "@/public/images/about.png";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section id="about" className="bg-white py-14 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="h-96 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <Image
                src={aboutImage}
                alt="Representative in-house nano-formulations"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/20" />
          </div>
          <div className="text-center">
            <p className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight mb-3">
              Advanced Nanobiotechnology for Sustainable Agriculture, Health &
              Environment
            </h2>
            <p className="text-slate-600 max-w-3xl mb-6">
              ARIGEN Biotech Pvt. Ltd. is a DPIIT-recognized biotechnology
              startup founded in 2025, built on over 16 years of individual
              research experience in nanotechnology, biotechnology, and advanced
              materials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
