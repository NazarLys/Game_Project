import telegramIcon from "../assets/logo_share.png";
import gmailIcon from "../assets/Gmail_Icon.png";
import steamIcon from "../assets/steam.png";

function Footer() {
  return (
    <footer className="w-full h-[3cm] bg-neutral-800 flex items-center justify-between px-8">
      <div className="text-white text-sm">
        © 2025 Table of Deceit. 
      </div>
      <div className="flex flex-col items-end space-y-3">
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">Our Telegram:</span>
          <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
            <img src={telegramIcon} alt="Telegram" className="h-6" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">Our Steam:</span>
          <a href="https://store.steampowered.com/">
            <img src={steamIcon} alt="Steam" className="h-6" />
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-white text-sm">Our Gmail:</span>
          <a href="mailto:yourname@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
