export interface ZnElementOptions {
    size: number
    negativeValues: boolean
}

export class ZnElement {

    public value: number[] = []
    public belongingClass: number
    public representativeNum: number
    public options: ZnElementOptions = { size: 7, negativeValues: true }

    constructor(_belongingClass: number, representativeNumber: number | string, options?: ZnElementOptions) {

        this.belongingClass = _belongingClass
        this.options = options ?? this.options

        if (_belongingClass < 1 || !Number.isInteger(_belongingClass)) {
            throw new Error('Remainder class must be a positive integer greater than 0')
        }
        if (typeof representativeNumber === 'number' && !Number.isInteger(representativeNumber)) {
            throw new Error('Representative number must be an integer or a string')
        }
        if (typeof representativeNumber === 'number' && representativeNumber < 0) {
            throw new Error('Representative number must be a non-negative integer or a string')
        }
        if (typeof representativeNumber === 'string' && !/^\d+$/.test(representativeNumber)) {
            throw new Error('Representative number string must contain only digits')
        }
        if (typeof representativeNumber === 'string' && representativeNumber.length > 1 && representativeNumber.startsWith('0')) {
            throw new Error('Representative number string must not have leading zeros')
        }
        if (typeof representativeNumber === 'number' && _belongingClass <= representativeNumber) {
            throw new Error('Representative number must be less than the remainder class')
        }
        if (typeof representativeNumber === 'string') {
            this.representativeNum = parseInt(representativeNumber)
        } else this.representativeNum = representativeNumber

        this.generateRemainderClassValues()
    }

    private generateRemainderClassValues(): void {
        let half
        
        if (this.options.negativeValues) {
            half = Math.floor(this.options.size / 2);
            
            for (let i = half; i > 0; i--) {
                const value = this.representativeNum - i * this.belongingClass;
                this.value.push(value);
            }
            this.value.push(this.representativeNum);
        }


        for (let i = 0; i <= (half ? half : this.options.size); i++) {
            const value = this.representativeNum + i * this.belongingClass;
            this.value.push(value);
        }
    }
}