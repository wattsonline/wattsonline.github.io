import React, { useState } from 'react';
import { Translation } from '../types';
import { Calendar, Clock, User, X, CheckCircle2, ArrowLeft, ChevronRight } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: Translation['booking'];
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, t }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', notes: '' });

  if (!isOpen) return null;

  // Simulate next 5 days
  const getDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const times = ['09:00', '10:30', '13:00', '14:30', '16:00'];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send data to a backend or email service
    setStep(3);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { weekday: 'short', day: 'numeric' }).format(date);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-library-primary text-white px-6 py-4 flex justify-between items-center shrink-0">
          <div className="flex items-center space-x-2">
            <Calendar className="text-library-secondary" size={20} />
            <span className="font-serif font-bold text-lg tracking-wide">{t.modalTitle}</span>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {step === 3 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-green-600" size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">{t.successTitle}</h3>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">{t.successMsg}</p>
              <button 
                onClick={onClose}
                className="bg-library-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-library-secondary transition-colors"
              >
                {t.closeBtn}
              </button>
            </div>
          ) : (
            <>
              {/* Progress Indicator */}
              <div className="flex items-center mb-8 text-sm font-medium text-slate-500">
                <span className={`flex items-center ${step === 1 ? 'text-library-secondary' : ''}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center border mr-2 ${step === 1 ? 'border-library-secondary bg-library-secondary text-white' : 'border-slate-300'}`}>1</span>
                  {t.step1}
                </span>
                <ChevronRight size={16} className="mx-4" />
                <span className={`flex items-center ${step === 2 ? 'text-library-secondary' : ''}`}>
                  <span className={`w-6 h-6 rounded-full flex items-center justify-center border mr-2 ${step === 2 ? 'border-library-secondary bg-library-secondary text-white' : 'border-slate-300'}`}>2</span>
                  {t.step2}
                </span>
              </div>

              {step === 1 && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                      <Calendar size={16} className="mr-2 text-library-secondary" />
                      {t.selectDate}
                    </h4>
                    <div className="space-y-2">
                      {getDates().map((date, idx) => {
                        const dateStr = date.toISOString();
                        return (
                          <button
                            key={idx}
                            onClick={() => setSelectedDate(dateStr)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                              selectedDate === dateStr 
                                ? 'border-library-secondary bg-library-secondary/5 text-library-secondary font-semibold ring-1 ring-library-secondary' 
                                : 'border-slate-200 hover:border-library-secondary hover:bg-slate-50'
                            }`}
                          >
                            {formatDate(date)}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className={`transition-opacity duration-300 ${!selectedDate ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                    <h4 className="font-bold text-slate-800 mb-4 flex items-center">
                      <Clock size={16} className="mr-2 text-library-secondary" />
                      {t.selectTime}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 rounded-md border text-sm transition-all ${
                            selectedTime === time
                              ? 'bg-library-secondary text-white border-library-secondary shadow-md'
                              : 'border-slate-200 hover:border-library-secondary hover:text-library-secondary'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleConfirm} className="max-w-md mx-auto animate-fade-in">
                  <h4 className="font-bold text-slate-800 mb-6 flex items-center text-lg">
                    <User size={20} className="mr-2 text-library-secondary" />
                    {t.yourDetails}
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t.nameLabel}</label>
                      <input 
                        required
                        type="text" 
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-library-secondary focus:border-transparent outline-none transition-all"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t.emailLabel}</label>
                      <input 
                        required
                        type="email" 
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-library-secondary focus:border-transparent outline-none transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">{t.notesLabel}</label>
                      <textarea 
                        rows={3}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-library-secondary focus:border-transparent outline-none transition-all resize-none"
                        value={formData.notes}
                        onChange={e => setFormData({...formData, notes: e.target.value})}
                      />
                    </div>
                  </div>
                </form>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {step < 3 && (
          <div className="border-t border-slate-100 px-6 py-4 flex justify-between bg-slate-50">
            {step === 2 ? (
              <button 
                onClick={() => setStep(1)}
                className="flex items-center text-slate-600 hover:text-library-primary font-medium"
              >
                <ArrowLeft size={16} className="mr-2" />
                {t.backBtn}
              </button>
            ) : (
              <div></div> // Spacer
            )}

            <button
              disabled={step === 1 && (!selectedDate || !selectedTime)}
              onClick={step === 1 ? () => setStep(2) : (e) => handleConfirm(e as any)}
              className={`px-6 py-2 rounded-lg font-medium transition-all shadow-lg flex items-center ${
                step === 1 && (!selectedDate || !selectedTime)
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-library-secondary text-white hover:bg-amber-700 hover:shadow-amber-900/20'
              }`}
            >
              {step === 1 ? 'Continue' : t.confirmBtn}
              {step === 1 && <ChevronRight size={16} className="ml-2" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;