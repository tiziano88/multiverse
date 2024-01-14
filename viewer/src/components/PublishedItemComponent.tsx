import { multiverse } from "../compiled/schema";
import {
  FieldEditor,
  FieldViewer,
  OptionalField,
  type,
} from "../utils/components";
import { ArticleComponent } from "./ArticleComponent";
import { RatingComponent } from "./RatingComponent";
import { StringComponent } from "./StringComponent";
import { YoutubeVideoComponent } from "./YoutubeVideoComponent";

export const PublishedItemComponent: FieldViewer<multiverse.IPublishedItem> = ({
  value,
}) => {
  console.log("creating PublishedItemComponent", value);
  return type("PublishedItem", [
    value.youtubeVideo && <YoutubeVideoComponent value={value.youtubeVideo} />,
    <OptionalField
      parent={value}
      fieldName="uuid"
      component={StringComponent}
    />,
    <OptionalField
      parent={value}
      fieldName="rating"
      component={RatingComponent}
    />,
    <OptionalField
      parent={value}
      fieldName="youtubeVideo"
      component={YoutubeVideoComponent}
    />,
    <OptionalField
      parent={value}
      fieldName="article"
      component={ArticleComponent}
    />,
  ]);
};
