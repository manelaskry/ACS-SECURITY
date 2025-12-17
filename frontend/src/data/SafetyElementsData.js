import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaListUl,
  FaClipboardCheck,
  FaCog,
  FaUserShield,
  FaMountain
} from 'react-icons/fa';

export const safetyElements = [
{
  id: 1,
  icon: FaShieldAlt,
  title: "Concept de sécurité",
  description:
    "Élaboration et mise en œuvre d’un concept de sécurité conforme à la directive ASA (EKAS 6508), adapté aux risques, à la taille et à l’activité de votre entreprise.",
  details: [
    "Application de la directive ASA / EKAS 6508 pour les entreprises à risques particuliers ou de 50 employés et plus",
    "Concept de sécurité adapté à l’activité : aussi complet que nécessaire, aussi léger que possible",
    "Intégration du concept de sécurité dans votre système de gestion existant",
    "Garantie de conformité aux 10 points de la Commission fédérale de coordination pour la sécurité au travail (EKAS)",
    "Collaboration étroite avec des spécialistes ASA (médecins du travail, ingénieurs sécurité, experts MSST)",
    "Définition claire des responsabilités, processus et mesures de prévention",
    "Possibilité d’intégrer d’autres aspects : sécurité, santé, environnement et protection incendie",
    "Utilisation de modèles éprouvés, y compris la solution modèle M11 pour la mise en œuvre de la directive EKAS 6508"
  ],
  color: "from-blue-500 to-blue-700"
}
,
  {
  id: 2,
  icon: FaExclamationTriangle,
  title: "Identification des dangers",
  description:
    "Identification et analyse systématique des dangers au sein de l’entreprise, conformément aux obligations légales et à la directive ASA (EKAS 6508), pour protéger vos employés contre les accidents et maladies professionnelles.",
  details: [
    "Application du système ASA en 10 points (EKAS) comme référence pour la sécurité au travail",
    "Identification des dangers et évaluation des risques selon les méthodes reconnues",
    "Intégration des mesures de sécurité directement dans les opérations quotidiennes",
    "Sensibilisation et formation des parties prenantes aux risques identifiés",
    "Inspection et consultation indépendantes par un spécialiste de la sécurité au travail (qualifications multiples)",
    "Recommandations d’action efficaces, basées sur l’analyse coût-bénéfice",
    "Service reconnu et conforme aux exigences des autorités et inspections du travail",
    "Amélioration continue de votre système de gestion, avec possibilité d’intégration dans la solution modèle certifiée EKAS"
  ],
  color: "from-orange-500 to-orange-700"
}
,
  {
  id: 3,
  icon: FaListUl,
  title: "Portefeuille de risques",
  description:
    "Méthode structurée et reconnue pour l’identification, l’évaluation et le suivi des dangers professionnels, conformément à l’OPA et à la directive MSST.",
  details: [
    "Identification systématique des dangers sur site selon l’Ordonnance sur la prévention des accidents (OPA)",
    "Évaluation du niveau de risque (gravité, probabilité, exposition) selon les règles reconnues de la technique",
    "Cartographie claire des risques par poste, activité et zone de travail",
    "Détermination de la nécessité de recourir à un spécialiste ASA (directive MSST – CFST 6508)",
    "Définition de règles de sécurité et de mesures de protection adaptées",
    "Plan d’action priorisé avec suivi des mesures correctives",
    "Documentation numérique structurée selon la méthode reconnue de la Suva"
  ],
  color: "from-red-500 to-red-700"
},

  {
  id: 4,
  icon: FaClipboardCheck,
  title: "Audit sécurité",
  description:
    "Vérifier que les mesures de sécurité sont bien mises en place et efficaces, selon les standards EKAS 6508 et les bonnes pratiques Suva.",
  details: [
    "Réduire les accidents et améliorer la sécurité au travail",
    "Augmenter l’adhésion des employés aux règles de sécurité",
    "Identifier les dangers et les écarts dans le système existant",
    "Respecter les exigences légales",
    "Audit selon la norme EKAS 6508 avec recommandations d’amélioration",
    "Soutien à la mise en œuvre des mesures correctives",
    "Solution modèle approuvée EKAS pour un système sûr et structuré"
  ],
  color: "from-green-500 to-green-700"
}
,
{
  id: 5,
  icon: FaCog,
  title: "Sécurité des machines",
  description:
    "Garantir que toutes les machines et équipements de travail sont sûrs, conformes à la loi et à la réglementation en vigueur.",
  details: [
    "Protéger la santé des employés et réduire les temps d’arrêt",
    "Assurer la conformité avec la loi sur le travail et la loi sur les accidents",
    "Motiver et sécuriser les employés grâce à des machines sûres",
    "Certification de sécurité pour toutes les machines, neuves ou existantes",
    "Contrôle complet des machines et équipements à l’installation",
    "Évaluation et analyse des risques liés aux machines",
    "Optimisation des interfaces entre machines et équipements",
    "Formations et perfectionnements pour sensibiliser aux risques et bonnes pratiques"
  ],
  color: "from-purple-500 to-purple-700"
}
,
{
  id: 6,
  icon: FaUserShield,
  title: "Équipement de protection individuelle (EPI)",
  description:
    "Fournir aux employés des équipements adaptés pour les protéger des risques professionnels, conformément à la loi (VUV Art.5).",
  details: [
    "Sécurité renforcée pour tous les employés",
    "Réduction des accidents grâce à des EPI appropriés",
    "Encourager l’adhésion des employés aux règles de sécurité",
    "Motiver les employés avec des EPI sûrs et adaptés",
    "Respect des exigences légales pour la protection individuelle",
    "Conseils pour l’achat et l’entretien des EPI",
    "Évaluation de la nécessité de mesures techniques ou organisationnelles en complément des EPI"
  ],
  color: "from-indigo-500 to-indigo-700"
}
,
  {
  id: 7,
  icon: FaMountain,
  title: "Travail en hauteur",
  description:
    "Sécuriser les travaux réalisés à plus de deux mètres de hauteur, comme sur les toits, échafaudages ou structures élevées, pour protéger les employés contre les chutes et accidents.",
  details: [
    "Évaluation des dangers et analyse des risques pour toutes les situations de travail en hauteur",
    "Respect des exigences légales suisses avec documentation complète",
    "Formation des employés à l’utilisation des EPI anti-chute (cours de base, recyclage et formation spécialisée)",
    "Plans d’urgence et de sauvetage pour réduire les accidents et les interruptions",
    "Conseils pour l’organisation du travail et acquisition d’équipements adaptés",
    "Vérification de la conformité des lieux de travail et des points d’accès",
    "Planification et optimisation des systèmes de protection individuelle contre les chutes",
    "Renforcer la culture sécurité pour améliorer la confiance des employés et partenaires"
  ],
  color: "from-cyan-500 to-cyan-700"
},
{
  id: 8,
  icon: FaClipboardCheck, 
  title: "Procédure d'approbation de planification",
  description:
    "Vérifier que les projets de construction ou réaménagement respectent les règles de sécurité et de santé au travail dès la planification.",
  details: [
    "Assurer la conformité avec la loi sur le travail et la loi sur l’assurance accidents",
    "Prendre en compte la prévention des accidents dès la phase de planification",
    "Applicable pour nouvelles constructions, transformations ou réaménagements",
    "Évaluer les risques pour la vie et la santé des employés avant les travaux",
    "Procédure correcte et efficace pour le dépôt d’une demande d’autorisation d’urbanisme",
    "Réduction des coûts grâce à une planification sécurisée",
    "Conseils pour la planification des bâtiments, conversions et réaménagements",
    "Assistance pour fournir une documentation complète et conforme"
  ],
  color: "from-yellow-500 to-yellow-700"
},{
  id: 9,
  icon: FaClipboardCheck, 
  title: "Inspection des rayonnages",
  description:
    "Vérifier régulièrement les systèmes de rayonnages pour garantir leur sécurité et conformité aux normes (EKAS 6512, Suva 67032, SN EN 15635).",
  details: [
    "Inspection par un expert annuel et contrôle visuel hebdomadaire",
    "Assurer la conformité aux directives EKAS 6512 et Suva 67032",
    "Réparation par un professionnel selon les instructions du fabricant si nécessaire",
    "Inspection réalisée pendant les heures normales de fonctionnement",
    "Rapport détaillé et plan d'action fourni après l’inspection",
    "Garantir la sécurité et la continuité de l’exploitation de l’entreprise",
    "Personnel expérimenté et régulièrement formé pour l’inspection",
    "Formation et enseignement supérieur pour la sécurité des rayonnages"
  ],
  color: "from-green-500 to-green-700"
}

];
