import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Events } from "./pages/events"

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participantes" element={<Home />} />
      <Route path="/eventos" element={<Events />} />
    </Routes>
  )
}