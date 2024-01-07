import { multiverse } from "../compiled/schema";
import {
  FieldEditor,
  optional_field,
  repeated_field,
  type,
} from "../utils/components";
import { generateId } from "../utils/utils";
import { ArticleComponent } from "./ArticleComponent";

export const UniverseComponent: FieldEditor<multiverse.IUniverse> = ({
  value,
  updateValue,
}) => {
  return type("Universe", [
    optional_field(
      "single_article",
      value,
      "singleArticle",
      updateValue,
      ArticleComponent,
      () =>
        multiverse.Article.create({
          uuid: generateId(),
        })
    ),
    repeated_field(
      "articles",
      value,
      "articles",
      updateValue,
      ArticleComponent,
      () =>
        multiverse.Article.create({
          uuid: generateId(),
        })
    ),
  ]);
};
