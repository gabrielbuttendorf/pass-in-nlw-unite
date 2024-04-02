import search from "../assets/search.svg"

export function AttendeeList() {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <img src={search} className="size-4 text-emerald-300" />
        <input className="bg-transparent flex-1 outline-none" type="text" placeholder="Buscar participante..." />
        </div>
      </div>

      <div>
        <div className="border border-white/10 rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-2.5 py-3 text-sm font-semibold">
                  <input type="checkbox" />
                </th>
                <th className="px-2.5 py-3 text-sm font-semibold">Código</th>
                <th className="px-2.5 py-3 text-sm font-semibold">Participante</th>
                <th className="px-2.5 py-3 text-sm font-semibold">Data da inscrição</th>
                <th className="px-2.5 py-3 text-sm font-semibold">Data do check-in</th>
                <th className="px-2.5 py-3 text-sm font-semibold"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2.5 py-3 text-sm">
                  <input type="checkbox" />
                </td>
                <td className="px-2.5 py-3 text-sm">123456</td>
                <td className="px-2.5 py-3 text-sm">
                  <div>
                    <span className="font-semibold">Gabriel Felipe Buttendorf</span>
                    <span>gabrielbuttendorf@gmail.com</span>
                  </div>
                </td>
                <td className="px-2.5 py-3 text-sm">7 dias atrás</td>
                <td className="px-2.5 py-3 text-sm">3 dias atrás</td>
                <td className="px-2.5 py-3 text-sm"></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>
                  Mostrando 10 de 228 itens
                </td>
                <td colSpan={3}>
                  Página 1 de 11
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}