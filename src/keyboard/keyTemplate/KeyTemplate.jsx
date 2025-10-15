
const KeyTemplate = ({ label, flex, upIcon }) => {
  const hasUpIcon = upIcon !== null && upIcon !== undefined && upIcon !== "";
  // const isComponent = isValidElement(upIcon);
  const isSpecialKey = (label) =>
    ["esc", "delete", "tab", "caps lock", "return", "shift"].includes(label);

  const handleSpecialKeyAlignment = (label) => {
    if (
      label === "esc" ||
      label === "tab" ||
      label === "caps lock" ||
      label === "shift"
    )
      return "pl-1 justify-end items-start";
    if (label === "delete" || label === "return")
      return "pr-1 justify-end items-end";
    return "";
  };

  return (
    <>
      <div
        style={{ flex: flex || 1 }}
        className={` bg-neutral-950 text-white  rounded-lg p-1 shadow-[0_5px_10px_0_rgba(255,255,255,0.6)] hover:shadow-[inset_1.8px_1.8px_0_0_rgba(105,103,104,0.8)]`}
      >
        <div
          className={`rounded-[7px] hover:pl-1 transition-all duration-200 text-[10px] h-full flex flex-col
            ${
              isSpecialKey(label)
                ? handleSpecialKeyAlignment(label)
                : "justify-center items-center"
            }
        `}
        >
          {hasUpIcon && <div className="mb-0.5 text-sm ">{upIcon}</div>}
          {label}
          
        </div>
      </div>
    </>
  );
};

export default KeyTemplate;
