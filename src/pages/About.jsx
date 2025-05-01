import { useState } from "react";
import Navbar from "../components/Navbar";

function About() {
  const [lang, setLang] = useState("en");
  const text = {
    en: {
      heading1: "About Table of Deceit",
      subheading1: "What is Table of Deceit?",
      description: "Table of Deceit is a fan game inspired by Liar's Bar. There are two game modes. One is a card-based strategy game mixed in with Russian roulette. The goal of the game is the deceive and outsmart other players and bee bee the last one living.",
      subheading2: "How to play:",
      description1: "Card Mode: At the start of each round, all players are given a total of 5 cards and the table will be labeled as Ace, King, or Queen. You can either throw in any cards that are the same as the table, or lie and throw in a random card. If you suspect that someone has lied, you may call them out on it. Jokers are wild cards, and can be considered whatever the table is labeled as. If they told a lie their character will aim their gun at themselves and pull the trigger, causing a 1/6 chance of firing the bullet. With each shot you take, the chance of being shot increases. If they told a truth your character will be the one to shoot themself.",
      description2: "Dice Mode: At the start of the round, the players shuffle their dice, the player can only see THEIR dice. You make a bet on how many of a certain number are on the table, and someone else can either challenge it, bet higher, or bet on a different number. If you suspect that another player is bluffing, you can call them out on it. 1s are considered a wild, and can be whatever number is betted on If the bet is less than the number of dice on the table, the player who made the bet drinks one of the two vials of poison next to them. They are killed off once they drink both vials. If the bet is equal or higher than the number of dice on the table, the person who called them out is the one to drink the poison.",
      subheading3: "Tips and Tricks",
      description3: "Card Mode: Some players bait others by playing random cards early, then switch to real ones to trap accusers. This strategy is, however, quick for other players to learn so you have to shuffle tactics regularly.",
      description4: "Dice Mode: Never make a starting bet based off the number 1, this lets others know how many 1s are on the table, and adjust their bets accordingly.",
    },
    pl: {
      heading1: "O Table of Deceit",
      subheading1: "Czym jest Table of Deceit?",
      description: "Table of Deceit to gra fanowska inspirowana Liar's Bar. Istnieją dwa tryby gry. Jeden to oparta na kartach gra strategiczna połączona z rosyjską ruletką. Celem gry jest oszukanie i przechytrzenie innych graczy oraz pokonanie ostatniego żyjącego.",
      subheading2: "Jak grać:",
      description1: "Tryb Kart: Na początku każdej rundy wszyscy gracze otrzymują łącznie 5 kart, a stół jest oznaczony jako as, król lub dama. Możesz wrzucić dowolne karty, które są takie same jak na stole, lub skłamać i wrzucić losową kartę. Jeśli podejrzewasz, że ktoś skłamał, możesz go o tym powiadomić. Jokery to dzikie karty i można je uznać za cokolwiek, co jest oznaczone na stole. Jeśli skłamią, ich postać wyceluje broń w siebie i pociągnie za spust, co daje 1/6 szansy na wystrzelenie kuli. Z każdym oddanym strzałem szansa na postrzelenie wzrasta. Jeśli powiedzieli prawdę, twoja postać sama się zastrzeli.",
      description2: "Tryb Kości: Na początku rundy gracze tasują swoje kości, gracz widzi tylko SWOJE kości. Stawiasz zakład na liczbę kości o określonej liczbie na stole, a ktoś inny może albo zakwestionować to, albo postawić wyższy zakład, albo postawić na inną liczbę. Jeśli podejrzewasz, że inny gracz blefuje, możesz go wyrzucić. 1 są uważane za symbole wieloznaczne i mogą być dowolną liczbą, na którą postawiono zakład. Jeśli zakład jest mniejszy niż liczba kości na stole, gracz, który postawił zakład, wypija jedną z dwóch fiolek trucizny obok siebie. Zostają zabici, gdy wypiją obie fiolki. Jeśli zakład jest równy lub wyższy niż liczba kości na stole, osoba, która go wyrzuciła, wypija truciznę.",
      subheading3: "Porady i Triki",
      description3: "Tryb Kart: Niektórzy gracze wabią innych, grając losowymi kartami na początku, a następnie przechodzą na prawdziwe karty, aby złapać oskarżycieli. Ta strategia jest jednak szybka do nauczenia się przez innych graczy, więc musisz regularnie tasować taktyki.",
      description4: "Tryb Kości: Nigdy nie stawiaj zakładu początkowego na podstawie liczby 1, pozwala to innym graczom dowiedzieć się, ile jedynków jest na stole, i odpowiednio dostosować swoje zakłady.",
    },
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Navbar lang={lang} setLang={setLang} />
      <div className="flex justify-end px-6 pt-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="bg-neutral-800 text-white p-2 rounded"
        >
          <option value="en">English</option>
          <option value="pl">Polski</option>
        </select>
      </div>

      <main className="mx-auto px-6 md:px-32 lg:px-64 space-y-10 py-10">
        <h1 className="text-5xl font-bold text-center">{text[lang].heading1}</h1>

        <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{text[lang].subheading1}</h2>
          <p className="text-gray-100">{text[lang].description}</p>
        </div>

        <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{text[lang].subheading2}</h2>
          <p className="text-gray-100 mb-4">{text[lang].description1}</p>
          <p className="text-gray-100">{text[lang].description2}</p>
        </div>

        <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">{text[lang].subheading3}</h2>
          <p className="text-gray-100 mb-4">{text[lang].description3}</p>
          <p className="text-gray-100">{text[lang].description4}</p>
        </div>
      </main>
    </div>
  );
}

export default About;