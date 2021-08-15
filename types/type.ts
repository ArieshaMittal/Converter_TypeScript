export type lengthType = "TARGET_LENGTH" | "BASE_LENGTH";
export type weightType = "BASE_WEIGHT" | "TARGET_WEIGHT";
export type categoryType = "LENGTH" | "WEIGHT";
export type lengthUnits = "MM" | "CM" | "M";
export type weightUnits = "G" | "KG" | "POUND";

export type lengthUnitConversion = {
    MM: number;
    CM: number;
    M: number;
}

export type weightUnitConversion = {
    G: number;
    KG: number;
    POUND: number;
}

export type ConvertLength = {
    [key in lengthType]: lengthUnitConversion; 
}

export type ConvertWeight = {
    [key in weightType]: weightUnitConversion; 
}


export type unit = {
    value: number;
    category: categoryType;
    type: lengthUnits | weightUnits;
};