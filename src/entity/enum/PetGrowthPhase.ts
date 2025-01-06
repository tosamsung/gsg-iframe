export enum PetGrowthPhase {
    Baby = "baby",
    Development = "development",
    Growth = "growth",
    Adult = "adult",
    Maturity = "maturity",
    Harvest = "harvest",

    Reproduction = "reproduction",
    Slaughter = "slaughter"

}

export const PetGrowthPhaseDescriptions: Record<PetGrowthPhase, string> = {
    [PetGrowthPhase.Baby]: "Con non",
    [PetGrowthPhase.Development]: "phát triển",
    [PetGrowthPhase.Growth]: "phát triển",
    [PetGrowthPhase.Maturity]: "trưởng thành",
    [PetGrowthPhase.Adult]: "trưởng thành",
    [PetGrowthPhase.Harvest]: "Thu hoạch",
    [PetGrowthPhase.Reproduction]: "Thu hoạch trứng",
    [PetGrowthPhase.Slaughter]: "Thu hoạch thịt"
};
function isPetGrowthPhase(value: string): value is PetGrowthPhase {
    return Object.values(PetGrowthPhase).includes(value as PetGrowthPhase);
}
export const getPetPhaseDescription = (phase: string): string => {
    if (isPetGrowthPhase(phase))
        return PetGrowthPhaseDescriptions[phase];
    throw new Error("Invalid phase")
};

