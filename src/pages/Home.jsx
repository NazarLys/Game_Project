import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import slide1 from "../assets/image1.jpg"
import slide2 from "../assets/image2.jpg"
import slide3 from "../assets/image3.jpg"
import Navbar from "../components/Navbar"

function Home() {
  const slides = [slide1, slide2, slide3]
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
      cardModeTitle: "Card Mode",
      cardModeSteps: [
        "Players take turns playing a card face down and declaring its value. The value should match the table’s value. (e.g., \"King\" or \"Queen\").",
        "When a player lays down a card, they might be lying about its value. If you suspect a lie, you can call their bluff.",
        "If someone’s bluff is called and they were lying, they must play a round of Russian Roulette. Surviving one bullet out of 6 rounds of shells means you stay in the game; failing means game over for you.",
        "After Russian Roulette is played, the cards are reset, and the game continues.",
      ],
      diceModeTitle: "Dice Mode",
      diceModeSteps: [
        "Roll your dice. No one can see your roll, but everyone’s watching your next move.",
        "On your turn, make a bid predicting the total number of dice on the table, showing a specific face (e.g., \"There are five 3’s\"). The next player must either raise the bid by increasing the number of dice or the face value (e.g., \"There are six 4’s\") or challenge the previous bid.",
        "Think someone’s lying? Challenge their bid! The loser drinks a bottle of poison.",
        "Drink two bottles, and you’re out! The last one alive wins!",
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
      cardModeTitle: "Tryb Kart",
      cardModeSteps: [
        'Gracze po kolei zagrywają kartę zakrytą i deklarują jej wartość. Powinna ona pasować do wartości obowiązującej na stole (np. "Król" lub "Dama").',
        "Gracz może kłamać o wartości karty. Podejrzewasz oszustwo? Rzuć mu wyzwanie!",
        "Jeśli blef został odkryty, oszust gra w Rosyjską Ruletkę. Przeżycie jednej kuli z 6 oznacza dalszą grę. Śmierć — koniec zabawy.",
        "Po Rosyjskiej Ruletce talia się resetuje, a gra toczy się dalej.",
      ],
      diceModeTitle: "Tryb Kości",
      diceModeSteps: [
        "Rzuć kośćmi. Tylko ty widzisz wynik, ale wszyscy patrzą, co zrobisz.",
        'W swojej turze zgłoś ofertę — przewidując łączną liczbę kości pokazujących daną wartość (np. "Jest pięć trójek"). Następny gracz może ją podbić (więcej kości lub wyższa wartość), albo zakwestionować.',
        "Podejrzewasz kłamstwo? Zakwestionuj ofertę! Przegrany pije butelkę trucizny.",
        "Wypijesz dwie — odpadasz. Ostatni żywy wygrywa!",
      ],
    },
  }

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      <main className="flex flex-col items-center justify-center p-6 space-y-8">
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

        <Link to="/play" className="mt-1 bg-orange-600 hover:bg-orange-800 px-10 py-3 rounded text-lg font-semibold transition">
          {text[lang].play}
        </Link>
      </main>
    </div>
  )
}

export default Home
