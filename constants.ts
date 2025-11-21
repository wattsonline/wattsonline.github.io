import { Content } from './types';

export const CONTENT: Content = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      chronology: "Chronology",
      services: "Services",
      contact: "Contact",
      toggleLang: "FR / EN",
      bookBtn: "Book a Call",
    },
    hero: {
      title: "Digital Information & Knowledge Manager",
      subtitle: "Structuring heritage, standardizing knowledge.",
      cta: "Schedule Consultation",
      tagline: "Your Partner in Digital Library Architecture"
    },
    about: {
      title: "Expertise & Passion",
      p1: "In an ever-evolving documentary landscape, where information is both valuable and abundant, my mission is to ensure your digital heritage is structured, standardized, and made accessible in a sustainable manner.",
      p2: "With over 17 years of experience, my expertise lies at the intersection of traditional information science and cutting-edge digital content management. I serve institutional, professional, and private entities with rigorous confidentiality.",
      p3: "From repository architecture to precise metadata creation, I facilitate the accessibility of your documents in the most elegant and efficient way possible.",
      expertiseTitle: "Core Competencies",
      expertiseList: [
        "Bilingual Cataloging (EN/FR)",
        "MARC & UNIMARC Formats",
        "Library of Congress (LoC) Standards",
        "Digital Asset Management (DAM)",
        "Repository Architecture"
      ]
    },
    services: {
      title: "Our Services",
      intro: "Comprehensive management of your digital documentation lifecycle.",
      categories: {
        digital: {
          title: "Digital Collections Management",
          items: [
            "Uploads & Repository Management",
            "Digital Library Architecture Design",
            "Organization & Collection Creation",
            "Precise Manual Data Entry",
            "Standardized Naming Conventions"
          ]
        },
        knowledge: {
          title: "Knowledge Services",
          items: [
            "Specialized Bibliographies",
            "Document & Archival Research",
            "Systematic Document Classification",
            "Indexing & Thesaurus Management",
            "Information Retrieval Optimization"
          ]
        },
        publishing: {
          title: "Publishing Services",
          items: [
            "Cataloging in Publication (CIP)",
            "Document Review & Quality Control",
            "Liaison with Deposit Libraries",
            "ISBN/ISSN Management",
            "Metadata for Distribution"
          ]
        }
      },
      bookService: "Book This Service"
    },
    booking: {
      modalTitle: "Schedule a Consultation",
      step1: "Select Date & Time",
      step2: "Your Information",
      selectDate: "Select a Date",
      selectTime: "Select a Time",
      yourDetails: "Enter your details",
      nameLabel: "Full Name",
      emailLabel: "Email Address",
      notesLabel: "Topic of discussion (Optional)",
      confirmBtn: "Confirm Booking",
      backBtn: "Back",
      successTitle: "Booking Confirmed",
      successMsg: "Thank you. I have received your request and will send a calendar invitation to your email shortly.",
      closeBtn: "Close"
    },
    contact: {
      title: "Let's Structure Your Knowledge",
      desc: "Ready to professionalize your digital assets? Schedule a free 15-minute discovery call directly via my calendar.",
      button: "Open Calendar",
      or: "or",
      emailDetails: "Prefer email? Send a detailed inquiry."
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "Profil",
      chronology: "Parcours",
      services: "Services",
      contact: "Contact",
      toggleLang: "FR / EN",
      bookBtn: "Prendre rendez-vous",
    },
    hero: {
      title: "La Bibliothécaire Numérique",
      subtitle: "Structurer le patrimoine, normaliser le savoir.",
      cta: "Prendre rendez-vous",
      tagline: "Votre partenaire en architecture de bibliothèque numérique"
    },
    about: {
      title: "Expertise & Passion",
      p1: "Dans un paysage documentaire en constante évolution, où l'information est à la fois précieuse et abondante, ma mission est de garantir que votre patrimoine numérique soit structuré, normalisé et accessible de manière pérenne.",
      p2: "Forte de plus de 17 ans d’expérience, mon expertise se situe au carrefour de la science de l'information traditionnelle et de la gestion de contenu numérique de pointe. J’accompagne des entités institutionnelles, professionnelles et privées avec une confidentialité rigoureuse.",
      p3: "De l'architecture du dépôt à la création précise de métadonnées, je facilite l'accessibilité de vos documents de la manière la plus efficace et professionnelle possible.",
      expertiseTitle: "Compétences Clés",
      expertiseList: [
        "Catalogage bilingue (EN/FR)",
        "Formats MARC et UNIMARC",
        "Normes Library of Congress (LoC)",
        "Gestion des actifs numériques (DAM)",
        "Architecture de dépôt"
      ]
    },
    services: {
      title: "Nos Services",
      intro: "Gestion intégrale du cycle de vie de vos documents numériques.",
      categories: {
        digital: {
          title: "Gestion de Collections Numériques",
          items: [
            "Téléversement & gestion de dépôt",
            "Architecture de bibliothèque numérique",
            "Organisation & création de collections",
            "Saisie de données manuelle précise",
            "Conventions de nommage standardisées"
          ]
        },
        knowledge: {
          title: "Services de Connaissance",
          items: [
            "Bibliographies spécialisées",
            "Recherche documentaire & archivistique",
            "Classification systématique",
            "Indexation & gestion de thésaurus",
            "Optimisation de la recherche d’information"
          ]
        },
        publishing: {
          title: "Services d'Édition",
          items: [
            "Catalogage avant publication (CIP)",
            "Révision de documents & contrôle qualité",
            "Liaison avec les bibliothèques de dépôt",
            "Gestion ISBN/ISSN",
            "Métadonnées pour la distribution"
          ]
        }
      },
      bookService: "Réserver ce service"
    },
    booking: {
      modalTitle: "Prendre rendez-vous",
      step1: "Date et heure",
      step2: "Vos coordonnées",
      selectDate: "Sélectionner une date",
      selectTime: "Sélectionner une heure",
      yourDetails: "Entrez vos détails",
      nameLabel: "Nom complet",
      emailLabel: "Adresse email",
      notesLabel: "Sujet de discussion (optionnel)",
      confirmBtn: "Confirmer le rendez-vous",
      backBtn: "Retour",
      successTitle: "Rendez-vous confirmé",
      successMsg: "Merci. J'ai bien reçu votre demande et vous enverrai une invitation calendrier par email sous peu.",
      closeBtn: "Fermer"
    },
    contact: {
      title: "Structurons Votre Savoir",
      desc: "Prêt à professionnaliser vos actifs numériques ? Planifiez un appel découverte gratuit de 15 minutes directement via mon agenda.",
      button: "Ouvrir l’agenda",
      or: "ou",
      emailDetails: "Vous préférez l’email ? Envoyez une demande détaillée."
    },
    footer: {
      rights: "Tous droits réservés.",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation"
    }
  }
};
