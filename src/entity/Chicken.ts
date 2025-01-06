import { Avatar } from "./Avatar";
import { Product } from "./Product";

export interface Chicken {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    id: string;
    name: string;
    product_id: number;
    scientific_name: string;
    description: string;
    type: string;
    average_height: number; // in cm
    average_weight: number; // in kg
    product_time: number; // in days
    product_type: string;
    max_temperature: number; // in °C
    min_temperature: number; // in °C
    min_humidity: number; // percentage
    max_humidity: number; // percentage
    light: string;
    special_requirements: string | null;
    water_per_day: number; // in liters
    harvest_sign: string;
    egg_yield: number;
    meat_yield: number | null;
    egg_size: string;
    egg_color: string;
    meat_quality: string | null;
    advantages: string;
    points: number;
    density: number; // number of chickens per square meter
    expense: number; // relative cost factor
    createdById: number;
    updatedById: number;
    avatar: Avatar[];
    product: Product;
    vaccination_schedule: VaccinationSchedule[];
    pets_growth_stages: ChickenGrowthStage[]
    common_diseases: CommonDisease[]
}
export interface ChickenGrowthStage {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    pets_id: string; // UUID of the pet
    phase: string; // e.g., "baby", "development", "adult", "reproduction"
    start_day: number; // Day the phase starts
    food_per_meal: number; // Amount of food per meal (grams or any unit)
    feeding_frequency_per_day: number; // Number of meals per day
    id: string; // UUID of the record
    createdById: number; // ID of the user who created the record
    updatedById: number; // ID of the user who updated the record
}
interface Vaccine {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    id: string; // UUID
    name: string;
    type: string;
    description: string;
    createdById: number;
    updatedById: number;
}

export interface VaccinationSchedule {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    pets_id: string; // UUID of the pet
    days: number;
    vaccine_id: string; // UUID of the vaccine
    id: string; // Record UUID
    administration_method: string; // e.g., "subcutaneous", "intranasal"
    createdById: number;
    updatedById: number;
    vaccine: Vaccine;
}
interface CommonDisease {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    symptoms: string; // Description of symptoms
    treatment_measures: string; // Treatment methods
    cause: string; // Cause of the disease
    id: string; // Unique identifier
    name: string; // Name of the disease
    type: string; // Type of disease (e.g., "parasite")
    severity_level: string; // Severity level (e.g., "low")
    prevention_measures: string; // Prevention methods
    createdById: number; // ID of the creator
    updatedById: number; // ID of the last updater
}