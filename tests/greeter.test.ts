import {Greeter} from "../src/greeter"
describe("Greeter Class",() => {
    test("greeting and name",() => {
        const greeter = new Greeter("Hello");
        greeter.greet("John")
        expect(greeter.greet("John")).toEqual("Hello,John!")
    });
    test("greeting and name",() => {
        const greeter = new Greeter("Hi");
        greeter.greet("Amy")
        expect(greeter.greet("Amy")).toEqual("Hi,Amy!")
    });
    test("greeting and name",() => {
        const greeter = new Greeter("Hey");
        greeter.greet("Josh")
        expect(greeter.greet("Josh")).toEqual("Hey,Josh!")
    });
})




