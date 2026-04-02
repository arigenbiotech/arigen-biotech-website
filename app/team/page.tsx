import Image from "next/image";
import { teamImages } from "@/public/images/team";

const team = [
  {
    name: "Dr. Mohammad Faiyaz Anwar (Ph.D.)",
    title: "Founder & MD | Nanochemist & R&D Lead",
    details:
      "Dr. Anwar is the founder and visionary behind the company, leading groundbreaking research in nanomaterials and nanomedicine. He drives innovation and has successfully translated scientific discoveries into patented, market-ready solutions.",
    image: teamImages.fayaz,
  },
  {
    name: "Dr. Abdul Samad Abdul Wahed",
    title: "Director, Healthcare & Safety",
    details:
      "Dr. Abdul Wahed ensures healthcare initiatives and safety protocols meet the highest standards. He drives programs that protect employees and end-users while supporting innovation in health solutions.",
    image: teamImages.samad,
  },
  {
    name: "Kafil Ahemad Husain Khan Pathan",
    title: "Director, Marketing",
    details:
      "Kafil Pathan leads the company’s marketing strategy, building brand presence and driving customer engagement. He ensures that the organization’s products and innovations reach the right audience effectively.",
    image: teamImages.kafil,
  },
  {
    name: "Singal Abutalha Gani Khan",
    title: "Director, Innovation & Technical Support",
    details:
      "Singal Khan bridges research innovation with technical support, turning breakthroughs into practical, market-ready solutions. He provides expert guidance for technical problem-solving.",
    image: teamImages.abutala,
  },
  {
    name: "Imran Rauf Shaikh",
    title: "Director, Agritech & Field Operations",
    details:
      "Imran Shaikh leads agritech projects and field operations, integrating innovative solutions for sustainable farming. He focuses on efficiency and delivering impactful results in the field.",
    image: teamImages.imran,
  },
  {
    name: "Salim Pashu Pathan",
    title: "Director, Finance & Compliance",
    details:
      "Salim Pathan oversees financial planning, risk management, and regulatory compliance. His leadership ensures sustainable growth and organizational stability.",
    image: teamImages.salim,
  },
  {
    name: "Mohammad Razique Shaikh",
    title: "Director, Innovation & Quality",
    details:
      "Mohammad Shaikh leads innovation and quality assurance, implementing advanced technologies and maintaining rigorous standards. He ensures all products are reliable and high-performance.",
    image: teamImages.rarizque,
  },
];

export default function TeamPage() {
  return (
    <section className="bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Our Leadership
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Meet the ARIGEN Biotech Leadership Team
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            A team of industry veterans and scientific leaders driving
            breakthrough innovation in nanobiotechnology and sustainable
            agriculture.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="group bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-xl transition ease-in-out duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h2 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h2>
                <p className="text-sm text-blue-600 font-medium mt-1 mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {member.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
