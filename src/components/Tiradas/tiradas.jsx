import React from "react";
import disciplinesData from "../../assets/files/disciplines.JSON";
import { Nav, NavItem, NavLink, TabContent, TabPane, Card, CardBody, CardTitle, CardText } from "reactstrap";
import classnames from "classnames";

const Disciplines = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <div className="disciplines-container">
      <Nav tabs>
        {disciplinesData.disciplines.map((discipline, index) => (
          <NavItem key={index}>
            <NavLink
              className={classnames({ active: activeTab === `${index + 1}` })}
              onClick={() => toggleTab(`${index + 1}`)}
            >
              {discipline.name}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {disciplinesData.disciplines.map((discipline, index) => (
          <TabPane key={index} tabId={`${index + 1}`}>
            <div className="discipline-card-container">
              {discipline.levels.map((level, levelIndex) => (
                <Card key={levelIndex} className="discipline-card">
                  <CardBody>
                    <CardTitle tag="h5">{level.name}</CardTitle>
                    <CardText>
                      <strong>Roll:</strong> {level.roll}
                    </CardText>
                  </CardBody>
                </Card>
              ))}
            </div>
          </TabPane>
        ))}
      </TabContent>
    </div>
  );
};

export default Disciplines;
