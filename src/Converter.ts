import { quantity } from '../types/type'
import { Scale } from '../constants/Conversion'

export const convertToBaseQuantity = (n1: quantity, n2: quantity) => {
    
    if(n1.qtype !== n2.qtype)
        throw new Error('Quantity should be of same type');

    return ( ( n2.value * Scale[n2.qtype][n2.qunit] ) / Scale[n1.qtype][n1.qunit] );
}

export const addQuantities = (n1: quantity, n2: quantity) => {
    return { value: n1.value + convertToBaseQuantity(n1, n2), qunit: n1.qunit };
}
