import { Bed, BedHistory } from "./Bed";

export interface Area {
    coordinate: Coordinate,
    width: number,
    height: number
}
export interface Coordinate {
    x: number,
    y: number
}
export interface MetaData {
    count: number;
    page: number;
    pageSize: number;
    totalPage: number;
}
export interface BedArea {
    name: string
    index: number
    area: Area
    bed: Bed
    bedHistories?:BedHistory[]

}