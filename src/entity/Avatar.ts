export interface Avatar {
    id: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    title: string;
    filename: string;
    extname: string;
    size: number; // in bytes
    mimetype: string;
    storageId: number;
    path: string;
    meta: Record<string, unknown>;
    url: string;
    createdById: number;
    updatedById: number;
}