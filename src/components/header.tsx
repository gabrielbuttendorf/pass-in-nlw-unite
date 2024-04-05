import nlwUniteIcon from "../assets/nlw-unite-icon.svg"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon}/>

      <nav className="flex items-center gap-5">
        <Link className="font-medium text-sm" to="/eventos">Eventos</Link>
        <Link className="font-medium text-sm" to="/participantes">Participantes</Link>
      </nav>
    </div>
  )
}