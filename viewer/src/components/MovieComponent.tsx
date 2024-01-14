import React, { useEffect } from "react";
import { FieldEditor, FieldViewer } from "../utils/components";
import { multiverse } from "../compiled/schema";

const ApiKey = "f061fd14";

export const MovieComponent: FieldViewer<multiverse.IMovie> = ({ value }) => {
  console.log("creating MovieComponent", value);
  const [omdbData, setOmdbData] = React.useState({} as any);

  const isValidId = (id: string) => {
    return id.startsWith("tt") && id.length === 9;
  };

  useEffect(() => {
    console.log("useEffect");
    if (isValidId(value.imdbId || "")) {
      console.log("value.imdbId", value.imdbId);
      console.log("fetching data from omdb");
      // fetch data from OMDB.
      fetch(`https://www.omdbapi.com/?i=${value.imdbId}&apikey=${ApiKey}`).then(
        (response) => {
          response.json().then((data) => {
            console.log("omdb data", data);
            // Update the omdbData state variable.
            setOmdbData(data);
          });
        }
      );
    }
  }, [value.imdbId]);

  return (
    <div>
      IMDB ID:
      <input type="text" value={value.imdbId || ""} placeholder="IMDB ID" />
      <div>{omdbData.Title}</div>
      <div>{omdbData.Year}</div>
    </div>
  );
};
