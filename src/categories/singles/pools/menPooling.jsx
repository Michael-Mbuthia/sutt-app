import React, { useState, useEffect } from "react";
import "./MenPooling.css";

const MenPooling = () => {
  const [pools, setPools] = useState([]);
  const [newPoolName, setNewPoolName] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const [selectedPoolIndex, setSelectedPoolIndex] = useState(null);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");
  const [results, setResults] = useState({});

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => {
    setShowDialog(false);
    setNewPoolName("");
  };

  const addPool = () => {
    if (newPoolName) {
      setPools([...pools, { name: newPoolName, players: [], results: {} }]);
      closeDialog();
    }
  };

  const selectPool = (index) => {
    setSelectedPoolIndex(index);
    setPlayers(pools[index].players);
    setResults(pools[index].results);
  };

  const savePoolChanges = () => {
    const updatedPools = [...pools];
    updatedPools[selectedPoolIndex] = {
      ...updatedPools[selectedPoolIndex],
      players,
      results,
    };
    setPools(updatedPools);
  };

  const addPlayer = () => {
    if (newPlayer && !players.includes(newPlayer)) {
      setPlayers([...players, newPlayer]);
      setNewPlayer("");
    }
  };

  useEffect(() => {
    if (selectedPoolIndex !== null) {
      const generateMatches = () => {
        const newResults = {};
        for (let i = 0; i < players.length; i++) {
          for (let j = i + 1; j < players.length; j++) {
            const matchKey = [players[i], players[j]].sort().join("-");
            newResults[matchKey] = results[matchKey] || "";
          }
        }
        setResults(newResults);
      };
      generateMatches();
    }
  }, [players, selectedPoolIndex]);

  const updateScore = (player1, player2, newScore) => {
    if (player1 !== player2) {
      const sortedKey = [player1, player2].sort().join("-");
      setResults({ ...results, [sortedKey]: newScore });
    }
  };

  const getResult = (player1, player2) => {
    if (player1 === player2) return "-";

    const [first, second] = [player1, player2].sort();
    const key = `${first}-${second}`;
    const value = results[key] || "";

    // Determine if current direction is reversed
    if (value && player1 > player2) {
      // Reverse score only if value exists and key is in opposite direction
      const parts = value.split("-");
      if (parts.length === 2) {
        return `${parts[1]}-${parts[0]}`;
      }
    }

    return value;
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
          <ol className="pool-list">
            {pools.map((pool, index) => (
              <li key={index}>
                <button onClick={() => selectPool(index)}> {pool.name} </button>
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
              <input
                type="text"
                placeholder="Add new player"
                value={newPlayer}
                onChange={(e) => setNewPlayer(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addPlayer();
                }}
              />
              <button onClick={addPlayer}>Add Player</button>
              <h4>Players</h4>

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
                            <div className="disabled-cell">-</div>
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
            </div>
          </div>

          {/* Right Column: Matches */}
          <div className="matches-section">
            <h4>Matches</h4>
            <ul>
              {Object.entries(results).map(([matchKey, score], index) => {
                const [player1, player2] = matchKey.split("-");
                return (
                  <li key={index}>
                    {player1} vs {player2}: {score}
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
