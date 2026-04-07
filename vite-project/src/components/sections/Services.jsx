import {
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Gauge,
  Globe,
  HardDriveUpload,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites built for performance, scalability, and modern design.",
    icon: Globe,
    items: [
      "Business websites for corporate, portfolio, and service-based brands",
      "Fully responsive across mobile, tablet, and desktop",
      "Built with React, Next.js, or WordPress based on your needs",
      "SEO-friendly structure with fast-loading, optimized pages",
    ],
  },
  {
    id: "full-stack-apps",
    title: "Full-Stack Web Applications",
    description:
      "Custom systems tailored to real business processes and day-to-day workflows.",
    icon: Boxes,
    items: [
      "Login systems with authentication and user roles",
      "Dashboards and admin panels for internal operations",
      "Real-time data systems inspired by production check-in platforms",
      "Database design, integration, and API development",
    ],
    featured: true,
  },
  {
    id: "deployment-hosting",
    title: "Deployment & Hosting",
    description:
      "From development to live production, the technical setup is handled for you.",
    icon: HardDriveUpload,
    items: [
      "Domain and hosting setup",
      "Deployment using Vercel, cPanel, and similar platforms",
      "Environment configuration for production readiness",
      "Ongoing maintenance, updates, and backups",
    ],
  },
  {
    id: "redesign-optimization",
    title: "Website Redesign & Optimization",
    description:
      "A stronger visual experience and better performance for existing websites.",
    icon: Sparkles,
    items: [
      "UI and UX improvements",
      "Speed optimization and performance tuning",
      "Mobile responsiveness fixes",
      "Code cleanup and restructuring",
    ],
  },
  {
    id: "maintenance-support",
    title: "Website Maintenance & Support",
    description:
      "Reliable support to keep your website stable, secure, and up to date.",
    icon: Wrench,
    items: [
      "Updates and bug fixes",
      "Content updates",
      "Performance monitoring",
      "Security checks",
    ],
  },
];

const pricingPlans = [
  {
    title: "Basic Website",
    price: "R2,500 - R5,000",
    description: "A focused starter package for lean businesses and simple launches.",
    items: ["1-3 pages", "Mobile responsive", "Basic design", "Contact form"],
  },
  {
    title: "Standard Website",
    price: "R6,000 - R12,000",
    description: "A balanced package for brands that need more polish and flexibility.",
    items: [
      "4-8 pages",
      "Custom design",
      "SEO basics",
      "Performance optimization",
    ],
    featured: true,
  },
  {
    title: "Advanced / Business Website",
    price: "R12,000 - R25,000+",
    description: "Best for established businesses that need deeper functionality.",
    items: [
      "Custom UI and UX",
      "CMS or dynamic content",
      "Integrations for forms, APIs, and dashboards",
      "Deployment and hosting setup",
    ],
  },
  {
    title: "Custom Web Applications",
    price: "From R15,000+",
    description: "Built for full systems with workflows, users, and data.",
    items: [
      "Login systems",
      "Dashboards",
      "Tracking tools",
      "Pricing depends on complexity",
    ],
  },
];

const maintenancePlans = [
  { title: "Basic Support", price: "R500/month" },
  { title: "Standard Support", price: "R1,000/month" },
  { title: "Advanced Support", price: "R2,000+/month" },
];

const reasons = [
  "Real-world experience delivering production systems",
  "Full project handling from design through deployment",
  "Strong communication and client collaboration",
  "Modern tech stack including React, Next.js, and TypeScript",
  "Fast, responsive, and scalable solutions",
];

