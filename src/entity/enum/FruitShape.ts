export enum FruitShape {
    Round = "round",
    Oblong = "oblong",
    Heart_shaped = "heart_shaped",
    Flattened = "flattened",
    Conical = "conical",
    Irregular = "irregular"
}

export const FruitShapeDescriptions: Record<FruitShape, string> = {
    [FruitShape.Round]: "Hình tròn",
    [FruitShape.Oblong]: "Bầu dục",
    [FruitShape.Heart_shaped]: "Trái tim",
    [FruitShape.Flattened]: "Dẹt",
    [FruitShape.Conical]: "Nón",
    [FruitShape.Irregular]: "Không đều"
};
function isFruitShape(value: string): value is FruitShape {
    return Object.values(FruitShape).includes(value as FruitShape);
}
export const getFruitShapeDescription = (phase: string): string => {
    if (isFruitShape(phase))
        return FruitShapeDescriptions[phase];
    throw new Error("Invalid fruit shape")
};

