import {
  BiSolidLeftArrow,
  BiSolidRightArrow,
  BiSolidUpArrow,
  BiSolidDownArrow,
} from "react-icons/bi";

const ArrowKeys = () => {
  const iconStyle = "h-[6px] w-[6px] text-white";
  const keyStyle =
    "rounded-[4px] p-[0.5px] cursor-pointer bg-white/[0.2] shadow-md shadow-white/50 transition-transform duration-100 hover:scale-[0.98] hover:shadow-none";

  return (
    <div className="mt-[2px] flex h-6 w-[4.9rem] flex-col items-center justify-end rounded-[0px] p-[0.5px]">
      {/* Up Arrow */}
      <div className={keyStyle}>
        <div
          className="flex items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6"
        >
          <BiSolidUpArrow className={iconStyle} />
        </div>
      </div>

      {/* Left, Down, Right Arrows */}
      <div className="flex gap-[2px]">
        <div className={keyStyle}>
          <div
            className="flex items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6"
          >
            <BiSolidLeftArrow className={iconStyle} />
          </div>
        </div>
        <div className={keyStyle}>
          <div
            className="flex items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6"
          >
            <BiSolidDownArrow className={iconStyle} />
          </div>
        </div>
        <div className={keyStyle}>
          <div
            className="flex items-center justify-center rounded-[3.5px] bg-[#0A090D] h-3 w-6"
          >
            <BiSolidRightArrow className={iconStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArrowKeys;
