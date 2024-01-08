import { multiverse } from "../compiled/schema";
import { FieldEditor, Props, optional_field, type } from "../utils/components";
import { RatingComponent } from "./RatingComponent";
import { StringComponent } from "./StringComponent";
import { YoutubeVideoComponent } from "./YoutubeVideoComponent";

export const PublishedItemComponent: FieldEditor<multiverse.IPublishedItem> = ({
  value,
  updateValue,
}) => {
  console.log("creating PublishedItemComponent", value);
  return type("PublishedItem", [
    optional_field(value, "uuid", updateValue, StringComponent, () => ""),
    optional_field(value, "rating", updateValue, RatingComponent, () =>
      multiverse.Rating.create({})
    ),
    optional_field(
      value,
      "youtubeVideo",
      updateValue,
      YoutubeVideoComponent,
      () => multiverse.YouTubeVideo.create({})
    ),
  ]);
};
