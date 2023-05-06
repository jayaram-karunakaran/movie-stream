import { useLocation } from "react-router-dom";
import allDetails from "../constants/movies.json";
import { useRef, useState } from "react";
import React from "react";

const ListView = () => {
  const location = useLocation();
  let type = location.pathname.substring(1, location.pathname.length);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [sort, setSort] = useState("ALP");
  const counter = useRef(0);

  function chunk(arr: any[]): any[] {
    return arr.reduce((acc, _, i) => {
      if (i % 21 === 0) acc.push(arr.slice(i, i + 21));
      return acc;
    }, []);
  }

  const list = chunk(allDetails.entries.filter((e) => e.programType === type));

  const yearList: any[] = [
    ...(new Set(list[index].map((e: any) => Number(e.releaseYear))) as any),
  ].sort();

  const [year, setYear] = useState(yearList[0].toString());

  const finalList = sort === "ALP"
    ? list[index].sort((a: any, b: any) => a.title.localeCompare(b.title))
    : list[index].filter((e: any) => (year) == e.releaseYear);

    console.log(sort,year,list[index]);
    

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= list.length) {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="sticky top-16 md:top-[56px] w-full z-30 flex justify-end">
        <div className="relative mt-3 text-sm md:text-base w-32 bg-gray-400 text-center p-1 flex justify-around rounded-md mr-4 border">
          <div
            className={`cursor-pointer flex-1 p-1 ${
              sort === "ALP" ? "bg-white rounded-sm" : ""
            }`}
            onClick={() => setSort("ALP")}
          >
            A-Z
          </div>
          <div
            className={`cursor-pointer flex-1 p-1 ${
              sort.length && sort !== "ALP" ? "bg-white rounded-sm" : ""
            }`}
            onClick={() => setSort('YEAR')}
          >
            {'YEAR'}
          </div>

         {sort ==='YEAR' &&<div className="absolute top-10 overflow-y-scroll h-40 right-2 z-40 flex flex-col p-1 bg-black/30 text-white font-medium">
            {yearList.map((e: any) => (
              <div onClick={() => {setYear(e.toString()); setSort("YR")}} className={`${e.toString() === year ?'bg-black/50':'' } p-1 hover:bg-black/50 rounded-sm`} key={e.toString()}>
                {e}
              </div>
            ))}
          </div>}
        </div>
      </div>

      <div
        className={`pt-8 px-5 py-3 md:px-20 w-full ${
          loading ? "h-screen" : "h-full"
        }`}
      >
        <div className="py-4" style={{ display: (loading) ? "block" : "none" }}>
          {'Loading...'}
        </div>
        <div
          className={`${
            (loading) ? "hidden" : "visible"
          } flex  flex-wrap justify-start`}
        >
          {finalList.length ? finalList.map((e: any, i: number) => {
            let image = e.images["Poster Art"].url;
            return (
              <div
                key={e.programType + "_id_" + i}
                className="mb-4 w-1/2 md:w-1/4 lg:w-1/6 xl:w-[10%] hover:shadow-xl hover:p-2 hover:border cursor-pointer"
              >
               <div className="pr-4"> <img
                  src={image}
                  className="w-full"
                  alt="poster"
                  onLoad={imageLoaded}
                />
                <div className="pt-1 whitespace-pre-wrap">{e.title}</div></div>
              </div>
            );
          }): 'No Results Found'}
        </div>
      </div>

      <div className="p-1 z-20 px-6 flex justify-end text-sm sticky bottom-0 bg-black/30">
        <div className="bg-white/70 p-2 font-medium rounded-sm">
          Page No -
          {Array.from(Array(list.length as any).keys()).map(
            (e: any, i: number) => (
              <span
                onClick={() => setIndex(i)}
                className={`mx-1 hover:bg-black/40 rounded-sm cursor-pointer px-1 ${
                  i === index ? "bg-black/20" : ""
                }`}
                key={e.toString()}
              >
                {e + 1}
              </span>
            )
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListView;
