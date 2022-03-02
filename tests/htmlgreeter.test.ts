import {HtmlGreeter} from "../src/htmlgreeter"
describe("HtmlGreeter Class",() => {
    test("greeting and name",() => {
        const greeter = new HtmlGreeter("Hello ");
        greeter.greet("John");
        expect(greeter.greet("John")).toBe("<h1>Hello,John!!</h1>")
    });
    test("greeting and name",() => {
        const greeter = new HtmlGreeter("Hi","p");
        greeter.greet("Amy");
        expect(greeter.greet("Amy")).toBe("Hi,Amy!!!")
    });
    test("greeting and name",() => {
        const greeter = new HtmlGreeter("Hey","h2");
        greeter.greet("Josh");
        expect(greeter.greet("Josh")).toBe("Hey,Josh!!!!")
    });
})