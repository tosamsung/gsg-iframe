import { BedArea } from "../../entity/Other";
import IStateManagement from "../IStateManagement";
export class StateManagement implements IStateManagement {
    getChickenId(): string | null {
        return WA.player.state.chickenId as string || null;
    }
    setChickenId(chickenId: string): void {
        WA.player.state.chickenId = chickenId;
    }
    getVarietyId(): string | null {
        return WA.player.state.varietyId as string || null;
    }
    setVarietyId(varietyId: string): void {
        WA.player.state.varietyId = varietyId;
    }
    getBedArea(): BedArea | null {
        return WA.player.state.bedArea as BedArea || null;
    }

    setBedArea(bedArea: BedArea | null): void {
        WA.player.state.bedArea = bedArea;
    }
}
