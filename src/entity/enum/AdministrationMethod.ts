export enum AdministrationMethod {
    Subcutaneous = "subcutaneous",
    Intranasal = "intranasal",
    Intramuscular="intramuscular"
}

export const AdministrationMethodDescriptions: Record<AdministrationMethod, string> = {
    [AdministrationMethod.Subcutaneous]: "Tiêm dưới da",
    [AdministrationMethod.Intranasal]: "Tiêm dưới niêm mạc",
    [AdministrationMethod.Intramuscular]: "Tiêm bắp"
};
function isAdministrationMethod(value: string): value is AdministrationMethod {
    return Object.values(AdministrationMethod).includes(value as AdministrationMethod);
}
export const getAdministrationMethodDescription = (phase: string): string => {    
    if (isAdministrationMethod(phase))
        return AdministrationMethodDescriptions[phase];
    throw new Error("Invalid AdministrationMethod")
};

