export type ElementCategory =
  | 'alkali-metal'
  | 'alkaline-earth-metal'
  | 'transition-metal'
  | 'post-transition-metal'
  | 'metalloid'
  | 'nonmetal'
  | 'halogen'
  | 'noble-gas'
  | 'lanthanide'
  | 'actinide'
  | 'unknown';

export interface ElementInfo {
  /** Atomic number (Z) */
  z: number;
  symbol: string;
  name: string;
  category: ElementCategory;
  /** IUPAC group 1-18, or null for f-block */
  group: number | null;
  period: number;
  /** Grid column 1-18 */
  xpos: number;
  /** Grid row 1-10 (rows 9-10 hold the f-block) */
  ypos: number;
  /** Approximate market price in USD per gram. */
  pricePerGram: number;
  /**
   * True when the price is a rough estimate rather than a real market price
   * (radioactive, synthetic, or never isolated in weighable amounts).
   */
  estimated?: boolean;
}

/**
 * Approximate price-per-gram (USD) for all 118 elements.
 *
 * These figures are intended for illustration only. Real prices vary widely with
 * purity, form, supplier and market conditions. Many radioactive or synthetic
 * elements have no real market; their values are flagged `estimated` and are
 * order-of-magnitude guesses meant to convey relative rarity.
 */
