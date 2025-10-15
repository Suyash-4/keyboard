import Row1 from "./Rows/Row1.jsx";
import Row2 from "./Rows/Row2.jsx";
import Row3 from "./Rows/Row3.jsx";
import Row4 from "./Rows/Row4.jsx";
import Row5 from "./Rows/Row5.jsx";
import Row6 from "./Rows/Row6.jsx";
const Keyboard = () => {
  return (
    <>
      <div className=" min-w-1/2 max-w-1/2 bg-neutral-800 rounded-2xl p-2">
        <div className="flex flex-col w-full gap-1">
          <div className="flex-1  w-full">
            <Row1 />
          </div>
          <div className="flex-1  w-full">
            <Row2 />
          </div>
          <div className="flex-1 w-full">
            <Row3 />
          </div>
          <div className="flex-1 w-full">
            <Row4 />
          </div>
          <div className="flex-1 w-full">
            <Row5 />
          </div><div className="flex-1 w-full">
            <Row6 />
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
