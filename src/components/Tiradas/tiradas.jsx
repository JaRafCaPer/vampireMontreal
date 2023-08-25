import React, { useState } from "react";
import { Listbox, ListboxItem, Card, CardHeader, CardBody} from "@nextui-org/react";
import disciplinesData from "./disciplines.json";

const DisciplinesComponent = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);

  const handleDisciplineClick = (index) => {
    setSelectedDiscipline(index);
  };

  return (
    <div className="bgContainer bg-black">
      <div className="row">
        <div className="col-md-3">
          <nav>
            <h2 className="display-4 text-white">Disciplines</h2>
            <Listbox
              aria-label="Disciplines"
              onAction={handleDisciplineClick}
              selectedItem={selectedDiscipline}
            >
              {disciplinesData.disciplines.map((discipline, index) => (
                <ListboxItem className="text-danger" key={index} value={index}>
                  {discipline.name}
                </ListboxItem>
              ))}
            </Listbox>
          </nav>
        </div>
        <div className="col-md-4">
          {selectedDiscipline !== null && (
            <div>
              <h2 className="display-1 text-white text-center font-weight-bold extra">
                {disciplinesData.disciplines[selectedDiscipline].name}
              </h2>
              <p className="">
                {disciplinesData.disciplines[selectedDiscipline].description}
              </p>
              {disciplinesData.disciplines[selectedDiscipline].abilities.map(
                (ability, abilityIndex) => (
                  <Card key={abilityIndex} className="mb-2">
                    <CardHeader>
                      <h5>{ability.power}</h5>
                    </CardHeader>
                    <CardBody>
                      <p>{ability.description}</p>
                      <p>
                        <strong>Level:</strong> {ability.level}
                      </p>
                      <p>
                        <strong>Cost:</strong> {ability.cost}
                      </p>
                      <p>
                        <strong>Reference:</strong> {ability.reference}
                      </p>
                    </CardBody>
                  </Card>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisciplinesComponent;
