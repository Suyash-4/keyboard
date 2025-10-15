/*eslint-disable */
import KeyTemplate from "../KeyTemplate/KeyTemplate.jsx";

const Row2 = () => {
  const keyLayout = [
    { label: "`", flex: 1, upIcon: "~" },
    { label: "1", flex: 1, upIcon: "!" },
    { label: "2", flex: 1, upIcon: "@" },
    { label: "3", flex: 1, upIcon: "#" },
    { label: "4", flex: 1, upIcon: "$" },
    { label: "5", flex: 1, upIcon: "%" },
    { label: "6", flex: 1, upIcon: "^" },
    { label: "7", flex: 1, upIcon: "&" },
    { label: "8", flex: 1, upIcon: "*" },
    { label: "9", flex: 1, upIcon: "(" },
    { label: "0", flex: 1, upIcon: ")" },
    { label: "-", flex: 1, upIcon: "_" },
    { label: "=", flex: 1, upIcon: "+" },
    { label: "delete", flex: 2, upIcon: "" },
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

export default Row2;
