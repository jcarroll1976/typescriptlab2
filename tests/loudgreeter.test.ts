import { LoudGreeter } from "../src/loudgreeter"

describe("LoudGreeter Class",() => {
    test("greeting and name",() => {
        const greeter = new LoudGreeter("Hello,");
        greeter.greet("John");
        expect(greeter.greet("John")).toBe("Hello,John!!")
    });
    test("greeting and name",() => {
        const greeter = new LoudGreeter("Hi,");
        greeter.greet("Amy");
        greeter.addVolume();
        expect(greeter.greet("Amy!")).toBe("Hi,Amy!!!")
    });
    test("greeting and name",() => {
        const greeter = new LoudGreeter("Hey,");
        greeter.greet("Josh");
        greeter.addVolume();
        greeter.addVolume();
        expect(greeter.greet("Josh!!")).toBe("Hey,Josh!!!!")
    });
})