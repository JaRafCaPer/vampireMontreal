import React, { useState } from "react";
import disciplinesData from "./disciplines.json";

const DisciplinesComponent = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  const handleDisciplineClick = (index) => {
    setSelectedDiscipline(index);
  };

  return (
    <div className="mt-5 bg-black">
      <div className="row">
        <div className="col-md-4">
          <nav>
            <h2 className="text-white">Disciplines</h2>
            <ul className="list-group">
              {disciplinesData.disciplines.map((discipline, index) => (
                <li
                  key={index}
                  className={`list-group-item ${
                    selectedDiscipline === index ? "active" : ""
                  }`}
                  onClick={() => handleDisciplineClick(index)}
                >
                  {discipline.name}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="col-md-8">
          <div>
            <h1 className="text-white">
              {selectedDiscipline !== null
                ? disciplinesData.disciplines[selectedDiscipline].name
                : "Select a Discipline"}
            </h1>
            <p className="text-white">
              {selectedDiscipline !== null
                ? disciplinesData.disciplines[selectedDiscipline].description
                : "Select a Discipline to see its description"}
            </p>
          </div>
          <div className="row">
            {selectedDiscipline !== null &&
              disciplinesData.disciplines[selectedDiscipline].abilities.map(
                (ability, abilityIndex) => (
                  <div key={abilityIndex} className="col-md-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{ability.power}</h5>
                        <p className="card-text">{ability.description}</p>
                        <p className="card-text">
                          <strong>Level:</strong> {ability.level}
                        </p>
                        <p className="card-text">
                          <strong>Cost:</strong> {ability.cost}
                        </p>
                        <p className="card-text">
                          <strong>Reference:</strong> {ability.reference}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisciplinesComponent;
