import { productImages } from "@/public/images/products";
import type { StaticImageData } from "next/image";

export type ProductVariant = {
  name: string;
  features: string[];
  applications?: string[];
};

export type Product = {
  name: string;
  subtitle: string;
  category: string;
  type: string;
  image: StaticImageData | string;
  benefits?: string[];
  available?: string[];
  applications?: string[];
  features?: string[];
  variants?: ProductVariant[];
  offerings?: string[];
  idealFor?: string;
  bestFor?: string;
};

export const products: Product[] = [
  {
    name: "Metal & Metal Oxide Nanoparticles",
    subtitle: "Research & Industrial Grade",
    category: "Nanoparticles",
    type: "Metal Oxides",
    image: productImages.metalOxid,
    available: [
      "Calcium Oxide (CaO)",
      "Iron Oxide (Fe₃O₄ / Fe₂O₃)",
      "Zinc Oxide (ZnO)",
      "Magnesium Oxide (MgO)",
      "Silica (SiO₂)",
      "Composite & Hybrid Metal Oxide Nanoparticles",
    ],
    applications: [
      "Smart agriculture & nano-fertilizer development",
      "Antimicrobial coatings",
      "Environmental remediation",
      "Industrial & catalytic research",
      "Biomedical and materials research",
    ],
  },
  {
    name: "Bio-Conjugated Nanoparticles",
    subtitle: "Antibody & Aptamer Conjugation Expertise",
    category: "Nanoparticles",
    type: "Conjugated NPs",
    image: productImages.bioConjucated,
    available: [
      "Gold nanoparticles–Aptamer conjugates",
      "Gold nanoparticles–Antibody conjugates",
    ],
    applications: [
      "Point-of-care diagnostic development",
      "Lateral flow assay research",
      "Pathogen & biomarker detection",
      "Targeted biosensing",
    ],
  },
  {
    name: "ARIPRO™",
    subtitle: "Smart Organic Fertilizer",
    category: "Sustainable Agriculture",
    type: "Organic Fertilizer",
    image: productImages.aripro,
    benefits: [
      "Improves soil health & organic carbon",
      "Enhances microbial activity",
      "Long-term soil fertility improvement",
      "Eco-friendly & sustainable",
    ],
    bestFor: "Organic & sustainable farming, soil conditioning",
  },
  {
    name: "Noble Metal Nanoparticles",
    subtitle: "Research Grade",
    category: "Nanoparticles",
    type: "Gold & Silver NPs",
    image: productImages.nobleMetal,
    variants: [
      {
        name: "Gold Nanoparticles (GNPs)",
        features: [
          "Tunable particle size",
          "Surface functionalization available",
          "High colloidal stability",
        ],
        applications: [
          "Diagnostics development",
          "Biosensing",
          "Bioimaging research",
          "Cosmetic R&D",
        ],
      },
      {
        name: "Silver Nanoparticles (AgNPs)",
        features: ["High antimicrobial efficiency", "Stable dispersions"],
        applications: [
          "Antimicrobial coatings",
          "Water treatment research",
          "Hygiene formulations",
        ],
      },
    ],
  },
  {
    name: "ARIGRO™",
    subtitle: "NPK Nano Fertilizer",
    category: "Nano Fertilizer",
    type: "Nano-Enabled NPK",
    image: productImages.arigro,
    benefits: [
      "Nano-scale nutrient delivery",
      "Higher nutrient use efficiency",
      "Reduced nutrient loss & leaching",
      "Improved crop yield potential",
    ],
    bestFor: "Precision agriculture, nano fertilizer R&D",
  },
  {
    name: "AGRIGRO™",
    subtitle: "Liquid Nano-Hybrid Fertilizer",
    category: "Liquid Nano Fertilizer",
    type: "Nano-Hybrid Formulation",
    image: productImages.agrigro,
    benefits: [
      "Rapid nutrient absorption",
      "Uniform application",
      "Enhanced plant response",
      "Suitable for smart agriculture trials",
    ],
    bestFor: "Foliar & soil application research",
  },
  {
    name: "Sulfonated Cellulose Nanocrystals (SCNCs)",
    subtitle: "Aqueous Medium",
    category: "Sustainable Nano-Reinforcement",
    type: "Biopolymer Additive",
    image: productImages.sulfonated,
    features: [
      "Renewable & biodegradable",
      "High aspect ratio",
      "Stable aqueous dispersion",
      "Surface sulfonation for enhanced compatibility",
    ],
    applications: [
      "Biopolymer nanocomposites",
      "Nanogels & hydrogels",
      "Water treatment & environmental remediation",
      "Sustainable coatings & films",
      "Cosmetics & personal care formulations",
      "Drug delivery & biomedical research",
    ],
  },
  {
    name: "Custom Synthesis & R&D Services",
    subtitle: "Nanomaterial & Biopolymer Development",
    category: "Custom Services",
    type: "R&D Services",
    image: productImages.custom,
    offerings: [
      "Particle size & surface tuning",
      "Antibody / aptamer conjugation",
      "SCNC-based nanocomposites",
      "Nanogel & hydrogel formulation",
      "Lab-scale to pilot-scale production",
    ],
    idealFor: "Startups, universities, research labs, and industry partners",
  },
  {
    name: "ARIM™ NanoCollagen Gel",
    subtitle: "Nanotechnology-Based Formulation for Periodontal Management",
    category: "Biomedical",
    type: "Nano-Collagen Gel",
    image: productImages.arimNanoCollagen,
    features: [
      "Nano-collagen enhanced regeneration",
      "Promotes gum tissue repair",
      "Reduces inflammation & bleeding",
      "Provides localized sustained release",
      "Mucoadhesive formulation for better retention",
      "Supports antimicrobial environment",
    ],
  },
  {
    name: "ARIM™ Silver ChitoCare Gel",
    subtitle: "Nanotechnology-Based Biopolymer Formulation",
    category: "Biomedical",
    type: "Silver Nanoparticle Gel",
    image: productImages.arimSilverChitoCare,
    features: [
      "Broad-spectrum antimicrobial activity",
      "Anti-pruritic (itch relief) effect",
      "Chitosan-based biocompatible hydrogel",
      "Nano-enabled penetration into microbial layers",
      "Non-sticky and skin soothing",
      "Supports infection control & inflammation reduction",
    ],
  },
  {
    name: "ARIM™ PerioNano Cream",
    subtitle:
      "Advanced Nanotechnology-Based Formulation for Periodontal Conditions",
    category: "Biomedical",
    type: "Nano Cream",
    image: productImages.arimPerioNano,
    features: [
      "Targeted delivery into periodontal pockets",
      "Effective against gum infection & inflammation",
      "Sustained drug release for prolonged action",
      "Strong mucoadhesive retention",
      "Supports biofilm disruption",
      "Enhances localized therapeutic efficacy",
    ],
  },
];
