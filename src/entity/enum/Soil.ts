export enum Soil {
    Sandy = "sandy",
    Clay = "clay",
    Silt = "silt",
    Loamy = "loamy",
    Peaty = "peaty",
    Saline = "saline",
    Chalky = "chalky",
    Alluvial = "alluvial",
    Gravelly = "gravelly"

}

export const SoilDescriptions: Record<Soil, string> = {
    [Soil.Sandy]: "Đất cát",
    [Soil.Clay]: "Đất sét",
    [Soil.Silt]: "Đất thịt",
    [Soil.Loamy]: "Đất pha",
    [Soil.Peaty]: "Than bùn",
    [Soil.Saline]: "Đất mặn",
    [Soil.Chalky]: "Đất phấn",
    [Soil.Alluvial]: "Phù sa",
    [Soil.Gravelly]: "Đất sỏi"
};
function isSoil(value: string): value is Soil {
    return Object.values(Soil).includes(value as Soil);
}
export const getSoilDescription = (phase: string): string => {
    if (isSoil(phase))
        return SoilDescriptions[phase];
    throw new Error("Invalid soil")
};

