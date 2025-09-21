import type { ZnElement } from "../classes/ZnElement";

export default function formatZn(remainderClass: number, elements: ZnElement[]) {
    const _elements = elements.map(e => e.representativeNum)

    return (
        <>
            <span className="text-3xl text-center">
                Z<sub>{remainderClass}</sub>
            </span> = {'{'}{_elements.map((e, i) => (
                <>
                    {' '}
                    <span key={i} className="font-mono text-2xl overline">{e}</span>
                    {e === _elements[_elements.length - 1] ? '' : ','}
                </>
            ))} {'}'}
        </>
    )
}