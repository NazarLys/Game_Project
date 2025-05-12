import telegramIcon from "../assets/logo_share.png";
import gmailIcon from "../assets/Gmail_Icon.png";
import steamIcon from "../assets/steam.png";

function Footer({ lang }) {
  const t = {
    en: {
      copyright: "© 2025 Table of Deceit.",
      telegram: "Our Telegram:",
      steam: "Our Steam:",
      gmail: "Our Gmail:",
    },
    pl: {
      copyright: "© 2025 Table of Deceit.",
      telegram: "Nasz Telegram:",
      steam: "Nasz Steam:",
      gmail: "Nasz Gmail:",
    },
  };

  return (
    <footer className="w-full h-[3cm] bg-neutral-800 flex items-center justify-between px-8">
      <div className="text-white text-sm">
        {t[lang].copyright}
      </div>
      <div className="flex flex-col items-end space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">{t[lang].telegram}</span>
          <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="h-6" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">{t[lang].steam}</span>
          <a href="https://store.steampowered.com/">
            <img src={steamIcon} alt="Steam" className="h-6" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">{t[lang].gmail}</span>
          <a href="mailto:yourname@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
