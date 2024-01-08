import React from "react";
import { multiverse } from "../compiled/schema";
import {
  FieldEditor,
  optional_field,
  repeated_field,
  type,
} from "../utils/components";
import { generateId } from "../utils/utils";
import { ArticleComponent } from "./ArticleComponent";
import { PublishedItemComponent } from "./PublishedItemComponent";

export const UniverseComponent: FieldEditor<multiverse.IUniverse> = ({
  value,
  updateValue,
}) => {
  return type("Universe", [
    repeated_field({
      parent: value,
      fieldName: "publishedItems",
      updateParent: updateValue,
      component: PublishedItemComponent,
      childFactory: () =>
        multiverse.PublishedItem.create({
          uuid: generateId(),
        }),
    }),
  ]);
};
