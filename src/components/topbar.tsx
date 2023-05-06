import { useLocation } from "react-router-dom";

const TopBar = () => {
  const location = useLocation();
  let pathname = location.pathname.substring(1,location.pathname.length);
  const title = pathname[pathname.length - 1] === 's' ? pathname : pathname +'s';
  return (
    <div className="text-white sticky top-0 z-20 w-full">
      <div className="bottomShadow w-full px-5 py-3 md:px-20 flex items-center bg-gradient-to-b from-sky-500 from-0% to-blue-600 to-60%">
        <div className="text-3xl flex-1 font-bold text-shadow-sm shadow-black/50">
          DEMO Streaming
        </div>
        <div className="md:text-sm lg:text-base flex items-center  text-xs">
          <div className="ml-4 mr-3 md:mr-8 hover:bg-black/20 p-1 px-2 whitespace-nowrap">
            Log In
          </div>
          <div className="bg-[#333333] hover:bg-black p-1 px-2">
            Start your free trail
          </div>
        </div>
      </div>

      <div className="bottomShadow flex items-end px-5 py-3 md:px-20 bg-[#333333]">
        <div className="text-2xl flex-1 font-medium capitalize">
          {`Popular ${location.pathname === "/" ? "titles" : title}`}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
