import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import slide1 from "../assets/image1.png"
import slide2 from "../assets/image2.png"
import slide3 from "../assets/image3.png"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function Home() {
  const slides = [slide1, slide2]
  const [slideIndex, setSlideIndex] = useState(0)
  const [lang, setLang] = useState("en")

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const text = {
    en: {
      heading: "Welcome to Table of Deceit",
      intro: "This is a multiplayer fan game based on Liar's Bar. Enjoy your game! Good Luck!",
      play: "Play Now",
      deceiveTitle: "Deceive Your Friends",
      deceiveText:
        "Grab a seat at a table of four and immerse yourself in the ultimate first-person multiplayer online experience where cunning and trickery are the name of the game.",
      gameModesTitle: "Game Modes",
      cardModeTitle: "Liar's Deck",
      cardModeSteps: [
        "Players take turns playing a card face down and declaring its value. The value should match the table’s value. (e.g., \"King\" or \"Queen\").",
        "When a player lays down a card, they might be lying about its value. If you suspect a lie, you can call their bluff.",
        "If someone’s bluff is called and they were lying, they must play a round of Russian Roulette. Surviving one bullet out of 6 rounds of shells means you stay in the game; failing means game over for you.",
        "After Russian Roulette is played, the cards are reset, and the game continues.",
      ],
      diceModeTitle: "Devil's Deck",
      diceModeSteps: [
        "Same rules as before, but a lot more risky and interesting.",
        "Everything is the same, but Joker doesn't count as any card now!",
        "If a player plays a joker and another calls them a liar, everyone except the accused must shoot themselves.",
        "Hmmm, this player placed three cards right away... It's definitely a lie. But what if it's a Joker?! - These thoughts will appear very often in this mode.",
      ],
    },
    pl: {
      heading: "Witamy w Table of Deceit",
      intro: "To wieloosobowa gra fanowska oparta na Liar's Bar. Miłej gry! Powodzenia!",
      play: "Zagraj teraz",
      deceiveTitle: "Oszukuj swoich przyjaciół",
      deceiveText:
        "Usiądź przy stole dla czterech osób i zanurz się w pierwszoosobowej, wieloosobowej grze online, gdzie spryt i podstęp to klucz do zwycięstwa.",
      gameModesTitle: "Tryby gry",
      cardModeTitle: "Talia Kłamcy",
      cardModeSteps: [
        'Gracze po kolei zagrywają kartę zakrytą i deklarują jej wartość. Powinna ona pasować do wartości obowiązującej na stole (np. "Król" lub "Dama").',
        "Gracz może kłamać o wartości karty. Podejrzewasz oszustwo? Rzuć mu wyzwanie!",
        "Jeśli blef został odkryty, oszust gra w Rosyjską Ruletkę. Przeżycie jednej kuli z 6 oznacza dalszą grę. Śmierć — koniec zabawy.",
        "Po Rosyjskiej Ruletce talia się resetuje, a gra toczy się dalej.",
      ],
      diceModeTitle: "Diabelska Talia",
      diceModeSteps: [
        "Te same zasady co wcześniej, ale o wiele bardziej ryzykowne i interesujące.",
        "Wszystko jest takie samo, ale Joker nie liczy się już jako żadna karta!",
        "Jeśli gracz zagra Jokera, a inny nazwie go kłamcą, wszyscy oprócz oskarżonego muszą się postrzelić",
        "Hmmm, ten gracz od razu położył trzy karty... To na pewno kłamstwo. Ale co jeśli to Joker?! – Takie myśli będą się często pojawiać w tym trybie.",
      ],
    },
  }

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} />
  
      <main className="flex flex-col items-center justify-center p-6 space-y-8 flex-grow">
        <div className="bg-neutral-800 p-6 rounded-lg shadow-md text-center max-w-2xl w-full">
          <h1 className="text-4xl font-bold mb-2">{text[lang].heading}</h1>
          <p className="text-lg text-gray-100 pt-3">{text[lang].intro}</p>
        </div>

        <div className="w-full max-w-3xl h-96 overflow-hidden rounded shadow-lg">
          <img
            src={slides[slideIndex]}
            alt="Slideshow"
            className="w-full h-full object-cover transition duration-500"
          />
        </div>

        <div className="max-w-3xl text-left space-y-8">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-md text-center max-w-3xl w-full">
            <h2 className="text-2xl font-bold">{text[lang].deceiveTitle}</h2>
            <p className="text-gray-100 mt-2 pt-1">{text[lang].deceiveText}</p>
          </div>

          <div className="h-72 bg-fixed bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/src/assets/back.png')" }}>
          <div className="h-full bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-3xl font-bold">{text[lang].gameModesTitle}</h2>
          </div>
        </div>

          <div className="bg-neutral-800 p-2 rounded-lg shadow-md text-left max-w-3xl w-full">
            <h2 className="text-3xl font-semibold text-center mt-3">{text[lang].cardModeTitle}</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-100 pt-3">
              {text[lang].cardModeSteps.map((step, idx) => (
                <li key={`card-${idx}`}>{step}</li>
              ))}
            </ul>
           
            <h2 className="text-3xl font-semibold text-center mt-4">{text[lang].diceModeTitle}</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-100 pt-3 mb-3">
              {text[lang].diceModeSteps.map((step, idx) => (
                <li key={`dice-${idx}`}>{step}</li>
              ))}
            </ul>
            </div>
          </div>

        <Link to="/play" className="mt-1 bg-green-700 hover:bg-green-600 px-10 py-3 rounded text-lg font-semibold transition">
          {text[lang].play}
        </Link>
      </main>
      <Footer lang={lang} />
    </div>
  )
}

export default Home
