import { useState } from "react"
import { Zn } from "./classes/Zn"
import formatZn from "./utils/formatZn"
import formatZnElement from "./utils/formatZnElement"

function App() {
  const [Z, setZ] = useState<Zn>(new Zn(3))

  return (
    <>
      <div className="flex flex-col gap-16 h-screen w-screen items-center justify-center place-items-center place-content-center">

        <div className="flex-col space-y-4 text-center">
          <div>
            <p className="text-3xl font-bold">Gerar Classes de resto em:</p>
            <span className="text-xs">🛈 Funciona bem para demonstrar o conceito e para n {'<'} 100</span>
          </div>

          <div className="space-x-4 flex items-center justify-center">
            <div>
              <label htmlFor="z" className="text-3xl">Z</label>
              <sub>
                <input id="z" className="text-2xl rounded border border-white/20 w-10" type="number" value={Z.mod} onChange={e => setZ(new Zn(parseInt(e.target.value), []))} />
              </sub>
            </div>
            <label htmlFor="Z-size">Tamanho:</label>
            <input id="Z-size" type="number" className="text-2xl rounded border border-white/20 w-10" value={Z.options.size} onChange={e => setZ(new Zn(Z.mod, [], { size: parseInt(e.target.value), negativeValues: Z.options.negativeValues }))} />
            <label htmlFor="Z-negative">Valores Negativos:</label>
            <input id="Z-negative" type="checkbox" checked={Z.options.negativeValues} onChange={e => setZ(new Zn(Z.mod, [], { size: Z.options.size, negativeValues: e.target.checked }))} />
          </div>

        </div>
        <div className="text-center text-3xl font-bold">
          {Z ? formatZn(Z.mod, Z.elements) : null}
        </div>
        <div className="overflow-y-scroll">
          <div className="font-bold text-2xl space-y-4 flex-col">

            <div>
              {Z ? formatZnElement(Z.elements) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
