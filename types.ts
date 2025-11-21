export type Language = 'en' | 'fr';

export interface ServiceItem {
  title: string;
  items: string[];
}

export interface ContentSection {
  title: string;
  subtitle?: string;
  description?: string;
}

export type Translation = {
  nav: {
    home: string;
    about: string;
    chronology: string;  // <-- add this
    services: string;
    contact: string;
    toggleLang: string;
    bookBtn: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    tagline: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    expertiseTitle: string;
    expertiseList: string[];
  };
  services: {
    title: string;
    intro: string;
    categories: {
      digital: ServiceItem;
      knowledge: ServiceItem;
      publishing: ServiceItem;
    };
    bookService: string;
  };
  booking: {
    modalTitle: string;
    step1: string;
    step2: string;
    selectDate: string;
    selectTime: string;
    yourDetails: string;
    nameLabel: string;
    emailLabel: string;
    notesLabel: string;
    confirmBtn: string;
    backBtn: string;
    successTitle: string;
    successMsg: string;
    closeBtn: string;
  };
  contact: {
    title: string;
    desc: string;
    button: string;
    or: string;
    emailDetails: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}

export interface Content {
  en: Translation;
  fr: Translation;
}