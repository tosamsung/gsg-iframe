export interface Crop {
    createdAt: string; // ISO date string format
    updatedAt: string; // ISO date string format
    id: string; // Unique identifier
    name: string; // Name of the crop
    createdById: number; // ID of the user who created the crop
    updatedById: number; // ID of the user who last updated the crop

  }
  