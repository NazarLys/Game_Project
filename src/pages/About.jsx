function About() {
  return (
    <div className="min-h-screen mx-auto bg-neutral-900 text-white text-left text-lg leading-relaxed px-96 space-y-3">
      <h1 className="text-4xl font-bold text-center mb-6 pt-8">About Table of Deceit</h1>
      <h2 className="text-3xl font-semibold mt-4">What is Table of Deceit?</h2>
      <p>
        <em>Table of Deceit</em> is a fan game inspired by <em>Liar's Bar</em>. There are two game modes. One is a card-based strategy game mixed in with Russian roulette. The goal of the game is the deceive and outsmart other players and be the last one living. 
      </p>

      <h2 className="text-2xl font-semibold mt-4"> How to play:</h2>
      <p>
      <strong>Card Mode:</strong> At the start of each round, all players are given a total of 5 cards and the table will be labeled as Ace, King, or Queen. You can either throw in any cards that are the same as the table, or lie and throw in a random card. If you suspect that someone has lied, you may call them out on it. Jokers are wild cards, and can be considered whatever the table is labeled as.
If they told a lie their character will aim their gun at themselves and pull the trigger, causing a 1/6 chance of firing the bullet. With each shot you take, the chance of being shot increases.
If they told a truth your character will be the one to shoot themself.      </p>
      <p>
      <strong>Dice Mode:</strong> At the start of the round, the players shuffle their dice, the player can only see THEIR dice. You make a bet on how many of a certain number are on the table, and someone else can either challenge it, bet higher, or bet on a different number. If you suspect that another player is bluffing, you can call them out on it. 1s are considered a wild, and can be whatever number is betted on
If the bet is less than the number of dice on the table, the player who made the bet drinks one of the two vials of poison next to them. They are killed off once they drink both vials.
If the bet is equal or higher than the number of dice on the table, the person who called them out is the one to drink the poison.      </p>
      <h2 className="text-2xl font-semibold mt-4">Tips and Tricks</h2>

      <h3 className="text-xl font-medium mt-2">Card Mode:</h3>
      <p>
      Some players bait others by playing random cards early, then switch to real ones to trap accusers. This strategy is, however, quick for other players to learn so you have to shuffle tactics regularly.
      </p>
      <h3 className="text-xl font-medium mt-2">Dice Mode:</h3>
      <p>
      Never make a starting bet based off the number 1, this lets others know how many 1s are on the table, and adjust their bets accordingly.
      </p>
    </div>
  )
}
export default About;
