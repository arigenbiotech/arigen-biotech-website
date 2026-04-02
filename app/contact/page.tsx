import { FiMapPin, FiPhone, FiMail, FiClock, FiLinkedin, FiTwitter, FiFacebook } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
            Contact ARIGEN Biotech
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Reach out for partnership, research collaboration, product enquiries, or support.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <section className="max-h-fit bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Send us a message</h2>
            <form className="space-y-4" action="#" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="John Doe"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="name@example.com"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="+91 9000000000"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Subject</span>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="Ask us about ..."
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="Your project details, requirements, or questions"
                />
              </label>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-2 font-semibold text-white bg-blue-600 rounded-2xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Info */}
          <aside className="bg-white rounded-3xl p-6 shadow-xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-5">Contact Details</h2>

            <div className="grid grid-cols-1 gap-4 text-sm text-slate-700">
              <div className="flex gap-3 rounded-2xl bg-blue-50 p-4 border border-blue-100">
                <div className="h-10 w-10 rounded-full bg-blue-100 shrink-0 flex items-center justify-center text-blue-700">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Address</p>
                  <p className="mt-1 text-slate-600">57, 58, 59, Maharana Pratap Chowk, Sillod, Aurangabad-431112, Maharashtra, India</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-2xl bg-green-50 p-4 border border-green-100">
                <div className="h-10 w-10 shrink-0 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <FiPhone size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Phone</p>
                  <p className="mt-1 text-slate-600">+91 8860816199</p>
                </div>
              </div>

              <div className="flex gap-3 rounded-2xl bg-purple-50 p-4 border border-purple-100">
                <div className="h-10 w-10 shrink-0 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Email</p>
                  <p className="mt-1 text-slate-600 text-wrap">arigenbiotechpvtltd@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 text-white font-semibold px-4 py-2 hover:bg-blue-700 transition"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={18} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 text-white font-semibold px-4 py-2 hover:bg-sky-700 transition"
                  aria-label="Twitter"
                >
                  <FiTwitter size={18} />
                  <span className="hidden sm:inline">Twitter</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 text-white font-semibold px-4 py-2 hover:bg-violet-700 transition"
                  aria-label="Facebook"
                >
                  <FiFacebook size={18} />
                  <span className="hidden sm:inline">Facebook</span>
                </a>
              </div>
            </div>

            <div className="mt-7 p-4 rounded-2xl bg-slate-100 border border-slate-200">
              <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                <FiClock className="h-4 w-4" />
                <span>Business Hours</span>
              </div>
              <p className="text-sm text-slate-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-slate-600">Sat: 10:00 AM - 2:00 PM</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
