import { useState } from "react";
import Navbar from "../components/Navbar";

function About() {
  const [lang, setLang] = useState("en");
  const text = {
    en: {
     txt: "The game is supposed to be here.",
  },
    pl: {
     txt: "Gra powinna się wkrótce ukazać.",
    },
  };
    return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Navbar lang={lang} setLang={setLang} />

      <div className="min-h-screen mx-auto bg-neutral-900 text-white text-left text-lg leading-relaxed px-10 space-y-3">
       <h1 className="text-6xl font-bold text-center pt-100">{text[lang].txt}.</h1>
      </div>
    </div>
    )
  }
  
  export default About