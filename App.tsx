import { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { Archive, ArrowRight, Mail, ShieldCheck, Globe, BookOpenCheck, BookOpen, Calendar, Clock } from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('en');
  
  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'fr' : 'en');
  };

  const openBooking = () => {
    window.open('https://calendly.com/wattsonline', '_blank');
  };

  const t = CONTENT[lang];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar lang={lang} toggleLang={toggleLang} openBooking={openBooking} t={t.nav} />

      {/* Hero Section - Modeled after elegant library catalogs */}
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
          <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-sm font-medium text-library-secondary animate-fade-in-up">
            <Globe size={16} className="mr-2" />
            <span>{lang === 'en' ? 'Worldwide Service' : 'Service International'}</span>
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
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1082.5 92.5 720 92.5C357.5 92.5 0 0 0 0L0 120Z" fill="#fcfbf9"/>
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
                  <div className="absolute -z-10 top-1/2 -right-8 w-24 h-24 bg-library-secondary/10 rounded-full blur-2xl"></div>
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
                    <ShieldCheck className="text-library-secondary mb-2" size={24} />
                    <div className="text-sm font-bold text-slate-800">Confidentiality</div>
                    <div className="text-xs text-slate-500">Strict Protocol</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                    <Archive className="text-library-secondary mb-2" size={24} />
                    <div className="text-sm font-bold text-slate-800">Archiving</div>
                    <div className="text-xs text-slate-500">ISO Standards</div>
                  </div>
                </div>
              </div>

              <div className="bg-library-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl font-serif font-bold mb-8 border-b border-white/20 pb-4">
                  {t.about.expertiseTitle}
                </h3>
                <ul className="space-y-6">
                  {t.about.expertiseList.map((item, index) => (
                    <li key={index} className="flex items-center group">
                      <span className="w-8 h-8 rounded-full bg-library-secondary/20 flex items-center justify-center mr-4 group-hover:bg-library-secondary transition-colors">
                        <BookOpenCheck size={16} />
                      </span>
                      <span className="text-lg font-light tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services t={t.services} openBooking={openBooking} />

        {/* Contact / Booking Section */}
        <section id="contact" className="py-24 bg-white relative">
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
          
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-library-primary rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
              {/* Left Content */}
              <div className="md:w-1/2 p-12 text-white flex flex-col justify-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-library-secondary/10 pointer-events-none"></div>
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
                      <div className="h-px w-12 bg-slate-600"></div>
                      <span className="italic font-serif">{t.contact.or}</span>
                      <div className="h-px w-12 bg-slate-600"></div>
                    </div>

                    <a href="mailto:wattsonlinenow@gmail.com" className="flex items-center text-slate-300 hover:text-white transition-colors">
                       <Mail size={18} className="mr-3" />
                       <span>{t.contact.emailDetails}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Visual - Abstract Calendar */}
              <div className="md:w-1/2 bg-slate-100 p-12 flex items-center justify-center">
                 <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm transform rotate-3 hover:rotate-0 transition-transform duration-500 cursor-pointer" onClick={openBooking}>
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                      <div className="flex items-center space-x-2">
                         <div className="w-3 h-3 rounded-full bg-red-400"></div>
                         <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                         <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <span className="text-xs text-slate-400 font-mono">calendly.com</span>
                    </div>
                    <div className="space-y-3">
                       <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                       <div className="h-20 bg-blue-50 border-l-4 border-blue-500 rounded p-3">
                          <div className="flex items-center text-blue-700 mb-1">
                             <Clock size={14} className="mr-1" />
                             <span className="text-xs font-bold">10:00 AM - Discovery Call</span>
                          </div>
                          <div className="text-xs text-blue-600/70">Digital Strategy Discussion</div>
                       </div>
                       <div className="h-4 bg-slate-100 rounded w-1/2"></div>
                       <div className="h-4 bg-slate-100 rounded w-full"></div>
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
              <span className="font-serif font-bold text-white text-lg">DigitalLibrarian</span>
            </div>
            <p className="text-sm text-slate-500">© {new Date().getFullYear()} {t.footer.rights}</p>
          </div>
          
          <div className="flex space-x-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;