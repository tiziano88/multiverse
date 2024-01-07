import { multiverse } from "../compiled/schema";
import { FieldEditor, Props, optional_field, type } from "../utils/components";
import { StringComponent } from "./StringComponent";

export const PublishedItemComponent: FieldEditor<multiverse.IPublishedItem> = ({
  value,
  updateValue,
}) => {
  return type("PublishedItem", [
    optional_field(
      "uuid",
      value,
      "uuid",
      updateValue,
      StringComponent,
      () => ""
    ),
    // optional_field(
    //   multiverse.PublishedItem,
    //   "article",
    //   value,
    //   "article",
    //   updateValue,
    //   ArticleComponent,
    //   () =>
    //     multiverse.Article.create({
    //       uuid: generateId(),
    //     })
    // ),
  ]);
};
