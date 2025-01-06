import { BedArea } from "../entity/Other";

export default interface IStateManagement {
    getChickenId(): string | null;
    setChickenId(chickenId: string): void;
    getVarietyId(): string | null;
    setVarietyId(varietyId: string): void;
    getBedArea(): BedArea | null
    setBedArea(bedArea: BedArea | null): void
}
