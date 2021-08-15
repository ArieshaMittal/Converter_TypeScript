import { addQuantities } from '../../src/Converter'

describe("Converter Test", () => {

    it("should return the addition of two lengths", () => {
        const Output = addQuantities( {value: 5, qunit: "MM", qtype: "LENGTH"} , {value: 10, qunit: "CM", qtype: "LENGTH"} )
        expect(Output).toEqual({
            value: 105,
            qunit: "MM"
        })
    })

    it("should return the addition of two masses", () => {
        const Output = addQuantities( {value: 5, qunit: "KG", qtype: "WEIGHT"} , {value: 10, qunit: "G", qtype: "WEIGHT"} )
        expect(Output).toEqual({
            value: 5.01,
            qunit: "KG"
        })
    })

})