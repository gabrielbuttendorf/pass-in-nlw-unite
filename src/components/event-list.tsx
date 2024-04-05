import { Search } from "lucide-react";
import { Table } from "./table/table"
import { CardEvent } from "./card-event";

export function EventList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input type="text"
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"   
            placeholder="Buscar evento..." 
          />
        </div>
      </div>

      <Table>
        <div className="flex flex-col gap-2 p-1">
          <CardEvent 
            description="Este é o resumo do NLW Unite">
            NLW Unite
          </CardEvent>
          <CardEvent 
            description="Este é o resumo do NLW Expert">
            NLW Expert
          </CardEvent>
        </div>
      </Table>
    </div>
  )
}