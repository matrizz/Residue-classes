import type { ZnElement } from "../classes/ZnElement";

export default function formatZnElement(value: ZnElement[]) {
    
    const representativeNums = value.map(e => e.representativeNum)
    const valuesSet = value.map(e => e.value)

    return (
        <div className="flex flex-col">
            {representativeNums.map((e, i) => (
                <div>
                    {' '}<span key={i+e} className="text-3xl overline">{+e}</span> = {JSON.stringify(valuesSet[e]).replace('[', '{ ').replace(']', ' }').replaceAll(',', ', ')}
                </div>
            ))}
        </div>
    )
}