import { Pet } from "./Pet";

export interface PetCage {
    createdAt: string;
    updatedAt: string;
    id: string;
    createdById: string | null;
    updatedById: string | null;
    pets_id: string;
    quantity: number;
    cages_id: string;
    status: string;
    pets: Pet;
}

// Interface for "cage_id"
export interface Cage {
    createdAt: string;
    updatedAt: string;
    plot_id: string;
    id: string;
    createdById: string | null;
    updatedById: string | null;
    status: string;
    pet_cages_id: PetCage[];
}