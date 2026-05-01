export interface KoppenZone {
  code: string;
  label: string;
  description: string;
  plantingImplications: string;
}

export const koppenZones: KoppenZone[] = [
  {
    code: "Cfa",
    label: "Humid Subtropical",
    description: "Hot, humid summers. Mild winters. Rain year-round.",
    plantingImplications:
      "Your climate is one of the most forgiving for exotic trees. Plants from Southeast Asia, humid subtropics of South America, and warm-temperate East Asia are all in play. Humidity is an asset — lean into it.",
  },
  {
    code: "BSh",
    label: "Hot Semi-Arid Steppe",
    description: "Hot, dry summers. Mild winters. Low annual rainfall.",
    plantingImplications:
      "Drought tolerance is your selection filter. But don't stop there — the Mediterranean coast, South Africa, central Chile, and northwest Argentina all share this climate. The forgotten trees from those regions will thrive where lawn grass surrenders.",
  },
  {
    code: "BSk",
    label: "Cold Semi-Arid Steppe",
    description: "Hot summers, cold winters. Low rainfall. High elevation.",
    plantingImplications:
      "Wide temperature swings are your constraint. Central Asian steppe species, high-altitude South American natives, and cold-hardy xerophytes handle this. More range than you think.",
  },
  {
    code: "BWk",
    label: "Cold Desert",
    description: "Extreme heat in summer, hard freezes in winter. Minimal rain.",
    plantingImplications:
      "The most demanding climate. Basin-and-Range desert species from the Chihuahuan, Sonoran, and Gobi deserts. Cold hardiness plus drought tolerance. Narrow window — but the right plants are extraordinary.",
  },
];

export function parseZoneNumber(zoneStr: string): number {
  const num = parseInt(zoneStr, 10);
  const suffix = zoneStr.slice(-1).toLowerCase();
  return suffix === "b" ? num + 0.5 : num;
}

export function getKoppenByCode(code: string): KoppenZone | undefined {
  return koppenZones.find((z) => z.code === code);
}
