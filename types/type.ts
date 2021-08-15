export type Category = "LENGTH" | "WEIGHT";

export type lenType = "MM" | "CM" | "M";
export type weightType = "KG" | "G" | "POUND";

export type quantity = {
    value: number,
    qtype: Category
    qunit: lenType | weightType
}

export type conversionScale = {
    [key in Category] : {
        [key in (lenType | weightType | string)] : number
    }
}

