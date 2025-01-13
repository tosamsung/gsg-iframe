import { BedHistoryStatusEnum } from "./enum/BedHistoryStatusEnum";
import { StatusEnum } from "./enum/Status";
import { Product } from "./Product";

export interface Bed {
  createdAt: string;
  updatedAt: string;
  harvest_date: string | null;
  planting_date: string | null;
  id: string;
  width: number;
  length: number;
  bed_number: number;
  createdById: number | null;
  updatedById: number | null;
  crop_variety_id: string | null;
  plot_id: string;
  type: 'cage' | 'bed';
  status: StatusEnum;
  bed_plant_history_id: BedHistory[];
  max_quantity: number
  
}

export interface BedHistory {
  createdAt: string;
  updatedAt: string;
  id: number;
  createdById: number | null;
  updatedById: number | null;
  product_id: number;
  quantity: number;
  type: string;
  bed_id: string;
  bed: Bed;
  product_type: string;
  product_value_expected: number;
  product_value_reality: number | null;
  product_value_uom_id: number;
  status: BedHistoryStatusEnum;
  start_time: string | null;
  product_time: string | null;
  product: Product
}
