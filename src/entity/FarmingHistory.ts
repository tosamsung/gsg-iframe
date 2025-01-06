import { Bed } from "./Bed";
import { Product } from "./Product";

export interface FarmingHistory {
    updatedAt: string;
    createdAt: string;
    action: string;
    bed_id: string;
    cost: number | null;
    employee_id: number;
    id: string;
    message: string;
    note: string | null;
    plot_id: string | null;
    quantity: number | null;
    sort_status: number;
    status: string;
    updatedById: number;
    user_id: number;
    bed: Bed;
    plot: any | null;
    product: Product;
    uom: any | null;
  }