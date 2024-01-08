import { multiverse } from "../compiled/schema";
import { FieldEditor, OptionalField, type } from "../utils/components";
import { StringComponent } from "./StringComponent";

export const ArticleComponent: FieldEditor<multiverse.IArticle> = ({
  value,
  updateValue,
}) => {
  return type("Article", [
    <OptionalField
      parent={value}
      fieldName="uuid"
      updateParent={updateValue}
      component={StringComponent}
      childFactory={() => ""}
    />,
    <OptionalField
      parent={value}
      fieldName="title"
      updateParent={updateValue}
      component={StringComponent}
      childFactory={() => ""}
    />,
    <OptionalField
      parent={value}
      fieldName="body"
      updateParent={updateValue}
      component={StringComponent}
      childFactory={() => ""}
    />,
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
