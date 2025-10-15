/*eslint-disable */
import KeyTemplate from "../KeyTemplate/KeyTemplate.jsx";
import { CiBrightnessDown } from "react-icons/ci";
import { TbBrightnessUp } from "react-icons/tb";
import { FiLayout } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { IoMicOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";
import { FiVolumeX } from "react-icons/fi";
import { FiVolume1 } from "react-icons/fi";
import { FiVolume2 } from "react-icons/fi";

const Row1 = () => {
  const keyLayout = [
    { label: "esc", flex: 2 },
    { label: "F1", flex: 1, upIcon: <CiBrightnessDown /> },
    { label: "F2", flex: 1, upIcon: <TbBrightnessUp /> },
    { label: "F3", flex: 1, upIcon: <FiLayout /> },
    { label: "F4", flex: 1, upIcon: <IoSearch /> },
    { label: "F5", flex: 1, upIcon: <IoMicOutline /> },
    { label: "F6", flex: 1, upIcon: <FiMoon /> },
    { label: "F7", flex: 1, upIcon: <IoPlayBackOutline /> },
    { label: "F8", flex: 1, upIcon: <IoPlaySkipForwardOutline /> },
    { label: "F9", flex: 1, upIcon: <IoPlayForwardOutline /> },
    { label: "F10", flex: 1, upIcon: <FiVolumeX /> },
    { label: "F11", flex: 1, upIcon: <FiVolume1 /> },
    { label: "F12", flex: 1, upIcon: <FiVolume2 /> },
    // { label: "F12", flex: 1, upIcon: <FiVolume2 /> },
  ];
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
    </div>
  );
};

export default Row1;
