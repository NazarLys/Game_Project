import { useEffect } from 'react';

const Play = () => {
  useEffect(() => {
    window.location.href = "/game/Table_of_Deceit.html";
  }, []);

  return <p>Redirecting to game...</p>;
};

export default Play;