import{JavaScriptGreeter} from "../src/javascript";
describe("JavaScriptGreeter Class",() => {
    test("greeting and name",() => {
        const greeter = new JavaScriptGreeter("Hello,");
        greeter.greet("John")
        expect(greeter.greet("John")).toBe("console.log('Hello,John!')")
    });
    test("greeting and name",() => {
        const greeter = new JavaScriptGreeter("Hi,");
        greeter.greet("Amy")
        expect(greeter.greet("Amy")).toBe("console.log('Hi,Amy!')")
    });
    test("greeting and name",() => {
        const greeter = new JavaScriptGreeter("Hey,");
        greeter.greet("Josh")
        expect(greeter.greet("Josh")).toBe("console.log('Hey,Josh!')")
    });
})