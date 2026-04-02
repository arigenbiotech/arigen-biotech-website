import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: MdEmail,
      label: "Email",
      value: "contact@arigenbiotech.com",
      href: "mailto:contact@arigenbiotech.com",
    },
    {
      icon: MdPhone,
      label: "Phone",
      value: "+91 8860816199",
      href: "tel:+918860816199",
    },
    {
      icon: MdLocationOn,
      label: "Address",
      value: "Sillod, Aurangabad, India",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-100 pt-14 pb-4">
      <div className="container mx-auto px-8">
        {/* Brand & Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                <Image
                  src="/image.png"
                  alt="Arigen Biotech logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">ARIGEN Biotech</h3>
                <p className="text-xs text-slate-400">Advancing Biotech</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Pioneering nanotechnology solutions for sustainable agriculture,
              healthcare, and environmental challenges.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Box */}
          <div className="lg:col-span-2 bg-slate-800/60 rounded-2xl p-8">
            <h4 className="text-white font-semibold mb-6 text-lg">Contact Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="group p-4 bg-slate-700/50 hover:bg-blue-600/20 rounded-xl transition-colors"
                  >
                    <div className="flex gap-4">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                          {info.label}
                        </p>
                        <p className="text-white font-semibold text-sm mt-1 break-all">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© {currentYear} ARIGEN Biotech Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

        {/* Brand attribution */}
        <div className="mt-6 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
          Design and Developed by{' '}
          <Link href="https://devalizaid.me" className="text-blue-400 hover:text-blue-300 font-semibold" target="_blank" rel="noopener noreferrer">
            Shaikh Ali Zaid
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}
