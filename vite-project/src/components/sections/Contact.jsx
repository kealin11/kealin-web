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
      `Portfolio inquiry from ${formData.name || "Website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
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

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[30px] border border-white/6 bg-[linear-gradient(180deg,rgba(6,8,6,0.99),rgba(5,7,5,0.98))] px-5 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:rounded-[36px] sm:px-8 sm:py-16 lg:px-12 lg:py-18 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[1080px] text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8dff69]/18 bg-[#152014] px-5 py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:text-lg">
            <MessageSquareMore size={18} />
            <span>Get In Touch</span>
          </div>

          <h2 className="mt-6 text-[2.45rem] font-light tracking-[-0.05em] text-white sm:mt-8 sm:text-[4.7rem] lg:text-[5.8rem]">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-[960px] text-base leading-[1.7] text-white/56 sm:mt-5 sm:text-[1.5rem] lg:text-[1.8rem]">
            Have a project in mind? Let&apos;s discuss how we can bring your
            ideas to life.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 xl:mt-16 xl:grid-cols-[1.08fr_0.92fr]">
          <ScrollReveal className="interactive-card rounded-[26px] border border-white/7 bg-[#151716]/96 px-5 py-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:rounded-[30px] sm:px-8 sm:py-9">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-white/88 sm:mb-4 sm:text-lg"
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
                  className="h-16 w-full rounded-[18px] border border-white/8 bg-[#1b1f1b] px-5 text-base text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#8dff69]/35 sm:h-18 sm:rounded-[20px] sm:px-6 sm:text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-medium text-white/88 sm:mb-4 sm:text-lg"
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
                  className="h-16 w-full rounded-[18px] border border-white/8 bg-[#1b1f1b] px-5 text-base text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#8dff69]/35 sm:h-18 sm:rounded-[20px] sm:px-6 sm:text-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-white/88 sm:mb-4 sm:text-lg"
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
                  className="w-full rounded-[18px] border border-white/8 bg-[#1b1f1b] px-5 py-5 text-base text-white outline-none transition duration-300 placeholder:text-white/28 focus:border-[#8dff69]/35 sm:rounded-[20px] sm:px-6 sm:text-lg"
                />
              </div>

              <button
                type="submit"
                className="flex h-16 w-full items-center justify-center gap-3 rounded-[18px] bg-[linear-gradient(90deg,#1e4320,#78ff51)] px-6 text-lg font-medium text-white transition duration-300 hover:brightness-110 sm:h-18 sm:rounded-[20px] sm:text-xl"
              >
                <span>Send Message</span>
                <Send size={22} />
              </button>

              {isSubmitted ? (
                <div className="rounded-[18px] border border-[#1f5e2a] bg-[#102717] px-5 py-4 text-base text-[#39d96b] sm:rounded-[20px] sm:px-6 sm:py-5 sm:text-lg">
                  Message sent successfully! I&apos;ll get back to you soon.
                </div>
              ) : null}
            </form>
          </ScrollReveal>

          <ScrollReveal className="pt-1 sm:pt-2 xl:pt-1" delay={120}>
            <h3 className="text-[2rem] font-medium tracking-[-0.04em] text-white sm:text-[3rem]">
              Let&apos;s Connect
            </h3>
            <p className="mt-4 max-w-[28ch] text-base leading-[1.7] text-white/58 sm:mt-5 sm:max-w-[24ch] sm:text-[1.45rem]">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to reach
              out.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-6">
              <article className="interactive-card flex items-start gap-4 rounded-[24px] border border-white/7 bg-[#151716]/96 px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:items-center sm:gap-5 sm:rounded-[28px] sm:px-8 sm:py-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#416535] bg-[#1d3118] text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]">
                  <Mail size={28} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/52 sm:text-lg">Email</p>
                  <a
                    href="mailto:kealindaniels24@gmail.com"
                    className="mt-1 block break-all text-lg font-medium leading-tight text-white transition duration-300 hover:text-[#8dff69] sm:text-[1.5rem]"
                  >
                    kealindaniels24@gmail.com
                  </a>
                </div>
              </article>

              <article className="interactive-card flex items-start gap-4 rounded-[24px] border border-white/7 bg-[#151716]/96 px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:items-center sm:gap-5 sm:rounded-[28px] sm:px-8 sm:py-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#416535] bg-[#1d3118] text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]">
                  <MapPin size={28} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/52 sm:text-lg">Location</p>
                  <p className="mt-1 text-lg font-medium leading-tight text-white sm:text-[1.5rem]">
                    Johannesburg, South Africa
                  </p>
                </div>
              </article>

              <article className="interactive-card flex items-start gap-4 rounded-[24px] border border-white/7 bg-[#151716]/96 px-5 py-5 shadow-[0_16px_40px_rgba(0,0,0,0.14)] sm:items-center sm:gap-5 sm:rounded-[28px] sm:px-8 sm:py-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-[#416535] bg-[#1d3118] text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]">
                  <Phone size={28} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-white/52 sm:text-lg">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:0631437911"
                    className="mt-1 block break-all text-lg font-medium leading-tight text-white transition duration-300 hover:text-[#8dff69] sm:text-[1.5rem]"
                  >
                    0631437911
                  </a>
                </div>
              </article>
            </div>

            <div className="mt-10 sm:mt-12">
              <p className="text-base text-white/62 sm:text-[1.35rem]">
                Connect with me
              </p>

              <div className="mt-4 flex items-center gap-4 sm:mt-5 sm:gap-5">
                <a
                  href="https://github.com/kealin11"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]"
                >
                  <FiGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kealin-daniels-1ab1b3332/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-white/8 bg-[#17191a] text-white/82 transition duration-300 hover:border-[#8dff69]/35 hover:text-[#8dff69] sm:h-18 sm:w-18 sm:rounded-[20px]"
                >
                  <FiLinkedin size={24} />
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
