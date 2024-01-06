import React from "react";
import { multiverse } from "../compiled/schema";
import { ArticleComponent } from "./ArticleComponent";
import { Props, optional_field, type } from "../utils/components";
import { StringComponent } from "./StringComponent";
import { generateId } from "../utils/utils";

export const PublishedItemComponent: React.FC<
  Props<multiverse.IPublishedItem>
> = ({ value, updateValue }) => {
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
