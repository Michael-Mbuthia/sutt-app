import React, { useState, useEffect } from "react";
import "./MenPooling.css";

const MenPooling = () => {
  // State to manage pools
  const [pools, setPools] = useState([]);
  const [newPoolName, setNewPoolName] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  // State to manage players and match results for the selected pool
  const [selectedPoolIndex, setSelectedPoolIndex] = useState(null);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState({});

  // Function to open the dialog box for adding a new pool
  const openDialog = () => {
    setShowDialog(true);
  };

  // Function to close the dialog box
  const closeDialog = () => {
    setShowDialog(false);
    setNewPoolName("");
  };

  // Function to add a new pool
  const addPool = () => {
    if (newPoolName) {
      setPools([...pools, { name: newPoolName, players: [], results: {} }]);
      closeDialog();
    }
  };

  // Function to select a pool for editing
  const selectPool = (index) => {
    setSelectedPoolIndex(index);
    setPlayers(pools[index].players);
    setResults(pools[index].results);
  };

  // Function to save changes to the selected pool
  const savePoolChanges = () => {
    const updatedPools = [...pools];
    updatedPools[selectedPoolIndex] = {
      ...updatedPools[selectedPoolIndex],
      players,
      results,
    };
    setPools(updatedPools);
    setSelectedPoolIndex(null);
  };

  // Function to add a player to the selected pool
  const addPlayer = (newPlayer) => {
    if (newPlayer && !players.includes(newPlayer)) {
      setPlayers([...players, newPlayer]);
    }
  };

  // Function to generate matches when players change
  useEffect(() => {
    if (selectedPoolIndex !== null) {
      const generateMatches = () => {
        const newResults = {};
        for (let i = 0; i < players.length; i++) {
          for (let j = i + 1; j < players.length; j++) {
            const matchKey = `${players[i]}-${players[j]}`;
            newResults[matchKey] = results[matchKey] || ""; // Preserve existing scores
          }
        }
        setResults(newResults);
      };
      generateMatches();
    }
  }, [players]);

  // Function to update the score of a match
  const updateScore = (rowPlayer, colPlayer, newScore) => {
    if (rowPlayer !== colPlayer && newScore) {
      const key = `${rowPlayer}-${colPlayer}`;
      setResults({ ...results, [key]: newScore });
    }
  };

  // Function to get the result of a match
  const getResult = (rowPlayer, colPlayer) => {
    if (rowPlayer === colPlayer) {
      return "-"; // Same player, no match
    }
    const key1 = `${rowPlayer}-${colPlayer}`;
    const key2 = `${colPlayer}-${rowPlayer}`;
    return results[key1] || results[key2] || "";
  };

  // Function to display all possible matches
  const getAllMatches = () => {
    const matches = [];
    for (let i = 0; i < players.length; i++) {
      for (let j = i + 1; j < players.length; j++) {
        matches.push(`${players[i]} vs ${players[j]}`);
      }
    }
    return matches;
  };

  return (
    <div className="pool-container">
      {/* Dialog Box for Adding Pools */}
      {showDialog && (
        <div className="dialog">
          <h3>Add New Pool</h3>
          <input
            type="text"
            placeholder="Enter pool name"
            value={newPoolName}
            onChange={(e) => setNewPoolName(e.target.value)}
          />
          <button onClick={addPool}>Add Pool</button>
          <button onClick={closeDialog}>Cancel</button>
        </div>
      )}

      {/* Pool List Section */}
      {selectedPoolIndex === null ? (
        <div>
          <h2>Men's Pools</h2>
          <button onClick={openDialog}>Add Pool</button>
          <ol>
            {pools.map((pool, index) => (
              <li key={index}>
                {pool.name}{" "}
                <button onClick={() => selectPool(index)}>Edit</button>
              </li>
            ))}
          </ol>
        </div>
      ) : (
        <div className="pool-layout">
          {/* Left Column: Pool Table */}
          <div className="pool-table">
            <h3>{pools[selectedPoolIndex].name}</h3>
            <button onClick={savePoolChanges}>Save Changes</button>
            <button onClick={() => setSelectedPoolIndex(null)}>
              Back to Pools
            </button>

            {/* Player Management */}
            <div>
              <h4>Players</h4>
              <input
                type="text"
                placeholder="Add new player"
                onKeyDown={(e) => {
                  if (e.key === "Enter") addPlayer(e.target.value);
                }}
              />
              <ul>
                {players.map((player, index) => (
                  <li key={index}>{player}</li>
                ))}
              </ul>
            </div>

            {/* Matches Table */}
            <div>
              <h4>Matches</h4>
              <table className="round-robin-table">
                <thead>
                  <tr>
                    <th>Players</th>
                    {players.map((p) => (
                      <th key={p}>{p}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {players.map((rowPlayer, rowIndex) => (
                    <tr key={rowPlayer}>
                      <td>{rowPlayer}</td>
                      {players.map((colPlayer, colIndex) => (
                        <td key={`${rowPlayer}-${colPlayer}`}>
                          {rowIndex === colIndex ? (
                            <div className="disabled-cell">-</div> // Diagonal cells
                          ) : (
                            <input
                              type="text"
                              value={getResult(rowPlayer, colPlayer)}
                              onChange={(e) =>
                                updateScore(
                                  rowPlayer,
                                  colPlayer,
                                  e.target.value
                                )
                              }
                              placeholder="Score"
                            />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <h4>All Possible Matches</h4>
                <ul>
                  {getAllMatches().map((match, index) => (
                    <li key={index}>{match}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Matches */}
          <div className="matches-section">
            <h4>All Possible Matches</h4>
            <ul>
              {Object.keys(results).map((matchKey, index) => {
                const [player1, player2] = matchKey.split("-");
                return (
                  <li key={index}>
                    {player1} vs {player2} — Score:{" "}
                    {results[matchKey] || "Not Played"}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenPooling;
