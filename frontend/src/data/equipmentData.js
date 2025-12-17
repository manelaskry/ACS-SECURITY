import { FaHardHat, FaRoad, FaCogs } from 'react-icons/fa';
import epiBg from '../assets/epiBg.jpg';
import signageBg from '../assets/signage.jpg';
import machineBg from '../assets/machine.jpg';

export const equipmentCategories = [
  {
    title: "Équipements de Protection Individuelle (EPI)",
    description: "Protection complète adaptée à chaque type de risque",
    bgImage: epiBg,
    icon: FaHardHat,
    items: [
      "Casques de protection",
      "Gants adaptés",
      "Chaussures de sécurité",
      "Harnais antichute",
      "Protections auditives",
      "Lunettes de protection"
    ]
  },
  {
    title: "Signalisation & balisage",
    description: "Visibilité et information pour prévenir les risques",
    bgImage: signageBg,
    icon: FaRoad,
    items: [
      "Marquage au sol",
      "Panneaux de sécurité",
      "Affichages réglementaires",
      "Balisage de zones",
      "Signalétique d'évacuation",
      "Pictogrammes normalisés"
    ]
  },
  {
    title: "Dispositifs machine",
    description: "Protection mécanique et prévention des accidents",
    bgImage: machineBg,
    icon: FaCogs,
    items: [
      "Protections mécaniques",
      "Détecteurs de présence",
      "Arrêts d'urgence",
      "Barrières immatérielles",
      "Systèmes de verrouillage",
      "Capteurs de sécurité"
    ]
  }
];