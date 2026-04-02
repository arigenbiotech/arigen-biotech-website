import { Atom, Pill, Microscope, Dna, Recycle } from "lucide-react";

export default function ResearchAreas() {
  const areas = [
    {
      title: "Nano Technology and Nano Chemistry",
      description: "Advanced nanotechnology and chemistry solutions for innovative material development and synthesis.",
      icon: Atom,
    },
    {
      title: "Nano Medicine and Drug Delivery",
      description: "Precision medicine through nanotechnology-enabled drug delivery systems and therapeutic innovations.",
      icon: Pill,
    },
    {
      title: "Bio Imaging and Drug Diagnostics",
      description: "Cutting-edge bio-imaging technologies and diagnostic tools for medical and research applications.",
      icon: Microscope,
    },
    {
      title: "Bio Polymer Science and Hydrogel",
      description: "Biodegradable polymers and hydrogel technologies for biomedical and environmental applications.",
      icon: Dna,
    },
    {
      title: "Environmental Nanotech",
      description: "Sustainable nanotechnology solutions for environmental remediation and ecological restoration.",
      icon: Recycle,
    },
  ];

  return (
    <section id="research" className="bg-white py-14 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Our Research
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Research Areas
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Exploring cutting-edge nanotechnology solutions for sustainable development and human health.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {areas.map((area) => (
              <div
                key={area.title}
                className="shrink-0 w-72 bg-slate-50 rounded-2xl p-6 border border-slate-200 snap-start"
              >
                <div className="text-blue-600 mb-4">
                  <area.icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-white transition-all duration-300 border border-slate-200 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <area.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {area.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}