"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class country {
    constructor(name, language, papulation, papulationrate) {
        this.name = "";
        this.name = name;
        this.language = language;
        this.papulation = papulation;
        this.papulation_grawthrate = papulationrate;
    }
}
class Oic_countries extends country {
    constructor(name, language, papulation, papulationrate) {
        super(name, language, papulation, papulationrate);
    }
    papulationgrawth() {
        this.papulation = this.papulation * (this.papulation_grawthrate / 100) + this.papulation;
        return this.papulation;
    }
}
let Pakistan = new Oic_countries("palistan", "urdu", 30000000, 2.5);
let UAE = new Oic_countries("UAE", "arabic", 3000000, 1);
console.log(Pakistan);
Pakistan.papulationgrawth();
console.log(Pakistan);
Pakistan.papulationgrawth();
console.log(Pakistan);
