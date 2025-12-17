import { FaPhoneAlt, FaFileAlt, FaSearch, FaUsers, FaChartLine, FaClock } from 'react-icons/fa';

export const processSteps = [
  {
    step: 1,
    icon: FaPhoneAlt,
    title: "Premier contact",
    description: "Échange téléphonique pour comprendre vos besoins, votre secteur d'activité et les spécificités de votre entreprise."
  },
  {
    step: 2,
    icon: FaFileAlt,
    title: "Analyse documentaire",
    description: "Examen de vos documents existants : règlements, fiches de sécurité, rapports d'accidents, formations réalisées."
  },
  {
    step: 3,
    icon: FaSearch,
    title: "Visite sur site",
    description: "Inspection complète de vos installations, observation des pratiques de travail et identification des dangers potentiels."
  },
  {
    step: 4,
    icon: FaUsers,
    title: "Entretiens avec le personnel",
    description: "Discussions avec les collaborateurs, responsables et direction pour comprendre les pratiques quotidiennes et les préoccupations."
  },
  {
    step: 5,
    icon: FaChartLine,
    title: "Analyse et évaluation",
    description: "Compilation des données, évaluation des risques selon la méthodologie STOP, et préparation des recommandations."
  },
  {
    step: 6,
    icon: FaFileAlt,
    title: "Rapport d'audit détaillé",
    description: "Remise d'un rapport complet avec état des lieux, non-conformités identifiées, plan d'action priorisé et recommandations concrètes.",
    extraInfo: {
      icon: FaClock,
      text: "Délai de livraison : 10 jours ouvrables après la visite"
    }
  }
];