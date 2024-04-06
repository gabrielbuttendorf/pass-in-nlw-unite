import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Search } from "lucide-react";
import { Table } from "./table/table"
import { CardEvent } from "./card-event";
import { ChangeEvent, useEffect, useState } from "react"
import { IconButton } from "./icon-button";

const eventsData = [
  {
    name: "NLW Unite", 
    attendees: Math.floor(Math.random() * 250), 
    description: "O NLW Unite da Rocketseat foi um evento online e gratuito que aconteceu em abril de 2024. O objetivo do evento era desafiar programadores de todos os níveis a criarem um projeto completo em 3 aulas, utilizando uma nova tecnologia." 
  },
  {
    name: "NLW Expert", 
    attendees: Math.floor(Math.random() * 250), 
    description: "O NLW Expert da Rocketseat é um programa de mentoria exclusivo para desenvolvedores experientes que desejam elevar suas habilidades e alcançar o próximo nível em suas carreiras." 
  },
  {
    name: "Explorer", 
    attendees: Math.floor(Math.random() * 250), 
    description: "O Explorer da Rocketseat é um programa completo de formação para quem deseja iniciar na área de programação. Através do método 7-2-1 (70% prática, 20% networking e 10% branding), o programa te prepara para se tornar um desenvolvedor FullStack completo, pronto para conquistar sua primeira vaga no mercado." 
  }
]

export function EventList() {
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())

    if (url.searchParams.has("search")) {
      return url.searchParams.get("search") ?? ''
    }

    return ''
  })

  const [filteredEvents, setFilteredEvents] = useState(eventsData)
  useEffect(() => {
    const filtered = eventsData.filter(event => 
      event.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    setFilteredEvents(filtered)
  }, [search])

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())

    url.searchParams.set("search", search)
    
    window.history.pushState({}, "", url)

    setSearch(search)
  }

  function onChangeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Eventos</h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input type="text"
            value={search}
            onChange={onChangeSearchInput}
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm focus:ring-0"   
            placeholder="Buscar evento..." 
          />
        </div>
      </div>

      <Table>
        <div className="flex flex-col gap-5 px-2 py-3">
          {filteredEvents.map((event, index) => (
            <CardEvent 
              key={index}
              attendees={event.attendees}
              description={event.description}>
              {event.name}
            </CardEvent>
          ))}
        </div>
      </Table>
    </div>
  )
}