export const ELEMENTS: ElementInfo[] = [
  { z: 1, symbol: 'H', name: 'Hydrogen', category: 'nonmetal', group: 1, period: 1, xpos: 1, ypos: 1, pricePerGram: 0.0014 },
  { z: 2, symbol: 'He', name: 'Helium', category: 'noble-gas', group: 18, period: 1, xpos: 18, ypos: 1, pricePerGram: 0.024 },
  { z: 3, symbol: 'Li', name: 'Lithium', category: 'alkali-metal', group: 1, period: 2, xpos: 1, ypos: 2, pricePerGram: 0.086 },
  { z: 4, symbol: 'Be', name: 'Beryllium', category: 'alkaline-earth-metal', group: 2, period: 2, xpos: 2, ypos: 2, pricePerGram: 0.857 },
  { z: 5, symbol: 'B', name: 'Boron', category: 'metalloid', group: 13, period: 2, xpos: 13, ypos: 2, pricePerGram: 3.68 },
  { z: 6, symbol: 'C', name: 'Carbon', category: 'nonmetal', group: 14, period: 2, xpos: 14, ypos: 2, pricePerGram: 0.00012 },
  { z: 7, symbol: 'N', name: 'Nitrogen', category: 'nonmetal', group: 15, period: 2, xpos: 15, ypos: 2, pricePerGram: 0.00014 },
  { z: 8, symbol: 'O', name: 'Oxygen', category: 'nonmetal', group: 16, period: 2, xpos: 16, ypos: 2, pricePerGram: 0.00015 },
  { z: 9, symbol: 'F', name: 'Fluorine', category: 'halogen', group: 17, period: 2, xpos: 17, ypos: 2, pricePerGram: 0.0019 },
  { z: 10, symbol: 'Ne', name: 'Neon', category: 'noble-gas', group: 18, period: 2, xpos: 18, ypos: 2, pricePerGram: 0.24 },
  { z: 11, symbol: 'Na', name: 'Sodium', category: 'alkali-metal', group: 1, period: 3, xpos: 1, ypos: 3, pricePerGram: 0.0034 },
  { z: 12, symbol: 'Mg', name: 'Magnesium', category: 'alkaline-earth-metal', group: 2, period: 3, xpos: 2, ypos: 3, pricePerGram: 0.0023 },
  { z: 13, symbol: 'Al', name: 'Aluminium', category: 'post-transition-metal', group: 13, period: 3, xpos: 13, ypos: 3, pricePerGram: 0.0018 },
  { z: 14, symbol: 'Si', name: 'Silicon', category: 'metalloid', group: 14, period: 3, xpos: 14, ypos: 3, pricePerGram: 0.0017 },
  { z: 15, symbol: 'P', name: 'Phosphorus', category: 'nonmetal', group: 15, period: 3, xpos: 15, ypos: 3, pricePerGram: 0.0027 },
  { z: 16, symbol: 'S', name: 'Sulfur', category: 'nonmetal', group: 16, period: 3, xpos: 16, ypos: 3, pricePerGram: 0.00009 },
  { z: 17, symbol: 'Cl', name: 'Chlorine', category: 'halogen', group: 17, period: 3, xpos: 17, ypos: 3, pricePerGram: 0.00008 },
  { z: 18, symbol: 'Ar', name: 'Argon', category: 'noble-gas', group: 18, period: 3, xpos: 18, ypos: 3, pricePerGram: 0.0009 },
  { z: 19, symbol: 'K', name: 'Potassium', category: 'alkali-metal', group: 1, period: 4, xpos: 1, ypos: 4, pricePerGram: 0.0136 },
  { z: 20, symbol: 'Ca', name: 'Calcium', category: 'alkaline-earth-metal', group: 2, period: 4, xpos: 2, ypos: 4, pricePerGram: 0.0024 },
  { z: 21, symbol: 'Sc', name: 'Scandium', category: 'transition-metal', group: 3, period: 4, xpos: 3, ypos: 4, pricePerGram: 3.46 },
  { z: 22, symbol: 'Ti', name: 'Titanium', category: 'transition-metal', group: 4, period: 4, xpos: 4, ypos: 4, pricePerGram: 0.0117 },
  { z: 23, symbol: 'V', name: 'Vanadium', category: 'transition-metal', group: 5, period: 4, xpos: 5, ypos: 4, pricePerGram: 0.385 },
  { z: 24, symbol: 'Cr', name: 'Chromium', category: 'transition-metal', group: 6, period: 4, xpos: 6, ypos: 4, pricePerGram: 0.0094 },
  { z: 25, symbol: 'Mn', name: 'Manganese', category: 'transition-metal', group: 7, period: 4, xpos: 7, ypos: 4, pricePerGram: 0.0018 },
  { z: 26, symbol: 'Fe', name: 'Iron', category: 'transition-metal', group: 8, period: 4, xpos: 8, ypos: 4, pricePerGram: 0.00042 },
  { z: 27, symbol: 'Co', name: 'Cobalt', category: 'transition-metal', group: 9, period: 4, xpos: 9, ypos: 4, pricePerGram: 0.0328 },
  { z: 28, symbol: 'Ni', name: 'Nickel', category: 'transition-metal', group: 10, period: 4, xpos: 10, ypos: 4, pricePerGram: 0.0139 },
  { z: 29, symbol: 'Cu', name: 'Copper', category: 'transition-metal', group: 11, period: 4, xpos: 11, ypos: 4, pricePerGram: 0.006 },
  { z: 30, symbol: 'Zn', name: 'Zinc', category: 'transition-metal', group: 12, period: 4, xpos: 12, ypos: 4, pricePerGram: 0.0026 },
  { z: 31, symbol: 'Ga', name: 'Gallium', category: 'post-transition-metal', group: 13, period: 4, xpos: 13, ypos: 4, pricePerGram: 0.148 },
  { z: 32, symbol: 'Ge', name: 'Germanium', category: 'metalloid', group: 14, period: 4, xpos: 14, ypos: 4, pricePerGram: 1.01 },
  { z: 33, symbol: 'As', name: 'Arsenic', category: 'metalloid', group: 15, period: 4, xpos: 15, ypos: 4, pricePerGram: 0.0013 },
  { z: 34, symbol: 'Se', name: 'Selenium', category: 'nonmetal', group: 16, period: 4, xpos: 16, ypos: 4, pricePerGram: 0.0214 },
  { z: 35, symbol: 'Br', name: 'Bromine', category: 'halogen', group: 17, period: 4, xpos: 17, ypos: 4, pricePerGram: 0.0044 },
  { z: 36, symbol: 'Kr', name: 'Krypton', category: 'noble-gas', group: 18, period: 4, xpos: 18, ypos: 4, pricePerGram: 0.29 },
  { z: 37, symbol: 'Rb', name: 'Rubidium', category: 'alkali-metal', group: 1, period: 5, xpos: 1, ypos: 5, pricePerGram: 15.5 },
  { z: 38, symbol: 'Sr', name: 'Strontium', category: 'alkaline-earth-metal', group: 2, period: 5, xpos: 2, ypos: 5, pricePerGram: 0.0067 },
  { z: 39, symbol: 'Y', name: 'Yttrium', category: 'transition-metal', group: 3, period: 5, xpos: 3, ypos: 5, pricePerGram: 0.031 },
  { z: 40, symbol: 'Zr', name: 'Zirconium', category: 'transition-metal', group: 4, period: 5, xpos: 4, ypos: 5, pricePerGram: 0.036 },
  { z: 41, symbol: 'Nb', name: 'Niobium', category: 'transition-metal', group: 5, period: 5, xpos: 5, ypos: 5, pricePerGram: 0.086 },
  { z: 42, symbol: 'Mo', name: 'Molybdenum', category: 'transition-metal', group: 6, period: 5, xpos: 6, ypos: 5, pricePerGram: 0.04 },
  { z: 43, symbol: 'Tc', name: 'Technetium', category: 'transition-metal', group: 7, period: 5, xpos: 7, ypos: 5, pricePerGram: 100000, estimated: true },
  { z: 44, symbol: 'Ru', name: 'Ruthenium', category: 'transition-metal', group: 8, period: 5, xpos: 8, ypos: 5, pricePerGram: 10.6 },
  { z: 45, symbol: 'Rh', name: 'Rhodium', category: 'transition-metal', group: 9, period: 5, xpos: 9, ypos: 5, pricePerGram: 250 },
  { z: 46, symbol: 'Pd', name: 'Palladium', category: 'transition-metal', group: 10, period: 5, xpos: 10, ypos: 5, pricePerGram: 50 },
  { z: 47, symbol: 'Ag', name: 'Silver', category: 'transition-metal', group: 11, period: 5, xpos: 11, ypos: 5, pricePerGram: 0.85 },
  { z: 48, symbol: 'Cd', name: 'Cadmium', category: 'transition-metal', group: 12, period: 5, xpos: 12, ypos: 5, pricePerGram: 0.0027 },
  { z: 49, symbol: 'In', name: 'Indium', category: 'post-transition-metal', group: 13, period: 5, xpos: 13, ypos: 5, pricePerGram: 0.167 },
  { z: 50, symbol: 'Sn', name: 'Tin', category: 'post-transition-metal', group: 14, period: 5, xpos: 14, ypos: 5, pricePerGram: 0.0187 },
  { z: 51, symbol: 'Sb', name: 'Antimony', category: 'metalloid', group: 15, period: 5, xpos: 15, ypos: 5, pricePerGram: 0.0058 },
  { z: 52, symbol: 'Te', name: 'Tellurium', category: 'metalloid', group: 16, period: 5, xpos: 16, ypos: 5, pricePerGram: 0.0635 },
  { z: 53, symbol: 'I', name: 'Iodine', category: 'halogen', group: 17, period: 5, xpos: 17, ypos: 5, pricePerGram: 0.035 },
  { z: 54, symbol: 'Xe', name: 'Xenon', category: 'noble-gas', group: 18, period: 5, xpos: 18, ypos: 5, pricePerGram: 1.8 },
  { z: 55, symbol: 'Cs', name: 'Caesium', category: 'alkali-metal', group: 1, period: 6, xpos: 1, ypos: 6, pricePerGram: 61.8 },
  { z: 56, symbol: 'Ba', name: 'Barium', category: 'alkaline-earth-metal', group: 2, period: 6, xpos: 2, ypos: 6, pricePerGram: 0.00028 },
  { z: 57, symbol: 'La', name: 'Lanthanum', category: 'lanthanide', group: null, period: 6, xpos: 3, ypos: 9, pricePerGram: 0.0049 },
  { z: 58, symbol: 'Ce', name: 'Cerium', category: 'lanthanide', group: null, period: 6, xpos: 4, ypos: 9, pricePerGram: 0.0047 },
  { z: 59, symbol: 'Pr', name: 'Praseodymium', category: 'lanthanide', group: null, period: 6, xpos: 5, ypos: 9, pricePerGram: 0.103 },
  { z: 60, symbol: 'Nd', name: 'Neodymium', category: 'lanthanide', group: null, period: 6, xpos: 6, ypos: 9, pricePerGram: 0.0575 },
  { z: 61, symbol: 'Pm', name: 'Promethium', category: 'lanthanide', group: null, period: 6, xpos: 7, ypos: 9, pricePerGram: 460000, estimated: true },
  { z: 62, symbol: 'Sm', name: 'Samarium', category: 'lanthanide', group: null, period: 6, xpos: 8, ypos: 9, pricePerGram: 0.0139 },
  { z: 63, symbol: 'Eu', name: 'Europium', category: 'lanthanide', group: null, period: 6, xpos: 9, ypos: 9, pricePerGram: 0.0314 },
  { z: 64, symbol: 'Gd', name: 'Gadolinium', category: 'lanthanide', group: null, period: 6, xpos: 10, ypos: 9, pricePerGram: 0.0286 },
  { z: 65, symbol: 'Tb', name: 'Terbium', category: 'lanthanide', group: null, period: 6, xpos: 11, ypos: 9, pricePerGram: 0.658 },
  { z: 66, symbol: 'Dy', name: 'Dysprosium', category: 'lanthanide', group: null, period: 6, xpos: 12, ypos: 9, pricePerGram: 0.307 },
  { z: 67, symbol: 'Ho', name: 'Holmium', category: 'lanthanide', group: null, period: 6, xpos: 13, ypos: 9, pricePerGram: 0.057 },
  { z: 68, symbol: 'Er', name: 'Erbium', category: 'lanthanide', group: null, period: 6, xpos: 14, ypos: 9, pricePerGram: 0.0264 },
  { z: 69, symbol: 'Tm', name: 'Thulium', category: 'lanthanide', group: null, period: 6, xpos: 15, ypos: 9, pricePerGram: 3.0 },
  { z: 70, symbol: 'Yb', name: 'Ytterbium', category: 'lanthanide', group: null, period: 6, xpos: 16, ypos: 9, pricePerGram: 0.0171 },
  { z: 71, symbol: 'Lu', name: 'Lutetium', category: 'lanthanide', group: null, period: 6, xpos: 17, ypos: 9, pricePerGram: 0.643 },
  { z: 72, symbol: 'Hf', name: 'Hafnium', category: 'transition-metal', group: 4, period: 6, xpos: 4, ypos: 6, pricePerGram: 0.9 },
  { z: 73, symbol: 'Ta', name: 'Tantalum', category: 'transition-metal', group: 5, period: 6, xpos: 5, ypos: 6, pricePerGram: 0.312 },
  { z: 74, symbol: 'W', name: 'Tungsten', category: 'transition-metal', group: 6, period: 6, xpos: 6, ypos: 6, pricePerGram: 0.0353 },
  { z: 75, symbol: 'Re', name: 'Rhenium', category: 'transition-metal', group: 7, period: 6, xpos: 7, ypos: 6, pricePerGram: 4.15 },
  { z: 76, symbol: 'Os', name: 'Osmium', category: 'transition-metal', group: 8, period: 6, xpos: 8, ypos: 6, pricePerGram: 12.0 },
  { z: 77, symbol: 'Ir', name: 'Iridium', category: 'transition-metal', group: 9, period: 6, xpos: 9, ypos: 6, pricePerGram: 56.2 },
  { z: 78, symbol: 'Pt', name: 'Platinum', category: 'transition-metal', group: 10, period: 6, xpos: 10, ypos: 6, pricePerGram: 30.0 },
  { z: 79, symbol: 'Au', name: 'Gold', category: 'transition-metal', group: 11, period: 6, xpos: 11, ypos: 6, pricePerGram: 65.0 },
  { z: 80, symbol: 'Hg', name: 'Mercury', category: 'transition-metal', group: 12, period: 6, xpos: 12, ypos: 6, pricePerGram: 0.0302 },
  { z: 81, symbol: 'Tl', name: 'Thallium', category: 'post-transition-metal', group: 13, period: 6, xpos: 13, ypos: 6, pricePerGram: 4.2 },
  { z: 82, symbol: 'Pb', name: 'Lead', category: 'post-transition-metal', group: 14, period: 6, xpos: 14, ypos: 6, pricePerGram: 0.002 },
  { z: 83, symbol: 'Bi', name: 'Bismuth', category: 'post-transition-metal', group: 15, period: 6, xpos: 15, ypos: 6, pricePerGram: 0.0064 },
  { z: 84, symbol: 'Po', name: 'Polonium', category: 'post-transition-metal', group: 16, period: 6, xpos: 16, ypos: 6, pricePerGram: 50000000, estimated: true },
  { z: 85, symbol: 'At', name: 'Astatine', category: 'halogen', group: 17, period: 6, xpos: 17, ypos: 6, pricePerGram: 100000000, estimated: true },
  { z: 86, symbol: 'Rn', name: 'Radon', category: 'noble-gas', group: 18, period: 6, xpos: 18, ypos: 6, pricePerGram: 4000, estimated: true },
  { z: 87, symbol: 'Fr', name: 'Francium', category: 'alkali-metal', group: 1, period: 7, xpos: 1, ypos: 7, pricePerGram: 1000000000, estimated: true },
  { z: 88, symbol: 'Ra', name: 'Radium', category: 'alkaline-earth-metal', group: 2, period: 7, xpos: 2, ypos: 7, pricePerGram: 100000, estimated: true },
  { z: 89, symbol: 'Ac', name: 'Actinium', category: 'actinide', group: null, period: 7, xpos: 3, ypos: 10, pricePerGram: 10000000, estimated: true },
  { z: 90, symbol: 'Th', name: 'Thorium', category: 'actinide', group: null, period: 7, xpos: 4, ypos: 10, pricePerGram: 0.6 },
  { z: 91, symbol: 'Pa', name: 'Protactinium', category: 'actinide', group: null, period: 7, xpos: 5, ypos: 10, pricePerGram: 1000000, estimated: true },
  { z: 92, symbol: 'U', name: 'Uranium', category: 'actinide', group: null, period: 7, xpos: 6, ypos: 10, pricePerGram: 0.1 },
  { z: 93, symbol: 'Np', name: 'Neptunium', category: 'actinide', group: null, period: 7, xpos: 7, ypos: 10, pricePerGram: 660, estimated: true },
  { z: 94, symbol: 'Pu', name: 'Plutonium', category: 'actinide', group: null, period: 7, xpos: 8, ypos: 10, pricePerGram: 6000, estimated: true },
  { z: 95, symbol: 'Am', name: 'Americium', category: 'actinide', group: null, period: 7, xpos: 9, ypos: 10, pricePerGram: 1500, estimated: true },
  { z: 96, symbol: 'Cm', name: 'Curium', category: 'actinide', group: null, period: 7, xpos: 10, ypos: 10, pricePerGram: 160000000, estimated: true },
  { z: 97, symbol: 'Bk', name: 'Berkelium', category: 'actinide', group: null, period: 7, xpos: 11, ypos: 10, pricePerGram: 185000000, estimated: true },
  { z: 98, symbol: 'Cf', name: 'Californium', category: 'actinide', group: null, period: 7, xpos: 12, ypos: 10, pricePerGram: 27000000, estimated: true },
  { z: 99, symbol: 'Es', name: 'Einsteinium', category: 'actinide', group: null, period: 7, xpos: 13, ypos: 10, pricePerGram: 25000000, estimated: true },
  { z: 100, symbol: 'Fm', name: 'Fermium', category: 'actinide', group: null, period: 7, xpos: 14, ypos: 10, pricePerGram: 100000000, estimated: true },
  { z: 101, symbol: 'Md', name: 'Mendelevium', category: 'actinide', group: null, period: 7, xpos: 15, ypos: 10, pricePerGram: 200000000, estimated: true },
  { z: 102, symbol: 'No', name: 'Nobelium', category: 'actinide', group: null, period: 7, xpos: 16, ypos: 10, pricePerGram: 300000000, estimated: true },
  { z: 103, symbol: 'Lr', name: 'Lawrencium', category: 'actinide', group: null, period: 7, xpos: 17, ypos: 10, pricePerGram: 400000000, estimated: true },
  { z: 104, symbol: 'Rf', name: 'Rutherfordium', category: 'transition-metal', group: 4, period: 7, xpos: 4, ypos: 7, pricePerGram: 500000000, estimated: true },
  { z: 105, symbol: 'Db', name: 'Dubnium', category: 'transition-metal', group: 5, period: 7, xpos: 5, ypos: 7, pricePerGram: 600000000, estimated: true },
  { z: 106, symbol: 'Sg', name: 'Seaborgium', category: 'transition-metal', group: 6, period: 7, xpos: 6, ypos: 7, pricePerGram: 700000000, estimated: true },
  { z: 107, symbol: 'Bh', name: 'Bohrium', category: 'transition-metal', group: 7, period: 7, xpos: 7, ypos: 7, pricePerGram: 800000000, estimated: true },
  { z: 108, symbol: 'Hs', name: 'Hassium', category: 'transition-metal', group: 8, period: 7, xpos: 8, ypos: 7, pricePerGram: 900000000, estimated: true },
  { z: 109, symbol: 'Mt', name: 'Meitnerium', category: 'unknown', group: 9, period: 7, xpos: 9, ypos: 7, pricePerGram: 1000000000, estimated: true },
  { z: 110, symbol: 'Ds', name: 'Darmstadtium', category: 'unknown', group: 10, period: 7, xpos: 10, ypos: 7, pricePerGram: 1100000000, estimated: true },
  { z: 111, symbol: 'Rg', name: 'Roentgenium', category: 'unknown', group: 11, period: 7, xpos: 11, ypos: 7, pricePerGram: 1200000000, estimated: true },
  { z: 112, symbol: 'Cn', name: 'Copernicium', category: 'unknown', group: 12, period: 7, xpos: 12, ypos: 7, pricePerGram: 1300000000, estimated: true },
  { z: 113, symbol: 'Nh', name: 'Nihonium', category: 'unknown', group: 13, period: 7, xpos: 13, ypos: 7, pricePerGram: 1400000000, estimated: true },
  { z: 114, symbol: 'Fl', name: 'Flerovium', category: 'unknown', group: 14, period: 7, xpos: 14, ypos: 7, pricePerGram: 1500000000, estimated: true },
  { z: 115, symbol: 'Mc', name: 'Moscovium', category: 'unknown', group: 15, period: 7, xpos: 15, ypos: 7, pricePerGram: 1600000000, estimated: true },
  { z: 116, symbol: 'Lv', name: 'Livermorium', category: 'unknown', group: 16, period: 7, xpos: 16, ypos: 7, pricePerGram: 1700000000, estimated: true },
  { z: 117, symbol: 'Ts', name: 'Tennessine', category: 'unknown', group: 17, period: 7, xpos: 17, ypos: 7, pricePerGram: 1800000000, estimated: true },
  { z: 118, symbol: 'Og', name: 'Oganesson', category: 'unknown', group: 18, period: 7, xpos: 18, ypos: 7, pricePerGram: 2000000000, estimated: true },
];

export const CATEGORY_LABELS: Record<ElementCategory, string> = {
  'alkali-metal': 'Alkali metal',
  'alkaline-earth-metal': 'Alkaline earth metal',
  'transition-metal': 'Transition metal',
  'post-transition-metal': 'Post-transition metal',
  metalloid: 'Metalloid',
  nonmetal: 'Reactive nonmetal',
  halogen: 'Halogen',
  'noble-gas': 'Noble gas',
  lanthanide: 'Lanthanide',
  actinide: 'Actinide',
  unknown: 'Unknown / predicted',
};
