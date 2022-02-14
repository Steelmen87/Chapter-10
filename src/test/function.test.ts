import {timesTwo, order} from "./function"
const menuItems = [
    {
        id: "1",
        name: "Tatted",
        price: 19
    },
    {
        id: "2",
        name: "WWWatted",
        price: 11
    },
];

describe("Math function",()=>{

    test("Multiplies by two", () => {
        expect(timesTwo(4)).toBe(8);
    });

    test("Build an order object", () => {

        const result = {
            orderItems: menuItems,
            total: 30
        }
        expect(order(menuItems)).toEqual(result);
    })
})
