import { unit } from '../types/type'
import { conversionOfLength,conversionOfWeight } from '../constants/Conversion'

export const convertToBaseLength = (n: unit) => {

    return n.value * conversionOfLength["BASE_LENGTH"][n.type];

}

export const convertToBaseWeight = (n: unit) => {

    return n.value * conversionOfWeight["BASE_WEIGHT"][n.type];

}

export const Add = (n1: unit, n2: unit) => {

    var result=0;
    if(n1.category==n2.category)
    {
        if(n1.category=="LENGTH")
        {
            result = convertToBaseLength(n1) + convertToBaseLength(n2);
            return { value: result * conversionOfLength["TARGET_LENGTH"][n1.type], type: n1.type};
        }
        else
        {
            result = convertToBaseWeight(n1) + convertToBaseWeight(n2);
            return { value: result * conversionOfWeight["TARGET_WEIGHT"][n1.type], type: n1.type};
        }
    }
}
