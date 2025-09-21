import { ZnElement, type ZnElementOptions } from "./ZnElement"

export class Zn {
    
    public mod: number
    public elements: ZnElement[] = []
    public options: ZnElementOptions

    
    constructor(n: number, elements?: ZnElement[], options: ZnElementOptions = { size: 7, negativeValues: true }) {
        this.mod = n
        this.options = options
        this.elements = elements &&elements?.length > 0 ? elements : this.generateElements()
    }

    private generateElements(): ZnElement[] {
        const arr: ZnElement[] = []
        for (let i = 0; i < this.mod; i++) {
            arr.push(new ZnElement(this.mod, i, this.options))
        }
        console.log(arr)
        return arr
    }

    public sum(a: ZnElement, b: ZnElement): ZnElement {
        return new ZnElement(this.mod, (a.representativeNum + b.representativeNum) % this.mod, this.options)
    }
    
    public multiply(a: ZnElement, b: ZnElement): ZnElement {
        return new ZnElement(this.mod, (a.representativeNum * b.representativeNum) % this.mod, this.options)
    }

}