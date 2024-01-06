import React from "react";
import { multiverse } from "../compiled/schema";
import {
  Props,
  optional_field,
  repeated_field,
  type,
} from "../utils/components";
import { Lens } from "monocle-ts";
import { StringComponent } from "./StringComponent";

export const ArticleComponent: React.FC<Props<multiverse.IArticle>> = ({
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
