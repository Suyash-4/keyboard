/*eslint-disable */
import KeyTemplate from "../KeyTemplate/KeyTemplate.jsx";
import React from "react";

const Row5 = () => {
  const keyLayout = [
    { label: "shift", flex: 2.75, upIcon: null },
    { label: "Z", flex: 1, upIcon: null },
    { label: "X", flex: 1, upIcon: null },
    { label: "C", flex: 1, upIcon: null },
    { label: "V", flex: 1, upIcon: null },
    { label: "B", flex: 1, upIcon: null },
    { label: "N", flex: 1, upIcon: null },
    { label: "M", flex: 1, upIcon: null },
    { label: ",", flex: 1, upIcon: "<" },
    { label: ".", flex: 1, upIcon: ">" },
    { label: "/", flex: 1, upIcon: "?" },
    { label: "shift", flex: 2.75, upIcon: null },
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

export default Row5;
