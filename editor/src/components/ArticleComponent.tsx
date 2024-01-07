import { multiverse } from "../compiled/schema";
import { FieldEditor, optional_field, type } from "../utils/components";
import { StringComponent } from "./StringComponent";

export const ArticleComponent: FieldEditor<multiverse.IArticle> = ({
  value,
  updateValue,
}) => {
  return type("Article", [
    optional_field(
      "uuid",
      value,
      "uuid",
      updateValue,
      StringComponent,
      () => ""
    ),
    optional_field(
      "title",
      value,
      "title",
      updateValue,
      StringComponent,
      () => ""
    ),
    optional_field(
      "content",
      value,
      "body",
      updateValue,
      StringComponent,
      () => ""
    ),
    // repeated_field(
    //   multiverse.PublishedItem,
    //   "test",
    //   value,
    //   Lens.fromProp<multiverse.IArticle>()("test"),
    //   updateValue,
    //   StringComponent,
    //   () => ""
    // ),
  ]);
};
