import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className={`${location.pathname === "/" ? "fixed bottom-0" : ""} w-full bg-[#333333] px-5 pt-4 md:pt-8 md:py-3 md:px-20 text-white/70 text-xs md:text-sm`} >
      <div className="flex text-xs overflow-x-scroll md:overflow-hidden pb-3">
        {[
          "Home",
          "Terms and Conditions",
          "Privacy Policy",
          "Collection Statement",
          "Help",
          "Manage Account",
        ].map((e, i) => (
          <div key={e + "_footer_options"} onClick={() => navigate("/")}>
            <div className={`pr-3 ${i === 0 ? "" : "border-l"} pl-3 hover:bg-white/10 text-center`}> {e}</div>
          </div>
        ))}
      </div>

      <div className="text-[11px] text-white/60 pl-3">
        Copyright © 2016 DEMO Streaming. All Rights Reserved
      </div>

      <div className="flex flex-1 items-center flex-wrap py-3 md:py-12">
        <div className="flex flex-row xs:justify-center sm:justify-start items-center">
          <img
            src="/fb.png"
            alt="fb"
            className="mr-5 hover:bg-white/30 p-2 rounded-lg cursor-pointer w-9 md:w-12"
          />
          <img
            src="/twitter.png"
            alt="twitter"
            className="mr-5  p-2 rounded-lg  hover:bg-white/30  cursor-pointer w-9 md:w-12"
          />
          <img
            src="/insta.png"
            alt="insta"
            className="mr-5  p-2 rounded-lg  hover:bg-white/30  cursor-pointer w-9 md:w-12"
          />
        </div>
        <div className="flex md:flex-1 md:justify-end overflow-x-scroll md:overflow-hidden h-10 mt-2 md:mt-0 w-full">
          <img
            src="/ps.png"
            alt="playstore"
            className="mr-5 mb-2 md:mb-0 rounded-lg border cursor-pointer"
            width={120}
          />
          <img
            src="/as.png"
            alt="appstore"
            className="mr-5 mb-2 md:mb-0 rounded-lg border cursor-pointer"
            width={120}
          />
          <img
            src="/ms.png"
            alt="microsoft"
            className="mr-5 mb-2 md:mb-0 rounded-lg border cursor-pointer"
            width={120}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
