import { Mail, MapPin, MessageSquareMore, Phone, Send } from "lucide-react";
import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import ScrollReveal from "../animations/ScrollReveal";

const initialFormState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio inquiry from ${formData.name || "Website visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:kealindaniels24@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className="relative px-4 py-6 pb-20 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#183816]/16 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[36px] border border-white/6 bg-[linear-gradient(180deg,rgba(6,8,6,0.99),rgba(5,7,5,0.98))] px-6 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:px-8 lg:px-12 lg:py-18 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[1080px] text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8dff69]/18 bg-[#152014] px-5 py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:text-lg">
            <MessageSquareMore size={18} />
            <span>Get In Touch</span>
          </div>

          <h2 className="mt-8 text-[3.2rem] font-light tracking-[-0.05em] text-white sm:text-[4.7rem] lg:text-[5.8rem]">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-5 max-w-[960px] text-lg leading-[1.55] text-white/56 sm:text-[1.5rem] lg:text-[1.8rem]">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <ScrollReveal className="interactive-card rounded-[30px] border border-white/7 bg-[#151716]/96 px-6 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:px-8 sm:py-9">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-4 block text-lg font-medium text-white/88"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="h-18 w-full rounded-[20px] border border-white/8 bg-[#1b1f1b] px-6 text-lg text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#8dff69]/35"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-4 block text-lg font-medium text-white/88"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="h-18 w-full rounded-[20px] border border-white/8 bg-[#1b1f1b] px-6 text-lg text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#8dff69]/35"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-4 block text-lg font-medium text-white/88"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={6}
                  className="w-full rounded-[20px] border border-white/8 bg-[#1b1f1b] px-6 py-5 text-lg text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#8dff69]/35"
                />
              </div>

              <button
                type="submit"
                className="flex h-18 w-full items-center justify-center gap-3 rounded-[20px] bg-[linear-gradient(90deg,#1e4320,#78ff51)] px-6 text-xl font-medium text-white transition duration-300 hover:brightness-110"
              >
                <span>Send Message</span>
                <Send size={22} />
              </button>

              {isSubmitted ? (
                <div className="rounded-[20px] border border-[#1f5e2a] bg-[#102717] px-6 py-5 text-lg text-[#39d96b]">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              ) : null}
            </form>
          </ScrollReveal>

          <ScrollReveal className="pt-2 xl:pt-1" delay={120}>
            <h3 className="text-[2.4rem] font-medium tracking-[-0.04em] text-white sm:text-[3rem]">
              Let&apos;s Connect
            </h3>
            <p className="mt-5 max-w-[18ch] text-lg leading-[1.65] text-white/58 sm:max-w-[24ch] sm:text-[1.45rem]">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out!
            </p>

            <div className="mt-10 space-y-6">
              <article className="interactive-card flex items-center gap-5 rounded-[28px] border border-white/7 bg-[#151716]/96 px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:px-8">
                <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] border border-[#416535] bg-[#1d3118] text-[#8dff69]">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-base text-white/52 sm:text-lg">Email</p>
                  <a
                    href="mailto:kealindaniels24@gmail.com"
                    className="mt-1 block text-xl font-medium text-white transition duration-300 hover:text-[#8dff69] sm:text-[1.7rem]"
                  >
                    kealindaniels24@gmail.com
                  </a>
                </div>
              </article>

              <article className="interactive-card flex items-center gap-5 rounded-[28px] border border-white/7 bg-[#151716]/96 px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:px-8">
                <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] border border-[#416535] bg-[#1d3118] text-[#8dff69]">
                  <MapPin size={32} />
                </div>
                <div>
                  <p className="text-base text-white/52 sm:text-lg">Location</p>
                  <p className="mt-1 text-xl font-medium text-white sm:text-[1.7rem]">
                    Johannesburg, South Africa
                  </p>
                </div>
              </article>

              <article className="interactive-card flex items-center gap-5 rounded-[28px] border border-white/7 bg-[#151716]/96 px-6 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:px-8">
                <div className="flex h-18 w-18 shrink-0 items-center justify-center rounded-[20px] border border-[#416535] bg-[#1d3118] text-[#8dff69]">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-base text-white/52 sm:text-lg">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:0631437911"
                    className="mt-1 block text-xl font-medium text-white transition duration-300 hover:text-[#8dff69] sm:text-[1.7rem]"
                  >
                    0631437911
                  </a>
                </div>
              </article>
            </div>

            <div className="mt-12">
              <p className="text-lg text-white/62 sm:text-[1.35rem]">
                Connect with me
              </p>

              <div className="mt-5 flex items-center gap-5">
                <a
                  href="https://github.com/kealin11"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-18 w-18 items-center justify-center rounded-[20px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69]"
                >
                  <FiGithub size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kealin-daniels-1ab1b3332/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-18 w-18 items-center justify-center rounded-[20px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69]"
                >
                  <FiLinkedin size={28} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
