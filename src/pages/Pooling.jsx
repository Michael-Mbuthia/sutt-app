import React, { useState } from "react";

const sampleData = {
  singles: {
    men: [
      { id: 1, name: "Player A", score: 3 },
      { id: 2, name: "Player B", score: 2 },
    ],
    ladies: [
      { id: 3, name: "Player C", score: 4 },
      { id: 4, name: "Player D", score: 1 },
    ],
  },
  under18: {
    boys: [
      { id: 5, name: "Player E", score: 3 },
      { id: 6, name: "Player F", score: 2 },
    ],
    girls: [
      { id: 7, name: "Player G", score: 4 },
      { id: 8, name: "Player H", score: 1 },
    ],
  },
  doubles: {
    men: [
      { id: 9, name: "Team A", score: 5 },
      { id: 10, name: "Team B", score: 3 },
    ],
    ladies: [
      { id: 11, name: "Team C", score: 4 },
      { id: 12, name: "Team D", score: 2 },
    ],
  },
  family: [{ id: 13, name: "Family Team", score: 6 }],
};

const Pooling = ({ isAdmin }) => {
  const [category, setCategory] = useState("singles");
  const [subCategory, setSubCategory] = useState("men");

  const renderTable = () => {
    let data = [];
    if (category === "family") {
      data = sampleData.family;
    } else {
      data = sampleData[category][subCategory];
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            {isAdmin && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              {isAdmin && (
                <td>
                  <button onClick={() => handleUpdateScore(item.id)}>
                    Update
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleUpdateScore = (id) => {
    // Placeholder for admin score update logic
    alert(`Update score for id ${id}`);
  };

  return (
    <div className="pooling">
      <h3>Pooling Stage</h3>
      <div className="category-select">
        <label>
          Category:
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="singles">Singles</option>
            <option value="under18">Under 18</option>
            <option value="doubles">Doubles</option>
            <option value="family">Family Event</option>
          </select>
        </label>
        {category !== "family" && (
          <label>
            Sub-Category:
            <select
              value={subCategory}
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
            >
              {category === "singles" && (
                <>
                  <option value="men">Men</option>
                  <option value="ladies">Ladies</option>
                </>
              )}
              {category === "under18" && (
                <>
                  <option value="boys">Boys</option>
                  <option value="girls">Girls</option>
                </>
              )}
              {category === "doubles" && (
                <>
                  <option value="men">Men</option>
                  <option value="ladies">Ladies</option>
                </>
              )}
            </select>
          </label>
        )}
      </div>
      {renderTable()}
    </div>
  );
};

export default Pooling;
