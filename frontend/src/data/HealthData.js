// Remove JSX from data file - icons should be referenced by name only
export const healthServicesData = [
  {
    id: 1,
    iconName: "FaChair",
    title: "Ergonomie",
    subtitle: "L'être humain au centre de l'environnement de travail",
    description: "Adapter les exigences du poste aux besoins et capacités des individus",
    benefits: [
      "Réduction des problèmes physiques et absences",
      "Amélioration de la motivation et productivité",
      "Économies considérables pour l'entreprise",
      "Meilleure ambiance et engagement"
    ],
    services: [
      "Évaluations ergonomiques avec consultation personnalisée",
      "Analyses des lieux de travail existants",
      "Conseils sur l'acquisition d'équipements adaptés",
      "Conseil pour constructions neuves et rénovations",
      "Formations spécialisées en ergonomie"
    ],
    stats: { iconName: "FaUsers", value: "85%", label: "Satisfaction employés" }
  },
  {
    id: 2,
    iconName: "FaBrain",
    title: "Risques Psychosociaux",
    subtitle: "Protection contre le stress et le surmenage",
    description: "Garantir une organisation du travail saine et un bon climat social",
    benefits: [
      "Baromètre du stress pour alerte précoce",
      "Comparaison avec d'autres entreprises suisses",
      "Actions efficaces basées sur les causes réelles",
      "Mesure de l'efficacité des interventions"
    ],
    services: [
      "Information et communication aux employés",
      "Conception de questionnaires adaptés",
      "Interprétation et présentation des résultats",
      "Identification des mesures correctives",
      "Système de gestion des conflits"
    ],
    stats: { iconName: "FaBrain", value: "40%", label: "Réduction du stress" }
  },
  {
    id: 3,
    iconName: "FaMedkit",
    title: "Premiers Secours",
    subtitle: "Intervention rapide et efficace en cas d'urgence",
    description: "Assistance et soins initiaux en cas de maladie ou blessure aiguë",
    benefits: [
      "Consultation par secouristes niveau 3 IVR",
      "Réseau de médecins et ambulanciers",
      "Conformité UVG et ArG garantie",
      "Réduction des heures perdues"
    ],
    services: [
      "Conseils sur mise en place des premiers secours",
      "Formation adaptée aux risques",
      "Conseils sur matériel et salle de premiers secours",
      "Développement du concept de premiers secours",
      "Documentation complète"
    ],
    stats: { iconName: "FaAmbulance", value: "24/7", label: "Protection continue" }
  },
  {
    id: 4,
    iconName: "FaChild",
    title: "Protection des Jeunes Travailleurs",
    subtitle: "Sécurité renforcée pour les moins de 18 ans",
    description: "Conformité aux réglementations pour apprentis et jeunes salariés",
    benefits: [
      "Identification précoce des dangers",
      "Lieux de travail sûrs garantis",
      "Conformité légale assurée",
      "Formation adaptée à l'âge"
    ],
    services: [
      "Évaluation des activités des jeunes",
      "Conseil pour aménagement des espaces",
      "Création de règles de sécurité",
      "Formation des superviseurs"
    ],
    stats: { iconName: "FaChild", value: "100%", label: "Conformité légale" }
  },
  {
    id: 5,
    iconName: "FaBaby",
    title: "Protection de la Maternité",
    subtitle: "Sécurité pour les femmes enceintes et allaitantes",
    description: "Évaluation des risques et aménagement des conditions de travail",
    benefits: [
      "Identification précoce des dangers",
      "Conformité ordonnance maternité",
      "Continuité d'emploi jusqu'à l'accouchement",
      "Protection mère et enfant garantie"
    ],
    services: [
      "Évaluation des lieux de travail",
      "Analyse des risques pendant grossesse",
      "Planification des actions correctives",
      "Conseils sur aménagement adapté"
    ],
    stats: { iconName: "FaBaby", value: "Art. 63", label: "Ordonnance 1 LTr" }
  }
];