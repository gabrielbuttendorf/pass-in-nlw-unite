interface CardEventProps {
  description: string
  children: string
  attendees: number
}

export function CardEvent(props: CardEventProps) {
  return (
    <div className="w-full rounded-lg bg-zinc-900 flex flex-col gap-2 p-4">
      <div className="flex gap-4 items-center">
        <h1 className="text-lg font-semibold">{props.children}</h1>
        <span className="text-xs text-emerald-300">{props.attendees} participantes</span>
      </div>
      <span className="text-sm">{props.description}</span>
    </div>
  )
}