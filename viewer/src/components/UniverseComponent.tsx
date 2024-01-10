import { multiverse } from "../compiled/schema";
import { FieldEditor, RepeatedField, type } from "../utils/components";
import { generateId } from "../utils/utils";
import { PublishedItemComponent } from "./PublishedItemComponent";

export const UniverseComponent: FieldEditor<multiverse.IUniverse> = ({
  value,
  updateValue,
}) => {
  return type("Universe", [
    <RepeatedField
      parent={value}
      fieldName="publishedItems"
      updateParent={updateValue}
      component={PublishedItemComponent}
      childFactory={() =>
        multiverse.PublishedItem.create({
          uuid: generateId(),
        })
      }
    />,
  ]);
};
