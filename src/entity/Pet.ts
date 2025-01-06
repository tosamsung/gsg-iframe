export interface Pet {
  createdAt: string;
  updatedAt: string;
  id: string;
  name: string;
  scientific_name: string;
  description: string;
  type: string;
  average_height: number;
  average_weight: number;
  product_time: number;
  product_type: string;
  max_temperature: number;
  min_temperature: number;
  min_humidity: number;
  max_humidity: number;
  light: string;
  special_requirements: string | null;
  water_per_day: number;
  harvest_sign: string;
  egg_yield: number;
  meat_yield: number | null;
  egg_size: string;
  egg_color: string;
  meat_quality: string | null;
  advantages: string;
  points: number;
  density: number;
  expense: number;
  createdById: number;
  updatedById: number;
  product_id: number;
  pets_growth_stages: PetGrowthStage[]
}
export interface PetGrowthStage {
  createdAt: string;
  updatedAt: string;
  pets_id: string;
  start_day: number;
  feeding_frequency_per_day: number;
  id: string;
  createdById: number;
  updatedById: number;
  phase: string;
  forage_id: number;
  uom_id: number;
  food_per_meal: number;
  forage: Forage;
  uom: Uom;
}
interface Forage {
  list_price: number;
}

interface Uom {
  uom_type: string;
  ratio: number;
}