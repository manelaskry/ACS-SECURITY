import { 
  FaClipboardCheck, 
  FaExclamationTriangle, 
  FaShieldAlt, 
  FaCogs, 
  FaHardHat, 
  FaChalkboardTeacher 
} from 'react-icons/fa';

// Données des services
export const servicesData = [
  {
    id: 1,
    title: "Audits de sécurité & santé au travail",
    description: "Évaluation complète de vos installations et pratiques pour identifier les points d'amélioration.",
    icon: FaClipboardCheck
  },
  {
    id: 2,
    title: "Identification et évaluation des dangers",
    description: "Analyse systématique des risques présents dans votre environnement de travail.",
    icon: FaExclamationTriangle
  },
  {
    id: 3,
    title: "Rappel des exigences légales (CFST 6508)",
    description: "Mise en conformité avec les obligations légales et réglementaires suisses.",
    icon: FaShieldAlt
  },
  {
    id: 4,
    title: "Mesures correctives selon SUVA STOP",
    description: "Application de la méthodologie STOP : Substitution, Techniques, Organisationnelles, Personnelles.",
    icon: FaCogs
  },
  {
    id: 5,
    title: "Organisation de la sécurité sur chantier",
    description: "Planification et coordination des mesures de sécurité pour vos chantiers.",
    icon: FaHardHat
  },
  {
    id: 6,
    title: "Formations et sensibilisation",
    description: "Sessions de formation adaptées pour sensibiliser vos équipes aux bonnes pratiques.",
    icon: FaChalkboardTeacher
  }
];