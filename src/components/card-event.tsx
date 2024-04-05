interface CardEventProps {
  description: string
  children: string
}

export function CardEvent(props: CardEventProps) {
  return (
    <div className="w-full rounded-lg bg-zinc-900 flex flex-col gap-2 p-4">
      <h1 className="text-lg font-semibold">{props.children}</h1>
      <span className="text-sm">{props.description}</span>
    </div>
  )
}