import { BedHistoryStatusEnum } from "./enum/BedHistoryStatusEnum";
import { StatusEnum } from "./enum/Status";
import { Product } from "./Product";

export class Bed {
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
  constructor(
    createdAt?: string,
    updatedAt?: string,
    harvest_date?: string | null,
    planting_date?: string | null,
    id?: string,
    width?: number,
    length?: number,
    bed_number?: number,
    createdById?: number | null,
    updatedById?: number | null,
    crop_variety_id?: string | null,
    plot_id?: string,
    type?: 'cage' | 'bed',
    status?: StatusEnum,
    bed_plant_history_id?: BedHistory[],
    max_quantity?: number

  ) {
    this.createdAt = createdAt || '';
    this.updatedAt = updatedAt || '';
    this.harvest_date = harvest_date || null;
    this.planting_date = planting_date || null;
    this.id = id || '';
    this.width = width || 0;
    this.length = length || 0;
    this.bed_number = bed_number || 0;
    this.createdById = createdById || null;
    this.updatedById = updatedById || null;
    this.crop_variety_id = crop_variety_id || null;
    this.plot_id = plot_id || '';
    this.type = type || 'bed';
    this.status = status || StatusEnum.New;
    this.bed_plant_history_id = bed_plant_history_id || [];
    this.max_quantity = max_quantity || 10
  }
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
