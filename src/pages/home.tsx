import { AttendeeList } from "../components/attendee-list";
import { Header } from "../components/header";

export function Home() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 px-4 flex flex-col gap-5">
      <Header />
      <AttendeeList />
    </div>
  )
}
