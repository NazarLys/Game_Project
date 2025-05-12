import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  const [lang, setLang] = useState("en");
  const text = {
    en: {
      heading1: "About Table of Deceit",
      subheading1: "What is Table of Deceit?",
      description: "Table of Deceit is a fan game inspired by Liar's Bar. The game is a card-based strategy game mixed in with Russian roulette. There are two game modes. One is called Liar's Deck, where you played by the core rules, and the other is called Devil's Deck, where Joker plays as a wild card for kills. The goal of the game is the deceive and outsmart other players and bee bee the last one living.",
      subheading2: "How to play:",
      description1: "Liar's Deck: At the start of each round, all players are given a total of 5 cards and the table will be labeled as Ace, King, or Queen. You can either throw in any cards that are the same as the table, or lie and throw in a random card. If you suspect that someone has lied, you may call them out on it. Jokers are wild cards, and can be considered whatever the table is labeled as. If they told a lie their character will aim their gun at themselves and pull the trigger, causing a 1/6 chance of firing the bullet. With each shot you take, the chance of being shot increases. If they told a truth your character will be the one to shoot themself. Remember, here the Joker plays as a wild card for any table labeled card.",
      description2: "Devil's Deck: The rule's are the same, the only exception is that in Liar's Deck Joker played as the wild card for truth. Here Joker is always a bad outcome if someone called the player a Liar, while the Joker was on the table. And it's not only a bad outcome for that player, but for all player's except for the one, who placed that Joker.",
      subheading3: "Tips and Tricks",
      description3: "Liar's Deck: Some players bait others by playing random cards early, then switch to real ones to trap accusers. This strategy is, however, quick for other players to learn so you have to shuffle tactics regularly.",
      description4: "Devil's Deck: Usually the players will bluff and show that they are confident, when they place the Joker on the table, that's when you have to think about your choice. Perhaps it's worth it, or perhaps it's better to pass your card's onto the table.",
    },
    pl: {
      heading1: "O Table of Deceit",
      subheading1: "Czym jest Table of Deceit?",
      description: "Table of Deceit to gra fanowska inspirowana Liar's Bar. Istnieją dwa tryby gry. Jeden to oparta na kartach gra strategiczna połączona z rosyjską ruletką. Celem gry jest oszukanie i przechytrzenie innych graczy oraz pokonanie ostatniego żyjącego.",
      subheading2: "Jak grać:",
      description1: "Talia Kłamcy: Na początku każdej rundy wszyscy gracze otrzymują łącznie 5 kart, a stół jest oznaczony jako as, król lub dama. Możesz wrzucić dowolne karty, które są takie same jak na stole, lub skłamać i wrzucić losową kartę. Jeśli podejrzewasz, że ktoś skłamał, możesz go o tym powiadomić. Jokery to dzikie karty i można je uznać za cokolwiek, co jest oznaczone na stole. Jeśli skłamią, ich postać wyceluje broń w siebie i pociągnie za spust, co daje 1/6 szansy na wystrzelenie kuli. Z każdym oddanym strzałem szansa na postrzelenie wzrasta. Jeśli powiedzieli prawdę, twoja postać sama się zastrzeli.",
      description2: "Diabelska Talia: Zasady są takie same, z jednym wyjątkiem — w talii Kłamcy Joker był kartą prawdy. Tutaj Joker zawsze oznacza zły rezultat, jeśli ktoś oskarży gracza o kłamstwo, a Joker znajduje się na stole. I to zły rezultat nie tylko dla tego gracza, ale dla wszystkich oprócz tego, który zagrał Jokera.",
      subheading3: "Porady i Triki",
      description3: "Talia Kłamcy: Niektórzy gracze wabią innych, grając losowymi kartami na początku, a następnie przechodzą na prawdziwe karty, aby złapać oskarżycieli. Ta strategia jest jednak szybka do nauczenia się przez innych graczy, więc musisz regularnie tasować taktyki.",
      description4: "Diabelska Talia: Zazwyczaj gracze będą blefować i udawać pewność siebie, gdy położą Jokera na stole — to wtedy musisz dobrze przemyśleć swoją decyzję. Może warto zaryzykować... a może lepiej po prostu dołożyć swoją kartę do stosu.",
    },
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen flex flex-col">
      <Navbar lang={lang} setLang={setLang} />
  
      <main className="mx-auto px-6 md:px-32 lg:px-64 space-y-10 py-10 flex-grow">
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
  
      <Footer lang={lang} />
    </div>
  );
}

export default About;