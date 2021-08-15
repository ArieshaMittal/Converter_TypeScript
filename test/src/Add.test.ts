import { Add } from '../../src/Add'

describe("Addition Test", () => {

    it("should return the addition of two lengths one in mm and one in cm", () => {
        const Output = Add( {value: 5, type: "MM"} , {value: 10, type: "CM"} )
        expect(Output).toEqual({
            value: 105,
            type: "MM"
        })
    })

    it("should return the addition of two lengths one in mm and one in m", () => {
        const Output = Add( {value: 5, type: "MM"} , {value: 10, type: "M"} )
        expect(Output).toEqual({
            value: 10005,
            type: "MM"
        })
    })

    it("should return the addition of two lengths one in cm and one in mm", () => {
        const Output = Add( {value: 5, type: "CM"} , {value: 10, type: "MM"} )
        expect(Output).toEqual({
            value: 6,
            type: "CM"
        })
    })

    it("should return the addition of two lengths one in cm and one in m", () => {
        const Output = Add( {value: 5, type: "CM"} , {value: 10, type: "M"} )
        expect(Output).toEqual({
            value: 1005,
            type: "CM"
        })
    })

    it("should return the addition of two lengths one in m and one in mm", () => {
        const Output = Add( {value: 5, type: "M"} , {value: 10, type: "MM"} )
        expect(Output).toEqual({
            value: 5.01,
            type: "M"
        })
    })

    it("should return the addition of two lengths one in m and one in cm", () => {
        const Output = Add( {value: 10, type: "M"} , {value: 100, type: "CM"} )
        expect(Output).toEqual({
            value: 11,
            type: "M"
        })
    })

    it("should return the addition of two lengths one in mm and one in mm", () => {
        const Output = Add( {value: 5, type: "MM"} , {value: 10, type: "MM"} )
        expect(Output).toEqual({
            value: 15,
            type: "MM"
        })
    })

    it("should return the addition of two lengths one in cm and one in cm", () => {
        const Output = Add( {value: 10, type: "CM"} , {value: 10, type: "CM"} )
        expect(Output).toEqual({
            value: 20,
            type: "CM"
        })
    })

    it("should return the addition of two lengths one in mm and one in mm", () => {
        const Output = Add( {value: 15, type: "M"} , {value: 10, type: "M"} )
        expect(Output).toEqual({
            value: 25,
            type: "M"
        })
    })

})