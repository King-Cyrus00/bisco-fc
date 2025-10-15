import React from 'react';
import PlayerCard from '../components/team-pic';
import player1 from '../assets/images/coach.png'; 


export default function Under15Team() {
  const players = [
    { number: 7, name: 'K. Mensah', position: 'Forward', image: player1 },
    { number: 10, name: 'J. Owusu', position: 'Midfielder', image: player1 },
    { number: 10, name: 'J. Owusu', position: 'Midfielder', image: player1 },
    { number: 10, name: 'J. Owusu', position: 'Midfielder', image: player1 },
    // Add more players...
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h1 className="text-center text-3xl font-bold mb-8 text-[#0D47A1]">Under 15 Team</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {players.map((player) => (
          <PlayerCard key={player.number} {...player} />
        ))}
      </div>
    </section>
  );
}
