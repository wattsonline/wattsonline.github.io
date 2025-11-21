import React from 'react';
import { Translation } from '../types';
import { Database, BookText, Library, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesProps {
  t: Translation['services'];
  openBooking: () => void;
}

const Services: React.FC<ServicesProps> = ({ t, openBooking }) => {
  const categories = [
    {
      data: t.categories.digital,
      icon: <Database size={32} />,
      color: 'bg-blue-50 text-blue-700',
      borderColor: 'border-blue-100',
      hoverBorder: 'hover:border-blue-300'
    },
    {
      data: t.categories.knowledge,
      icon: <Library size={32} />,
      color: 'bg-emerald-50 text-emerald-700',
      borderColor: 'border-emerald-100',
      hoverBorder: 'hover:border-emerald-300'
    },
    {
      data: t.categories.publishing,
      icon: <BookText size={32} />,
      color: 'bg-amber-50 text-amber-700',
      borderColor: 'border-amber-100',
      hoverBorder: 'hover:border-amber-300'
    }
  ];

  return (
    <section id="services" className="py-24 bg-library-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-library-primary mb-6 relative inline-block">
            {t.title}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-library-secondary"></span>
          </h2>
          <p className="text-lg text-slate-600 font-sans leading-relaxed">
            {t.intro}
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`bg-white flex flex-col p-8 rounded-xl border ${cat.borderColor} shadow-sm hover:shadow-xl transition-all duration-300 group ${cat.hoverBorder}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${cat.color} group-hover:scale-110 transition-transform duration-300`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 group-hover:text-library-secondary transition-colors">
                {cat.data.title}
              </h3>
              <ul className="space-y-4 flex-grow mb-8">
                {cat.data.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-slate-600">
                    <CheckCircle size={18} className="mr-3 mt-1 flex-shrink-0 text-library-secondary/60" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={openBooking}
                className="w-full mt-auto py-3 rounded-lg border border-slate-200 text-slate-600 font-medium hover:bg-library-secondary hover:text-white hover:border-library-secondary transition-all flex items-center justify-center group-hover:shadow-md"
              >
                {t.bookService}
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;