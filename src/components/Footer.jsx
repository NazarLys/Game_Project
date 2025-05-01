function Footer() {
    return (
      <footer className="w-full h-12 bg-gray-200 flex justify-center items-center">
        <div className="flex flex-col items-center">
          <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
            <img src="logo_share.png" alt="Telegram" className="h-5 mb-1" />
          </a>
          <a href="mailto:yourname@gmail.com">
            <img src="Gmail_Icon.png" alt="Gmail" className="h-5" />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  