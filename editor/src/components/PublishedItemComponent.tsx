import { multiverse } from "../compiled/schema";
import { FieldEditor, OptionalField, type } from "../utils/components";
import { RatingComponent } from "./RatingComponent";
import { StringComponent } from "./StringComponent";
import { YoutubeVideoComponent } from "./YoutubeVideoComponent";

export const PublishedItemComponent: FieldEditor<multiverse.IPublishedItem> = ({
  value,
  updateValue,
}) => {
  console.log("creating PublishedItemComponent", value);
  return type("PublishedItem", [
    <OptionalField
      parent={value}
      fieldName="uuid"
      updateParent={updateValue}
      component={StringComponent}
      childFactory={() => ""}
    />,
    <OptionalField
      parent={value}
      fieldName="rating"
      updateParent={updateValue}
      component={RatingComponent}
      childFactory={() => multiverse.Rating.create({})}
    />,
    <OptionalField
      parent={value}
      fieldName="youtubeVideo"
      updateParent={updateValue}
      component={YoutubeVideoComponent}
      childFactory={() => multiverse.YouTubeVideo.create({})}
    />,
  ]);
};
