import { multiverse } from "../compiled/schema";
import { FieldEditor, OptionalField, type } from "../utils/components";
import { MovieComponent } from "./MovieComponent";

export const RatingComponent: FieldEditor<multiverse.IRating> = ({
  value,
  updateValue,
}) => {
  console.log("creating RatingComponent", value);
  return type("Rating", [
    <OptionalField
      parent={value}
      fieldName="movie"
      updateParent={updateValue}
      component={MovieComponent}
      childFactory={() => multiverse.Movie.create({})}
    />,
  ]);
};
