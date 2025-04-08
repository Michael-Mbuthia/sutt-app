import React from "react";

const sampleKnockout = [
  {
    id: 1,
    match: "Match 1",
    team1: "Player A",
    team2: "Player B",
    score1: 3,
    score2: 2,
  },
  {
    id: 2,
    match: "Match 2",
    team1: "Player C",
    team2: "Player D",
    score1: 4,
    score2: 3,
  },
];

const Knockout = ({ isAdmin }) => {
  const handleUpdateScore = (id) => {
    // Placeholder for admin knockout score update logic
    alert(`Update knockout score for match id ${id}`);
  };

  return (
    <div className="knockout">
      <h3>Knockout Stage</h3>
      <div className="bracket">
        {sampleKnockout.map((match) => (
          <div key={match.id} className="match">
            <p>{match.match}</p>
            <p>
              {match.team1} vs {match.team2}
            </p>
            <p>
              Score: {match.score1} - {match.score2}
            </p>
            {isAdmin && (
              <button onClick={() => handleUpdateScore(match.id)}>
                Update Score
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knockout;
