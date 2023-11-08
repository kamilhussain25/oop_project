abstract class country{
    name : string = ""
    language : string ;
    papulation : number;
    papulation_grawthrate : number
    constructor(name:string,language :string,papulation:number,papulationrate:number){
        this.name =name
        this.language =language
        this.papulation = papulation
        this.papulation_grawthrate = papulationrate
    }
    public abstract papulationgrawth():number;

    }

class Oic_countries extends country{
    constructor(name:string,language :string,papulation:number,papulationrate:number){
        super(name,language,papulation,papulationrate)
    }
    public papulationgrawth(): number {
        this.papulation= this.papulation * (this.papulation_grawthrate/100)+ this.papulation
        return this.papulation 
    }
}
let Pakistan = new Oic_countries("palistan" ,"urdu",30000000,2.5 )
let UAE = new Oic_countries("UAE" ,"arabic",3000000,1 )

console.log (Pakistan)
Pakistan.papulationgrawth()
console.log (Pakistan)
Pakistan.papulationgrawth()
console.log (Pakistan)