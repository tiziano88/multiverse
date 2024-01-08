import { multiverse } from "../compiled/schema";
import { FieldEditor, optional_field, type } from "../utils/components";
import { StringComponent } from "./StringComponent";

export const ArticleComponent: FieldEditor<multiverse.IArticle> = ({
  value,
  updateValue,
}) => {
  return type("Article", [
    optional_field(value, "uuid", updateValue, StringComponent, () => ""),
    optional_field(value, "title", updateValue, StringComponent, () => ""),
    optional_field(value, "body", updateValue, StringComponent, () => ""),
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
