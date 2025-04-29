import { Link } from "react-router-dom"

function Navbar({ lang, setLang }) {
  return (
    <header className="bg-neutral-800 text-white p-2 shadow">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex gap-6 text-lg font-semibold">
          <li><Link to="/" className="hover:text-orange-400">Home</Link></li>
          <li><Link to="/about" className="hover:text-orange-400">About</Link></li>
          <li><Link to="/play" className="hover:text-orange-400">Play Now</Link></li>
        </ul>
        <div>
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-neutral-800 text-white p-1 rounded"
          >
            <option value="en">English</option>
            <option value="pl">Polish</option>
          </select>
        </div>
      </nav>
    </header>
  )
}

export default Navbar