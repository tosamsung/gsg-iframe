export enum FarmActionEnum {
    Planting = "planting",
    Watering = "watering",
    Fertilizing = "fertilizing",
    Harvesting = "harvesting",
    Raising = "raising",
    Feeding = "feeding",
    Drinking = "drinking",
    Normal = "normal",
    Pending = "pending",
}

export const FarmActionEnumDescriptions: Record<FarmActionEnum, string> = {
    [FarmActionEnum.Planting]: "Trồng cây",
    [FarmActionEnum.Watering]: "Tưới nước",
    [FarmActionEnum.Fertilizing]: "Bón phân",
    [FarmActionEnum.Raising]: "Nuôi gà",
    [FarmActionEnum.Feeding]: "Cho ăn",
    [FarmActionEnum.Harvesting]: "Thu hoạch",
    [FarmActionEnum.Drinking]: "Cho gà uống",
    [FarmActionEnum.Normal]: "Bình thường",
    [FarmActionEnum.Pending]: "Chờ xủ lý"
};
export const FarmActionEnumColors: Record<FarmActionEnum, string> = {
    [FarmActionEnum.Planting]: "lime",
    [FarmActionEnum.Watering]: "blue",
    [FarmActionEnum.Fertilizing]: "gold",
    [FarmActionEnum.Raising]: "cyan",
    [FarmActionEnum.Feeding]: "purple",
    [FarmActionEnum.Harvesting]: "volcano",
    [FarmActionEnum.Drinking]: "blue",
    [FarmActionEnum.Normal]: "default",
    [FarmActionEnum.Pending]: "yellow"
};
function isFarmActionEnum(value: string): value is FarmActionEnum {
    return Object.values(FarmActionEnum).includes(value as FarmActionEnum);
}
export const getFarmActionEnumDescription = (phase: string): string => {
    if (isFarmActionEnum(phase))
        return FarmActionEnumDescriptions[phase];
    throw new Error("Invalid FarmAction")
};
export const getFarmActionEnumColor = (phase: FarmActionEnum): string => {
    return FarmActionEnumColors[phase];
};

