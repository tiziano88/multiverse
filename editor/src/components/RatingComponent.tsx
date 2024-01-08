import { multiverse } from "../compiled/schema";
import { FieldEditor, optional_field, type } from "../utils/components";
import { MovieComponent } from "./MovieComponent";

export const RatingComponent: FieldEditor<multiverse.IRating> = ({
  value,
  updateValue,
}) => {
  console.log("creating RatingComponent", value);
  return type("Rating", [
    optional_field(value, "movie", updateValue, MovieComponent, () =>
      multiverse.Movie.create({})
    ),
  ]);
};
