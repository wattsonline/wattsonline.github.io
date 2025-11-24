import { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Navbar from './components/Navbar';
import Services from './components/Services';
import {
  Archive,
  ArrowRight,
  Mail,
  ShieldCheck,
  Globe,
  BookOpenCheck,
  BookOpen,
  Calendar,
  Clock,
  LibraryBig,
  CalendarRange,
  MapPin,
  Mic,
  GraduationCap,
} from 'lucide-react';

// --- Chronology types & content ---

type ChronologyItem = {
  period: string;
  title: string;
  org: string;
  location: string;
  summary: string;
  highlights: string[];
};

type ChronologyContent = {
  heading: string;
  subheading: string;
  highlightTitle: string;
  highlightBullets: string[];
  timelineTitle: string;
  items: ChronologyItem[];
  educationTitle: string;
  educationItems: string[];
  culturalTitle: string;
  culturalItems: string[];
};

const CHRONOLOGY_CONTENT: Record<Language, ChronologyContent> = {
  en: {
    heading: 'Team Experience Timeline',
    subheading:
      'Over two decades of combined experience at the intersection of digital libraries, institutional memory and strategic communication for public, academic and international organisations.',
    highlightTitle: "Why organisations work with the Watt's Online team",
    highlightBullets: [
      '20+ years of combined experience stewarding institutional knowledge in complex, multicultural environments.',
      'Deep expertise in library systems, corporate finance tools, metadata and digital archiving — from legacy collections to born-digital assets.',
      'Multilingual service (FR / EN / ES) with strong understanding of international and regional contexts.',
      'Proven track record in digital transformation, governance support and publication workflows for boards and senior leadership.',
    ],
    timelineTitle: 'Professional milestones',
    items: [
      {
        period: '2008 – Present',
        title: 'Digital Library & Information Management Leadership',
        org: 'International & regional organisations',
        location: 'Multi-country / remote',
        summary:
          'Leading digital transformation of institutional knowledge bases, publication workflows and library services for public and international bodies.',
        highlights: [
          'Design and implementation of document digitisation and long-term digital preservation strategies.',
          'Management of digital libraries and repositories with robust metadata standards and quality control.',
          'Administration and optimisation of integrated library systems (e.g. Koha) and related knowledge tools.',
          'Support for official publication workflows, board documentation and executive decision-making.',
          'Use of finance and planning systems to track budgets, purchase orders and payments for information services.',
        ],
      },
      {
        period: '2007 – 2008',
        title: 'Public Media Library & Audiovisual Services',
        org: 'Municipal media library',
        location: 'Public cultural institution',
        summary:
          'Development and management of a public media library’s audiovisual offer, combining collection strategy, public service and cultural outreach.',
        highlights: [
          'Set up of an audiovisual department from the ground up (space design, furniture, acquisition planning).',
          'Management of acquisitions and systematic weeding for books, music and film collections.',
          'Cataloguing of large multimedia collections using international standards, improving access for diverse audiences.',
          'Design of bilingual cultural programmes and events, increasing community engagement and library usage.',
        ],
      },
      {
        period: '2001 – 2007',
        title: 'Broadcast & Communications Production',
        org: 'Radio & media organisations',
        location: 'Broadcast & media sector',
        summary:
          'Production of multilingual audio content and communication campaigns for radio and media outlets.',
        highlights: [
          'Production and hosting of live radio programmes across musical and socio-cultural formats.',
          'Interviews with national and international guests, socio-economic actors and public figures.',
          'Technical production and delivery of news segments and programme content.',
          'Creation of promotional campaigns (jingles, spots, voice-over) contributing to audience growth.',
        ],
      },
    ],
    educationTitle: 'Education & qualifications',
    educationItems: [
      'Advanced studies in Communication & Public Relations – strategic communication, crisis management, branding, protocol.',
      'University-level training in applied foreign languages and intercultural communication.',
      'Formal qualifications in library and information services.',
      'Additional certifications in professional coaching and related disciplines.',
    ],
    culturalTitle: 'Cultural engagement & sector insight',
    culturalItems: [
      'Long-standing engagement with arts, culture and heritage initiatives.',
      'Experience creating and promoting cultural projects with regional and international visibility.',
      'Deep familiarity with bridging cultural, linguistic and institutional contexts in day-to-day work.',
    ],
  },

  fr: {
    heading: "Chronologie de l’expérience de l’équipe",
    subheading:
      "Plus de vingt ans d’expérience cumulée entre bibliothèques numériques, mémoire institutionnelle et communication stratégique pour des organisations publiques, académiques et internationales.",
    highlightTitle: "Pourquoi les organisations travaillent avec l’équipe Watt’s Online",
    highlightBullets: [
      "Plus de 20 ans d’expérience cumulée en gestion de l’information dans des environnements complexes et multiculturels.",
      "Solide expertise en systèmes de bibliothèque, outils financiers, métadonnées et archivage numérique – des fonds historiques aux contenus nativement numériques.",
      "Services multilingues (FR / EN / ES) et excellente compréhension des contextes institutionnels et régionaux.",
      "Expérience avérée en transformation numérique, soutien à la gouvernance et gestion des circuits de publication pour les directions et conseils d’administration.",
    ],
    timelineTitle: 'Étapes clés',
    items: [
      {
        period: '2008 – Aujourd’hui',
        title: 'Pilotage de bibliothèques numériques & gestion de l’information',
        org: 'Organisations internationales et régionales',
        location: 'Multi-pays / à distance',
        summary:
          "Conception et pilotage de stratégies de gestion documentaire, de bibliothèques numériques et de flux de publication pour des organismes publics et internationaux.",
        highlights: [
          "Mise en place de projets de numérisation et de préservation à long terme des documents et archives.",
          "Gestion de dépôts numériques avec des standards de métadonnées rigoureux et un contrôle qualité continu.",
          "Administration et optimisation de systèmes intégrés de bibliothèque (par ex. Koha) et d’outils de gestion des connaissances.",
          "Soutien aux processus de publication officielle, aux documents de conseil et aux décisions de direction.",
          "Utilisation d’outils financiers et de planification pour suivre budgets, engagements et paiements liés aux services d’information.",
        ],
      },
      {
        period: '2007 – 2008',
        title: 'Médiathèque publique & services audiovisuels',
        org: 'Médiathèque municipale',
        location: 'Institution culturelle publique',
        summary:
          "Développement et gestion de l’offre audiovisuelle d’une médiathèque, entre stratégie documentaire, service public et action culturelle.",
        highlights: [
          "Création d’un pôle audiovisuel (aménagement des espaces, mobilier, politique d’acquisition).",
          "Gestion des acquisitions et du désherbage pour les livres, CD et DVD.",
          "Catalogage de fonds multimédias importants selon les standards internationaux.",
          "Conception de programmes culturels bilingues augmentant la fréquentation et l’engagement du public.",
        ],
      },
      {
        period: '2001 – 2007',
        title: 'Production radio & communication',
        org: 'Organismes de radio et médias',
        location: 'Secteur de la diffusion',
        summary:
          "Production de contenus audio multilingues et de campagnes de communication pour des radios et médias.",
        highlights: [
          "Production et animation d’émissions en direct sur des thématiques musicales et socio-culturelles.",
          "Interviews d’invités nationaux et internationaux issus de divers secteurs.",
          "Production technique et mise à l’antenne de journaux et programmes.",
          "Création de campagnes promotionnelles (jingles, spots, voix-off) contribuant à la croissance de l’audience.",
        ],
      },
    ],
    educationTitle: 'Formation & certifications',
    educationItems: [
      "Études avancées en communication et relations publiques – communication stratégique, gestion de crise, image de marque, protocole.",
      "Formation universitaire en langues étrangères appliquées et communication interculturelle.",
      "Qualifications formelles en bibliothéconomie et sciences de l’information.",
      "Certifications complémentaires en coaching professionnel et disciplines associées.",
    ],
    culturalTitle: 'Engagement culturel & compréhension sectorielle',
    culturalItems: [
      "Engagement de longue date dans des projets liés aux arts, à la culture et au patrimoine.",
      "Expérience dans la création et la promotion de projets culturels à visibilité régionale et internationale.",
      "Capacité à naviguer au quotidien entre différents contextes culturels, linguistiques et institutionnels.",
    ],
  },
};

// --- Chronology component ---

function Chronology({ lang }: { lang: Language }) {
  const data = CHRONOLOGY_CONTENT[lang];

  return (
    <section id="chronology" className="py-24 bg-library-paper/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-4">
            {/* Team badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 border border-slate-200 shadow-sm text-xs font-medium text-slate-600">
              <LibraryBig size={16} className="mr-2 text-library-secondary" />
              <span>
                The Watt&apos;s Online team · Digital information &amp; knowledge
                management
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-library-primary">
              {data.heading}
            </h2>

            <p className="text-slate-700 text-sm font-semibold uppercase tracking-wide">
              Digital libraries · Knowledge governance · Strategic communication ·
              Public &amp; international institutions
            </p>

            <p className="text-slate-600 text-lg leading-relaxed">
              {data.subheading}
            </p>

            <p className="text-slate-500 text-sm">
              FR / EN / ES · Remote collaboration with institutions worldwide.
            </p>
          </div>

          {/* “Why work with the team” card */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-library-secondary/15 flex items-center justify-center mr-3">
                <LibraryBig size={22} className="text-library-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800">
                {data.highlightTitle}
              </h3>
            </div>
            <ul className="space-y-3 text-sm md:text-base text-slate-600">
              {data.highlightBullets.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-library-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline + side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <CalendarRange size={20} className="text-library-secondary mr-2" />
              <h3 className="text-xl font-semibold text-slate-800">
                {data.timelineTitle}
              </h3>
            </div>

            <div className="relative border-l border-slate-200 ml-3 pl-6 space-y-10">
              {data.items.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-3.5 top-1 w-3 h-3 rounded-full bg-library-secondary border-2 border-library-paper" />

                  <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-sm text-slate-500 mt-1">
                          <LibraryBig size={16} className="mr-1.5" />
                          <span className="mr-3">{item.org}</span>
                          <span className="mx-2 text-slate-300">•</span>
                          <MapPin size={14} className="mr-1" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs font-semibold uppercase tracking-wide text-library-secondary bg-library-secondary/10 px-3 py-1 rounded-full">
                        <CalendarRange size={14} className="mr-1" />
                        {item.period}
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-slate-600 mb-4">
                      {item.summary}
                    </p>

                    <ul className="space-y-2 text-sm text-slate-600">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mt-1 mr-2 h-1 w-3 rounded bg-library-primary/50" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + cultural cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
              <div className="flex items-center mb-3">
                <GraduationCap
                  size={20}
                  className="text-library-secondary mr-2"
                />
                <h3 className="text-base font-semibold text-slate-800">
                  {data.educationTitle}
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {data.educationItems.map((ed, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-library-secondary/70" />
                    <span>{ed}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-library-primary text-white rounded-2xl shadow-md p-6 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="w-32 h-32 bg-white rounded-full blur-3xl absolute -top-8 -right-6" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <Mic size={20} className="mr-2" />
                  <h3 className="text-base font-semibold">
                    {data.culturalTitle}
                  </h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-100/90">
                  {data.culturalItems.map((c, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mt-1 mr-2 h-1.5 w-1.5 rounded-full bg-library-secondary/70" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center mt-4 text-xs uppercase tracking-wide text-slate-200">
                  <Globe size={14} className="mr-1.5" />
                  <span>
                    Cultural awareness &amp; institutional context – applied to projects
                    worldwide.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Main App ---

function App() {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  const openBooking = () => {
    window.open('https://calendly.com/wattsonline', '_blank');
  };

  const t = CONTENT[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        lang={lang}
        toggleLang={toggleLang}
        openBooking={openBooking}
        t={t.nav}
      />

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center bg-library-paper overflow-hidden">
        {/* Abstract Library Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="grid grid-cols-12 gap-4 h-full transform -skew-y-6 scale-110">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="bg-black h-full w-full" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-library-secondary">
            <Globe size={16} className="mr-2" />
            <span>
              {lang === 'en' ? 'Worldwide Service' : 'Service international'}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-library-primary mb-8 leading-tight tracking-tight">
            {t.hero.title}
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Main Call to Action */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openBooking}
              className="bg-library-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-library-secondary transition-colors flex items-center group shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              <Calendar size={20} className="mr-3" />
              {t.hero.cta}
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </button>
            <a
              href="#services"
              className="px-10 py-4 rounded-full font-bold text-library-primary border-2 border-library-primary/10 hover:border-library-primary/30 hover:bg-white transition-all"
            >
              {t.hero.tagline}
            </a>
          </div>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 120L1440 120L1440 0C1440 0 1082.5 92.5 720 92.5C357.5 92.5 0 0 0 0L0 120Z"
              fill="#fcfbf9"
            />
          </svg>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-24 bg-library-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-library-primary relative inline-block">
                  {t.about.title}
                  <div className="absolute -z-10 top-1/2 -right-8 w-24 h-24 bg-library-secondary/10 rounded-full blur-2xl" />
                </h2>
                <div className="font-sans text-slate-600 space-y-6 text-lg leading-relaxed">
                  <p>{t.about.p1}</p>
                  <p className="border-l-4 border-library-secondary pl-6 italic text-slate-800">
                    {t.about.p2}
                  </p>
                  <p>{t.about.p3}</p>
                </div>

                {/* Visual Stats / Trust Indicators */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <ShieldCheck
                      className="text-library-secondary mb-2"
                      size={24}
                    />
                    <div className="text-sm font-bold text-slate-800">
                      Confidentiality
                    </div>
                    <div className="text-xs text-slate-500">
                      Strict protocol
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <Archive
                      className="text-library-secondary mb-2"
                      size={24}
                    />
                    <div className="text-sm font-bold text-slate-800">
                      Archiving
                    </div>
                    <div className="text-xs text-slate-500">ISO standards</div>
                  </div>
                </div>
              </div>

              <div className="bg-library-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

                <h3 className="text-2xl font-serif font-bold mb-8 border-b border-white/20 pb-4">
                  {t.about.expertiseTitle}
                </h3>
                <ul className="space-y-6">
                  {t.about.expertiseList.map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <span className="w-8 h-8 rounded-full bg-library-secondary/20 flex items-center justify-center mr-4 group-hover:bg-library-secondary transition-colors">
                        <BookOpenCheck size={16} />
                      </span>
                      <span className="text-lg font-light tracking-wide">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chronology Section */}
        <Chronology lang={lang} />

        {/* Services Section */}
        <Services t={t.services} openBooking={openBooking} />

        {/* Contact / Booking Section */}
        <section id="contact" className="py-24 bg-white relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-library-primary rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="md:w-1/2 p-12 text-white flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-library-secondary/10 pointer-events-none" />
                <div className="relative z-10">
                  <h2 className="text-4xl font-serif font-bold mb-6">
                    {t.contact.title}
                  </h2>
                  <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                    {t.contact.desc}
                  </p>

                  <div className="flex flex-col space-y-4">
                    <button
                      onClick={openBooking}
                      className="bg-library-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-library-primary transition-all shadow-lg flex items-center justify-center md:justify-start w-fit"
                    >
                      <Calendar size={20} className="mr-3" />
                      {t.contact.button}
                    </button>

                    <div className="flex items-center space-x-4 text-slate-400 py-2">
                      <div className="h-px w-12 bg-slate-600" />
                      <span className="italic font-serif">
                        {t.contact.or}
                      </span>
                      <div className="h-px w-12 bg-slate-600" />
                    </div>

                    <a
                      href="mailto:wattsonlinenow@gmail.com"
                      className="flex items-center text-slate-300 hover:text-white transition-colors"
                    >
                      <Mail size={18} className="mr-3" />
                      <span>{t.contact.emailDetails}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Visual - Abstract Calendar */}
              <div className="md:w-1/2 bg-slate-100 p-12 flex items-center justify-center">
                <div
                  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer"
                  onClick={openBooking}
                >
                  <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      calendly.com
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-100 rounded w-3/4" />
                    <div className="h-20 bg-blue-50 border-l-4 border-blue-500 rounded p-3">
                      <div className="flex items-center text-blue-700 mb-1">
                        <Clock size={14} className="mr-1" />
                        <span className="text-xs font-bold">
                          10:00 AM - Discovery Call
                        </span>
                      </div>
                      <div className="text-xs text-blue-600/70">
                        Digital Strategy Discussion
                      </div>
                    </div>
                    <div className="h-4 bg-slate-100 rounded w-1/2" />
                    <div className="h-4 bg-slate-100 rounded w-full" />
                  </div>
                  <div className="mt-6 text-center">
                    <span className="text-sm font-bold text-library-secondary uppercase tracking-wider hover:underline">
                      View Availability
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-library-primary text-slate-300 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <BookOpen size={20} className="text-library-secondary" />
              <span className="font-serif font-bold text-white text-lg">
                DigitalLibrarian
              </span>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {t.footer.rights}
            </p>
          </div>

          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
