import { useLocation } from "react-router-dom";
import allDetails from "../constants/movies.json";

const ListView = () => {
  const location = useLocation();
  let type = location.pathname.substring(1,location.pathname.length);
  const list = allDetails.entries.filter((e) => e.programType === type);

  return (
    <div className="pt-8 px-5 py-3 md:px-20 overflow-scroll h-full">
      <div className="flex flex-wrap justify-around md:justify-start">
        {list.map((e, i) => {
          let image = e.images["Poster Art"].url;
          return (
            <div
              key={e.programType + "_id_" + i}
              className="mr-4 mb-4 w-28 md:w-36"
            >
              <img src={image} className="w-full" alt="poster" loading="lazy" />
              <div className="pt-1 whitespace-pre-wrap">{e.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
