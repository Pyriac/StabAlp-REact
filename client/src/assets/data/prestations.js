import plansImage from "../images/plans_stab_1.webp/";
import chiffrageImage from "../images/stab_chiffrage_1.webp";
import permisImage from "../images/stab_permis.webp";
import dexelImage from "../images/DEXEL_stab.webp";
import defaultImage from "../images/defaultImage_Stab.jpg";
const prestations = [
  {
    name: "Plans",
    image: plansImage,
    imageAlt:
      "Plan de coupe en 2D d'un batiment agricole réalisé par Stab' Alp",
    description:
      "Après une première rencontre, je réalise d'abord des plans simplifiés de votre projet (en plusieurs versions le plus souvent). Les rencontres suivantes permettent de choisir une version définitive et de la peaufiner. La version finale est transcrite en plan, coupes, perspective qui permettent de solliciter des entreprises pour obtenir des devis. Ces éléments sont utilisés pour la réalisation du permis de construire.",
  },
  {
    name: "Chiffrage estimatif",
    image: chiffrageImage,
    imageAlt: "Document format A4 d'estimation de coup des travaux",
    description:
      "A la demande, je réalise des chiffrages estimatif de coût de bâtiment. Je bénéficie d'une base de données de coût soient régionaux, soient nationaux. Je peux aussi consulter directement des entreprises pour avoir une idée plus précise d'un lot ou d'un équipement.",
  },
  {
    name: "Permis de construire",
    image: permisImage,
    imageAlt:
      "Première page du permis de construire officiel de l'état français",
    description:
      "Après la phase de conception du projet, je propose la réalisation du dossier de demande de permis de construire. Je travaille en partenariat avec des architectes pour tous les bâtiments de plus de 800 m2. Cette prestation fournit l'ensemble des éléments nécessaires pour obtenir son permis de construire. Il ne vous reste qu'à signer les formulaires !",
  },
  {
    name: "Diagnostic Environnement",
    image: dexelImage,
    imageAlt: "Tas de lisier entouré d'un muret en béton",
    description:
      "Par le biais de la méthode DEXEL je vous propose d'estimer la capcité de stockage de fumier et de lisier de votre exploitation. Je suis agréé Dexel depuis 1996 et répertorié sur les listes du ministère de l'agriculture.",
  },
  {
    name: "Installations classées",
    image: defaultImage,
    imageAlt: "Default Image",
    description: "Trouver une description ou supprimer",
  },
  {
    name: "Diagnostic de site",
    image: defaultImage,
    imageAlt: "Default Image",
    description:
      "Le diagnostic de site fait le point sur les contraintes règlementaires, environnementales et urbanistiques auxquelles sont soumis les bâtiments de l'exploitation. C'est un  état des lieux le plus exhaustif possible concernant les distances d'implantation des bâtiments par rapport aux habitations, aux cours d'eau, aux routes... Il permet aussi de vérifier si vos ouvrages de stockage de fumier ou de lisier présentent les durées nécessaires ou les capacités à réaliser lors d'un projet de construction neuve ou de mise aux normes.",
  },
];

export default prestations;
