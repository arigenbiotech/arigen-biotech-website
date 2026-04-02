import aboutImage from "@/public/images/about.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="g-linear-to-b from-blue-50 to-white pb-12 pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <Image
                src={aboutImage}
                alt="ARIGEN Biotech nanotechnology research"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advancing Nanotechnology for a Sustainable Future
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                ARIGEN Biotech Pvt. Ltd. is a DPIIT-recognized biotechnology
                startup transforming nanotechnology research into real-world
                solutions. Founded in 2025, we combine over 16 years of
                scientific expertise with innovation-driven products that
                address global challenges in agriculture, healthcare, and
                environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Foundation */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="max-w-4xl mx-auto">
                <p className="md:text-lg text-gray-700 mb-4 leading-relaxed">
                  ARIGEN Biotech was founded with a clear vision—to translate advanced nanotechnology
                  research into impactful, real-world solutions. Backed by over 16 years of the founder's
                  scientific expertise, the company is built on a legacy of innovation, interdisciplinary research,
                  and practical problem-solving.
                </p>
                <p className="md:text-lg text-gray-700 leading-relaxed">
                  Leveraging deep academic experience and global scientific exposure, ARIGEN Biotech is
                  dedicated to developing next-generation nanomaterials and biopolymer solutions that drive
                  progress in agriculture, healthcare, diagnostics, and environmental sustainability.
                </p>
              </div>
            </div>

            {/* Leadership & Expertise */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-10 mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Leadership & Scientific Foundation
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Founder's Research Experience</h4>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Founded on deep scientific expertise, our organization is led by a nanochemist with research
                    experience spanning premier institutions including NCL Pune, IIT Delhi, AIIMS New Delhi,
                    Jamia Hamdard, Jamia Millia Islamia, and the Department of Science & Technology (Vigyan
                    Prasar), Government of India.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    With international research exposure in the USA and South Korea, our leadership combines
                    academic excellence with innovation-driven thinking to address critical challenges in
                    nanobiotechnology, healthcare, and environmental engineering.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Scientific Foundation</h4>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Rooted in advanced research in nanotechnology, nanomedicine, and environmental engineering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Extensive academic and research experience across leading institutions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>Leveraging interdisciplinary expertise for innovative, scalable solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">16+</div>
                <p className="text-gray-700 font-medium">Years of Research Experience</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
                <p className="text-gray-700 font-medium">International Publications</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                <p className="text-gray-700 font-medium">Active Patents</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Research & Innovation
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Publication Record */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Publication Record</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Demonstrating a strong commitment to high-impact research and scientific
                  advancement, the founder has published extensively in leading international peer-reviewed journals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                  <div>
                    <p>• International Journal of Nanomedicine</p>
                    <p>• ACS Omega</p>
                    <p>• Langmuir</p>
                    <p>• RSC Advances</p>
                    <p>• Polymer Chemistry</p>
                    <p>• Journal of Periodontology</p>
                  </div>
                  <div>
                    <p>• Protoplasma</p>
                    <p>• Journal of Trace Elements in Medicine and Biology</p>
                    <p>• Journal of Biomaterials Applications</p>
                    <p>• Neuroscience Letters</p>
                    <p>• Drug Development and Industrial Pharmacy</p>
                    <p className="text-gray-500 italic">...and others</p>
                  </div>
                </div>
              </div>

              {/* Proprietary Products */}
              <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proprietary Products</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our flagship innovations embody our expertise in advanced material design and formulation science.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                    <span className="text-2xl mr-3">🌱</span>
                    <div>
                      <p className="font-semibold text-gray-900">ARIPRO™</p>
                      <p className="text-sm text-gray-600">Smart Organic Fertilizer</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl mr-3">🌾</span>
                    <div>
                      <p className="font-semibold text-gray-900">ARIGRO™</p>
                      <p className="text-sm text-gray-600">NPK Nano Fertilizer</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-purple-50 rounded-lg">
                    <span className="text-2xl mr-3">💊</span>
                    <div>
                      <p className="font-semibold text-gray-900">ARIM™</p>
                      <p className="text-sm text-gray-600">Biomedical Formulations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Highlights */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Professional Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">16+ years of expertise in nanotechnology and biotechnology research</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Extensive publication record in high-impact international journals</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Experience across leading institutions such as CSIR, IIT Delhi, and AIIMS New Delhi</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Global research exposure with scientific engagement in the USA and South Korea</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Strong innovation focus with successful translation of research into applied technologies</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">✓</span>
                    <span className="text-gray-700">Multi-sector Applications — Healthcare, Agriculture & Environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Milestones & Recognition */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Key Milestones & Recognition</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-3">2025</div>
                <p className="text-blue-100">Established as DPIIT-recognized biotech startup</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-3">16+</div>
                <p className="text-blue-100">Years of founder-led research experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-3">3</div>
                <p className="text-blue-100">Multi-sector applications</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <div className="text-4xl font-bold mb-3">DPIIT</div>
                <p className="text-blue-100">Recognized by Government of India</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Additional Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <div className="text-2xl font-bold mb-2">1 Book</div>
                  <p className="text-blue-100">Authored by founder</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">2 Chapters</div>
                  <p className="text-blue-100">Book chapters contributed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2">Deep Roots</div>
                  <p className="text-blue-100">Academic foundation from leading national institutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
