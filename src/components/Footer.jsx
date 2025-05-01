import telegramIcon from "../assets/logo_share.png";
import gmailIcon from "../assets/Gmail_Icon.png";

function Footer() {
  return (
    <footer className="w-full h-[5cm] bg-neutral-800 flex justify-end items-center">
      <div className="flex flex-col items-end mr-6">
        <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
          <img src={telegramIcon} alt="Telegram" className="h-6 mb-3" />
        </a>
        <a href="mailto:yourname@gmail.com">
          <img src={gmailIcon} alt="Gmail" className="h-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
  