import { ConvertLength,ConvertWeight } from "../types/type"

export const conversionOfLength: ConvertLength = {
    BASE_LENGTH: {
        MM: 1,
        CM: 10,
        M: 1000
    },
    TARGET_LENGTH: {
        MM: 1,
        CM: 0.1,
        M: 0.001    
    }
};

export const conversionOfWeight: ConvertWeight = {
    BASE_WEIGHT: {
        G: 1,
        KG: 1000,
        POUND: 453.592
    },
    TARGET_WEIGHT: {
        G: 1,
        KG: 0.001,
        POUND: 1/453.592    
    }
};