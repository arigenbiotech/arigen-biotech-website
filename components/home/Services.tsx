import { Sprout, Microscope, Droplets, Sparkles, Pill } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Sustainable Agriculture & Nano-Fertilizers",
      description: "Smart nano-fertilizers that optimize crop nutrition, enhance yield, and promote sustainable farming practices.",
      icon: Sprout,
    },
    {
      title: "Diagnostics & Biosensing Technologies",
      description: "Advanced diagnostic tools and biosensors for rapid, accurate detection of diseases and biomarkers.",
      icon: Microscope,
    },
    {
      title: "Environmental Remediation & Water Treatment",
      description: "Innovative nanotechnology solutions for water purification, soil decontamination, and pollution control.",
      icon: Droplets,
    },
    {
      title: "Cosmetic Formulations",
      description: "High-performance cosmetic products using nanotechnology for enhanced delivery and skin benefits.",
      icon: Sparkles,
    },
  ];

  return (
    <section id="services" className="bg-slate-100 py-14 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="inline-block px-4 py-1 mb-2 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            What We Do
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Transforming challenges into opportunities through innovative nanotechnology solutions.
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide">
            {services.map((service) => (
              <div
                key={service.title}
                className="shrink-0 w-72 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 snap-start"
              >
                <div className="text-blue-600 mb-4">
                  <service.icon size={40} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={48} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}