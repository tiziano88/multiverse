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
  if (!value) {
    return <div>PublishedItem is null</div>;
  }
  if (value.article) {
    return <ArticleComponent value={value.article} />;
  }
  return <div>Unknown PublishedItem</div>;
};