const Services = () => {
  return (
    <section id="services" className="relative px-4 py-6 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:78px_78px]" />
        <div className="absolute left-[8%] top-[10%] h-[420px] w-[420px] rounded-full bg-[#163212]/30 blur-3xl" />
        <div className="absolute right-[6%] top-[42%] h-[500px] w-[500px] rounded-full bg-[#28471a]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1720px] overflow-hidden rounded-[36px] border border-white/6 bg-[radial-gradient(circle_at_top,rgba(27,56,22,0.18),rgba(6,8,6,0.98)_38%,rgba(5,7,5,0.99)_100%)] px-6 py-16 shadow-[0_20px_60px_rgba(0,0,0,0.34)] sm:px-8 lg:px-12 lg:py-18 xl:px-16">
        <ScrollReveal className="mx-auto max-w-[1080px] text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#8dff69]/20 bg-[#162113]/82 px-5 py-3 text-sm font-medium uppercase tracking-[0.08em] text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] sm:text-lg">
            <BriefcaseBusiness size={18} />
            <span>Services & Pricing</span>
          </div>

          <h2 className="mx-auto mt-8 max-w-[15ch] text-[3.2rem] leading-[1.03] font-light tracking-[-0.05em] text-white sm:text-[4.7rem] lg:text-[5.8rem]">
            Clear offers for businesses that need polished digital products
          </h2>
          <p className="mx-auto mt-6 max-w-[960px] text-lg leading-[1.6] text-white/60 sm:text-[1.5rem] lg:text-[1.8rem]">
            From websites and custom systems to deployment, optimization, and
            support, every service is designed to help clients launch with more
            confidence and less technical friction.
          </p>
        </ScrollReveal>

        <div className="mt-18 grid gap-6 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal
                key={service.id}
                delay={index * 70}
                className={`group relative overflow-hidden rounded-[30px] border px-7 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:border-[#8dff69]/20 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] sm:px-8 sm:py-9 ${
                  service.featured
                    ? "border-[#36572b] bg-[linear-gradient(180deg,rgba(24,39,19,0.98),rgba(17,27,15,0.98))]"
                    : "border-white/7 bg-[linear-gradient(180deg,rgba(20,24,20,0.96),rgba(15,18,15,0.96))]"
                }`}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute right-[-10%] top-[-10%] h-44 w-44 rounded-full bg-[#8dff69]/8 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-18 w-18 items-center justify-center rounded-[22px] border border-[#446836] bg-[#20341b] text-[#8dff69] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
                      <Icon size={32} strokeWidth={2} />
                    </div>

                    {service.featured ? (
                      <span className="rounded-full border border-[#8dff69]/20 bg-[#8dff69]/10 px-4 py-2 text-sm font-medium text-[#8dff69]">
                        Popular Service
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-8 text-[2rem] font-medium tracking-[-0.04em] text-white sm:text-[2.35rem]">
                    {service.title}
                  </h3>
                  <p className="mt-4 max-w-[34ch] text-base leading-[1.7] text-white/60 sm:text-[1.22rem]">
                    {service.description}
                  </p>

                  <div className="mt-7 grid gap-3">
                    {service.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-[18px] border border-white/6 bg-black/14 px-4 py-4 transition duration-300 group-hover:border-white/10 group-hover:bg-black/20"
                      >
                        <BadgeCheck
                          size={18}
                          className="mt-0.5 shrink-0 text-[#8dff69]"
                        />
                        <p className="text-sm leading-6 text-white/72 sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-20 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal className="rounded-[32px] border border-white/7 bg-[linear-gradient(180deg,rgba(17,20,17,0.97),rgba(10,12,10,0.97))] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-9">
            <div className="flex items-center gap-3 text-[#8dff69]">
              <Gauge size={20} />
              <span className="text-sm font-medium uppercase tracking-[0.12em] sm:text-base">
                Pricing Guide
              </span>
            </div>

            <h3 className="mt-6 text-[2.4rem] font-light tracking-[-0.05em] text-white sm:text-[3.2rem]">
              Professional pricing without underselling the work
            </h3>
            <p className="mt-4 max-w-[50ch] text-base leading-[1.7] text-white/58 sm:text-[1.18rem]">
              These ranges are designed to give clients a clear starting point
              while still allowing room for project scope, content, features,
              and launch requirements.
            </p>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.title}
                  className={`group rounded-[26px] border p-6 transition duration-300 hover:-translate-y-1 ${
                    plan.featured
                      ? "border-[#4d7538] bg-[linear-gradient(180deg,rgba(30,45,24,0.98),rgba(20,29,17,0.98))] shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                      : "border-white/7 bg-[#151816]/96 hover:border-[#8dff69]/16"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-xl font-medium text-white sm:text-[1.45rem]">
                      {plan.title}
                    </h4>
                    {plan.featured ? (
                      <span className="rounded-full bg-[#8dff69]/12 px-3 py-1 text-xs font-medium text-[#8dff69]">
                        Recommended
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-[1.55rem] font-semibold tracking-[-0.03em] text-[#8dff69] sm:text-[2rem]">
                    {plan.price}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/58 sm:text-base">
                    {plan.description}
                  </p>
                  <div className="mt-5 space-y-3">
                    {plan.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#8dff69]" />
                        <p className="text-sm leading-6 text-white/72 sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-[#8dff69]/16 bg-[#11180f] px-5 py-5 sm:px-6">
              <p className="text-sm leading-6 text-white/74 sm:text-base">
                All pricing depends on project requirements. A custom quote will
                be provided after consultation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            <ScrollReveal
              delay={120}
              className="rounded-[32px] border border-white/7 bg-[linear-gradient(180deg,rgba(17,20,17,0.97),rgba(10,12,10,0.97))] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-9"
            >
              <div className="flex items-center gap-3 text-[#8dff69]">
                <ShieldCheck size={20} />
                <span className="text-sm font-medium uppercase tracking-[0.12em] sm:text-base">
                  Maintenance Plans
                </span>
              </div>

              <div className="mt-7 grid gap-4">
                {maintenancePlans.map((plan) => (
                  <div
                    key={plan.title}
                    className="group flex items-center justify-between gap-4 rounded-[22px] border border-white/7 bg-[#151816]/96 px-5 py-5 transition duration-300 hover:border-[#8dff69]/18 hover:bg-[#182018]"
                  >
                    <p className="text-base font-medium text-white sm:text-[1.15rem]">
                      {plan.title}
                    </p>
                    <p className="text-base font-semibold text-[#8dff69] sm:text-[1.2rem]">
                      {plan.price}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal
              delay={180}
              className="rounded-[32px] border border-[#355329] bg-[linear-gradient(180deg,rgba(24,38,19,0.98),rgba(16,24,14,0.98))] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:p-9"
            >
              <div className="flex items-center gap-3 text-[#8dff69]">
                <Sparkles size={20} />
                <span className="text-sm font-medium uppercase tracking-[0.12em] sm:text-base">
                  Why Work With Me
                </span>
              </div>

              <h3 className="mt-6 text-[2rem] font-light tracking-[-0.04em] text-white sm:text-[2.7rem]">
                Delivery-focused work backed by real project experience
              </h3>

              <div className="mt-7 space-y-4">
                {reasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-start gap-3 rounded-[20px] border border-white/7 bg-black/12 px-4 py-4"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-[#8dff69]"
                    />
                    <p className="text-sm leading-6 text-white/78 sm:text-base">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
