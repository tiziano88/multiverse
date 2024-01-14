import { multiverse } from "../compiled/schema";
import {
  FieldEditor,
  FieldViewer,
  OptionalField,
  type,
} from "../utils/components";
import { MovieComponent } from "./MovieComponent";

export const RatingComponent: FieldViewer<multiverse.IRating> = ({ value }) => {
  console.log("creating RatingComponent", value);
  return type("Rating", [
    <OptionalField
      parent={value}
      fieldName="movie"
      component={MovieComponent}
    />,
  ]);
};
