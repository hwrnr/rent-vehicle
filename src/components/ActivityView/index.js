import React from "react";

import "../style.css";

const ActivityView = (props) => {
  const data = [
    {
      regNumber: "Bike 12",
      text: "Prijavljena je bušna guma.",
    },
    {
      regNumber: "NS 765 RT",
      text: "Vozilo je prodato i izbačeno iz prometa.",
    },
    {
      regNumber: "NS 555 RT",
      text: "Vozilo je popravljeno i vraćeno u promet.",
    },
    {
      regNumber: "NS 555 RT",
      text: "Na vozilu je prijavljena neispravna kontrola klime.",
    },
    {
      regNumber: "NS 418 NJ",
      text: "Vozilo je na popravci.",
    },
  ];

  return (
    <>
      <h2> Istorija vozila </h2>
      <div className="activity-view">
        {data.map((item, index) => (
          <div className="activity-view-item" key={`activity-view-${index}`}>
            <p style={{ fontWeight: "bold" }}> {item.regNumber} </p>
            <p> {item.text} </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActivityView;
