/*eslint-disable */
import KeyTemplate from "../KeyTemplate/KeyTemplate.jsx";
import React from "react";

const Row4 = () => {
  const keyLayout = [
    { label: "caps lock", flex: 2.25, upIcon: "" },
    { label: "A", flex: 1, upIcon: "" },
    { label: "S", flex: 1, upIcon: "" },
    { label: "D", flex: 1, upIcon: "" },
    { label: "F", flex: 1, upIcon: "" },
    { label: "G", flex: 1, upIcon: "" },
    { label: "H", flex: 1, upIcon: "" },
    { label: "J", flex: 1, upIcon: "" },
    { label: "K", flex: 1, upIcon: "" },
    { label: "L", flex: 1, upIcon: "" },
    { label: ";", flex: 1, upIcon: ":" },
    { label: "'", flex: 1, upIcon: '"' },
    { label: "return", flex: 2.1 , upIcon: "" },
  ];

  return (
    <div className="flex gap-1 w-full h-full ">
      {keyLayout.map((key, index) => (
        <KeyTemplate
          key={index}
          label={key.label}
          flex={key.flex}
          upIcon={key.upIcon}
        />
      ))}
    </div>
  );
};

export default Row4;
