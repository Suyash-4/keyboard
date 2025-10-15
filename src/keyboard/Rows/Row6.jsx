import KeyTemplate from "../KeyTemplate/KeyTemplate.jsx";
import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
  BiSolidDownArrow,
} from "react-icons/bi";
import {
  MdKeyboardOptionKey,
  MdKeyboardCommandKey,
  MdOutlineKeyboardControlKey,
} from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

const Row6 = () => {
  const keyLayout = [
    { label: "fn", flex: 1, upIcon: <CiGlobe /> },
    { label: "control", flex: 1.25, upIcon: <MdOutlineKeyboardControlKey /> },
    { label: "option", flex: 1.25, upIcon: <MdKeyboardOptionKey /> },
    { label: "command", flex: 1.5, upIcon: <MdKeyboardCommandKey /> },
    { label: "", flex: 6, upIcon: "" },
    { label: "command", flex: 1.5, upIcon: <MdKeyboardCommandKey /> },
    { label: "option", flex: 1.25, upIcon: <MdKeyboardOptionKey /> },
  ];
  const iconStyle = "h-[6px] w-[6px] text-white";
  const keyStyle =
    "rounded-[4px] shadow-md shadow-white/40 duration-100 hover:scale-[0.95] hover:shadow-none";
  return (
    <div className="flex gap-1 w-full h-full">
      {keyLayout.map((key, index) => (
        <KeyTemplate
          key={index}
          label={key.label}
          flex={key.flex}
          upIcon={key.upIcon}
        />
      ))}
      <div className="mt-[2px] h-full flex flex-[3.25] flex-col items-center justify-end  gap-0.5">
        {/* Up Arrow */}
        <div className={keyStyle}>
          <div className="flex items-center justify-center rounded-[5px] bg-[#0A090D] h-5 w-10">
            <BiSolidUpArrow className={iconStyle} />
          </div>
        </div>

        {/* Left, Down, Right Arrows */}
        <div className="flex gap-0.5">
          <div className={keyStyle}>
            <div className="flex items-center justify-center rounded-[5px] bg-[#0A090D] h-5 w-10">
              <BiSolidLeftArrow className={iconStyle} />
            </div>
          </div>
          <div className={keyStyle}>
            <div className="flex items-center justify-center rounded-[5px] bg-[#0A090D] h-5 w-10">
              <BiSolidDownArrow className={iconStyle} />
            </div>
          </div>
          <div className={keyStyle}>
            <div className="flex items-center justify-center rounded-[5px] bg-[#0A090D] h-5 w-10">
              <BiSolidRightArrow className={iconStyle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row6;
