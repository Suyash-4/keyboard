/*eslint-disable */
import KeyTemplate from "../KeyTemplate/KeyTemplate.jsx";
import React from "react";

const Row3 = () => {
  const keyLayout = [
    { label: "tab", flex: 2, upIcon: "", rowID: 3 },
    { label: "Q", flex: 1, upIcon: "" },
    { label: "W", flex: 1, upIcon: "" },
    { label: "E", flex: 1, upIcon: "" },
    { label: "R", flex: 1, upIcon: "" },
    { label: "T", flex: 1, upIcon: "" },
    { label: "Y", flex: 1, upIcon: "" },
    { label: "U", flex: 1, upIcon: "" },
    { label: "I", flex: 1, upIcon: "" },
    { label: "O", flex: 1, upIcon: "" },
    { label: "P", flex: 1, upIcon: "" },
    { label: "[", flex: 1, upIcon: "{" },
    { label: "]", flex: 1, upIcon: "}" },
    { label: "\\", flex: 1, upIcon: "|" },
  ];

  return (
    <div className="flex gap-1 w-full h-full ">
      {keyLayout.map((key, index) => (
        <KeyTemplate
          key={index}
          label={key.label}
          flex={key.flex}
          upIcon={key.upIcon}
          rowID={key.rowID}
        />
      ))}
    </div>
  );
};

export default Row3;
