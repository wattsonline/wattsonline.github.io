import { Content } from './types';

export const CONTENT: Content = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      chronology: 'Experience',
      services: 'Services',
      contact: 'Contact',
      toggleLang: 'FR',
      bookBtn: 'Book a Call',
    },
    hero: {
      title: 'Digital Library & Knowledge Management',
      subtitle:
        'Expert consulting for digital transformation, institutional archives, and knowledge governance. Serving public, academic, and international organisations worldwide.',
      cta: 'Schedule a Discovery Call',
      tagline: 'Explore Services',
    },
    about: {
      title: 'About the Team',
      p1: "Watt's Online brings over two decades of combined experience in digital libraries, institutional memory, and strategic communication. We work with public, academic, and international organisations to preserve and organise their most valuable asset: knowledge.",
      p2: '"We believe every organisation deserves access to professional information management, regardless of size or budget."',
      p3: 'Our multilingual team (FR / EN / ES) offers remote collaboration with institutions worldwide, combining deep expertise in library systems, metadata standards, and digital preservation with a practical understanding of organisational needs.',
      expertiseTitle: 'Core Expertise',
      expertiseList: [
        'Digital Library Systems (Koha, DSpace)',
        'Metadata & Cataloguing Standards',
        'Digital Preservation & Archiving',
        'Knowledge Governance',
        'Publication Workflows',
      ],
    },
    services: {
      title: 'Our Services',
      intro:
        'Comprehensive digital library and knowledge management solutions tailored to your organisation\'s needs.',
      categories: {
        digital: {
          title: 'Digital Library Services',
          items: [
            'Library system implementation & migration',
            'Digital repository setup & management',
            'Metadata schema design & quality control',
            'Collection digitisation planning',
          ],
        },
        knowledge: {
          title: 'Knowledge Governance',
          items: [
            'Information architecture design',
            'Taxonomy & controlled vocabulary development',
            'Records management frameworks',
            'Policy & procedure documentation',
          ],
        },
        publishing: {
          title: 'Publishing & Archives',
          items: [
            'Publication workflow optimisation',
            'Board documentation support',
            'Digital preservation strategies',
            'Historical archive processing',
          ],
        },
        ai: {
          title: 'AI-Ready Data Services',
          items: [
            'Data quality assessment & cleanup',
            'Structured metadata for AI training',
            'Knowledge base preparation',
            'Semantic enrichment & tagging',
          ],
        },
      },
      bookService: 'Book This Service',
    },
    booking: {
      modalTitle: 'Book a Consultation',
      step1: 'Select Date & Time',
      step2: 'Your Details',
      selectDate: 'Select a date',
      selectTime: 'Select a time',
      yourDetails: 'Your Details',
      nameLabel: 'Full Name',
      emailLabel: 'Email Address',
      notesLabel: 'Notes (optional)',
      confirmBtn: 'Confirm Booking',
      backBtn: 'Back',
      successTitle: 'Booking Confirmed!',
      successMsg: 'We\'ll send you a confirmation email shortly.',
      closeBtn: 'Close',
    },
    contact: {
      title: 'Ready to Transform Your Knowledge Management?',
      desc: 'Book a free discovery call to discuss your organisation\'s needs and explore how we can help.',
      button: 'Schedule a Call',
      or: 'or',
      emailDetails: 'wattsonlinenow@gmail.com',
    },
    footer: {
      rights: 'All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'A propos',
      chronology: 'Experience',
      services: 'Services',
      contact: 'Contact',
      toggleLang: 'EN',
      bookBtn: 'Prendre RDV',
    },
    hero: {
      title: 'Bibliotheque Numerique & Gestion des Connaissances',
      subtitle:
        'Conseil expert en transformation numerique, archives institutionnelles et gouvernance des connaissances. Au service des organisations publiques, academiques et internationales.',
      cta: 'Planifier un Appel Decouverte',
      tagline: 'Decouvrir les Services',
    },
    about: {
      title: "A propos de l'Equipe",
      p1: "Watt's Online apporte plus de vingt ans d'experience combinee en bibliotheques numeriques, memoire institutionnelle et communication strategique. Nous travaillons avec des organisations publiques, academiques et internationales pour preserver et organiser leur atout le plus precieux : le savoir.",
      p2: '"Nous croyons que chaque organisation merite un acces a une gestion professionnelle de l\'information, quelle que soit sa taille ou son budget."',
      p3: "Notre equipe multilingue (FR / EN / ES) offre une collaboration a distance avec des institutions du monde entier, combinant une expertise approfondie des systemes de bibliotheque, des normes de metadonnees et de la preservation numerique avec une comprehension pratique des besoins organisationnels.",
      expertiseTitle: 'Expertise Principale',
      expertiseList: [
        'Systemes de Bibliotheque Numerique (Koha, DSpace)',
        'Metadonnees & Normes de Catalogage',
        'Preservation & Archivage Numerique',
        'Gouvernance des Connaissances',
        'Flux de Publication',
      ],
    },
    services: {
      title: 'Nos Services',
      intro:
        'Solutions completes de bibliotheque numerique et de gestion des connaissances adaptees aux besoins de votre organisation.',
      categories: {
        digital: {
          title: 'Services de Bibliotheque Numerique',
          items: [
            'Implementation & migration de systemes de bibliotheque',
            'Configuration & gestion de depots numeriques',
            'Conception de schemas de metadonnees & controle qualite',
            'Planification de la numerisation des collections',
          ],
        },
        knowledge: {
          title: 'Gouvernance des Connaissances',
          items: [
            "Conception d'architecture de l'information",
            'Developpement de taxonomie & vocabulaire controle',
            'Cadres de gestion des documents',
            'Documentation des politiques & procedures',
          ],
        },
        publishing: {
          title: 'Edition & Archives',
          items: [
            'Optimisation des flux de publication',
            'Support documentaire pour les conseils',
            'Strategies de preservation numerique',
            'Traitement des archives historiques',
          ],
        },
        ai: {
          title: 'Services de Donnees pour l\'IA',
          items: [
            'Evaluation & nettoyage de la qualite des donnees',
            'Metadonnees structurees pour l\'entrainement IA',
            'Preparation de bases de connaissances',
            'Enrichissement semantique & balisage',
          ],
        },
      },
      bookService: 'Reserver ce Service',
    },
    booking: {
      modalTitle: 'Reserver une Consultation',
      step1: 'Selectionnez Date & Heure',
      step2: 'Vos Coordonnees',
      selectDate: 'Selectionnez une date',
      selectTime: 'Selectionnez une heure',
      yourDetails: 'Vos Coordonnees',
      nameLabel: 'Nom Complet',
      emailLabel: 'Adresse Email',
      notesLabel: 'Notes (optionnel)',
      confirmBtn: 'Confirmer la Reservation',
      backBtn: 'Retour',
      successTitle: 'Reservation Confirmee !',
      successMsg: 'Nous vous enverrons un email de confirmation sous peu.',
      closeBtn: 'Fermer',
    },
    contact: {
      title: 'Pret a Transformer Votre Gestion des Connaissances ?',
      desc: "Reservez un appel decouverte gratuit pour discuter des besoins de votre organisation et explorer comment nous pouvons vous aider.",
      button: 'Planifier un Appel',
      or: 'ou',
      emailDetails: 'wattsonlinenow@gmail.com',
    },
    footer: {
      rights: 'Tous droits reserves.',
      privacy: 'Politique de Confidentialite',
      terms: "Conditions d'Utilisation",
    },
  },
};
