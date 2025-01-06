export enum PlantGrowthPhase {
    Germinate = "germinate",
    Germination = "germination",
    Baby = "baby",
    Seedling = "seedling",
    Growth = "growth",
    Vegetative_rrowth = "vegetative_rrowth",
    Flower = "flower",
    Bloom = "bloom",
    Fruit = "fruit",
    Maturity = "maturity",
    Harvest = "harvest"

}

export const PlantGrowthPhaseDescriptions: Record<PlantGrowthPhase, string> = {
    [PlantGrowthPhase.Germinate]: "Nảy mầm",
    [PlantGrowthPhase.Germination]: "Nảy mầm",
    [PlantGrowthPhase.Baby]: "Cây con",
    [PlantGrowthPhase.Seedling]: "Cây con",
    [PlantGrowthPhase.Flower]: "Ra hoa",
    [PlantGrowthPhase.Bloom]: "Ra hoa",
    [PlantGrowthPhase.Fruit]: "Phát triển quả",
    [PlantGrowthPhase.Growth]: "Phát triển quả",
    [PlantGrowthPhase.Vegetative_rrowth]: "Tăng trưởng",
    [PlantGrowthPhase.Maturity]: "Trường thành",
    [PlantGrowthPhase.Harvest]: "Thu hoạch"
};
function isPlantGrowthPhase(value: string): value is PlantGrowthPhase {
    return Object.values(PlantGrowthPhase).includes(value as PlantGrowthPhase);
}
export const getPlantPhaseDescription = (phase: string): string => {
    if (isPlantGrowthPhase(phase))
        return PlantGrowthPhaseDescriptions[phase];
    throw new Error("Invalid phase")
};

