import React from "react";
import { FieldEditor, Props } from "../utils/components";
import { multiverse } from "../compiled/schema";

const ApiKey = "f061fd14";

export const MovieComponent: FieldEditor<multiverse.IMovie> = ({
  value,
  updateValue,
}) => {
  if (value.imdbId && value.imdbId.length > 5) {
    console.log("value.imdbId", value.imdbId);
    // fetch data from OMDB.
    fetch(`https://www.omdbapi.com/?i=${value.imdbId}&apikey=${ApiKey}`);
    // TODO: Do something with the data.
  }
  return (
    <input
      type="text"
      value={value.imdbId || ""}
      onChange={(e) =>
        updateValue(multiverse.Movie.create({ imdbId: e.target.value }))
      }
      placeholder="Movie"
    />
  );
};
