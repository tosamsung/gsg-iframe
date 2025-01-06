export enum FruitSize {
    Extra_small = "extra_small",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Extra_large = "extra_large"
}

export const FruitSizeDescriptions: Record<FruitSize, string> = {
    [FruitSize.Extra_small]: "Rất nhỏ (<2cm)",
    [FruitSize.Small]: "Nhỏ (2-5cm)",
    [FruitSize.Medium]: "Trung bình (5-7cm)",
    [FruitSize.Large]: "Lớn (7-10cm)",
    [FruitSize.Extra_large]: "Rất lớn (>10cm)"
};
function isFruitSize(value: string): value is FruitSize {
    return Object.values(FruitSize).includes(value as FruitSize);
}
export const getFruitSizeDescription = (phase: string): string => {
    if (isFruitSize(phase))
        return FruitSizeDescriptions[phase];
    throw new Error("Invalid fruit size")
};

