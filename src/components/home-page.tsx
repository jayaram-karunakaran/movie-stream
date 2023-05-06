import React from "react";
import { Link } from "react-router-dom";
import allDetails from "../constants/movies.json";

const uniqTypes:string[] = [...new Set(allDetails.entries.map((e=> e.programType))) as any];

function Home() {
  return (
    <div className="pt-8 mb-60 px-5 py-3 md:px-20 text-white overflow-scroll">
      <div className="flex">
        {uniqTypes.map((e) => (
          <Link key={e + "_id"} to={e}>
            <div className="mr-4 mb-4 cursor-pointer">
              <div className="uppercase relative w-36 h-52 bg-black/90 hover:bg-black flex justify-center items-center text-2xl font-semibold">
                {e[e.length - 1] === 's' ? e : e +'s'}
                <img alt="bgImage"
                  src="/clapperboard.png"
                  className="p-5 absolute opacity-10"
                />
              </div>
              <div className="pt-1 text-black text-sm">
                Popular<span className="lowercase">{` ${e}`}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
