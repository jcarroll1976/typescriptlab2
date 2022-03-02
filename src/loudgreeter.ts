import { Greeter } from "./greeter";
export class LoudGreeter extends Greeter {
    private extra: string = "!";
    addVolume() : void {
        this.extra.concat("!")
    }
    greet(name:string) :string {
        return `${this.greeting}${name}!!`;
    }
    }
