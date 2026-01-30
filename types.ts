// types.ts

export type Language = 'en' | 'fr';

/**
 * One language's text bundle.
 * This is what components typically receive as `t`.
 */
export type Translation = {
  nav: {
    home: string;
    about: string;
    chronology: string;
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
    categories: Record<
      string,
      {
        title: string;
        items: string[];
      }
    >;
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
};

/**
 * Full content object keyed by language.
 */
export type Content = Record<Language, Translation>;
