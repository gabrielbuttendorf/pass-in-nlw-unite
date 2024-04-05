import { EventList } from "../components/event-list";
import { Header } from "../components/header";

export function Events() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 px-4 flex flex-col gap-5">
      <Header />
      <EventList />
    </div>
  )
}