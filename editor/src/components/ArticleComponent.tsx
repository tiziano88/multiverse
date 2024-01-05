import React from "react";
import { multiverse } from "../compiled/schema";
import { optional_field, repeated_field, type } from "../utils/components";
import { Lens } from "monocle-ts";
import { StringComponent } from "./StringComponent";

interface Props {
  value: multiverse.IArticle;
  updateValue: (updatedValue: multiverse.IArticle) => void;
}

export const ArticleComponent: React.FC<Props> = ({ value, updateValue }) => {
  return type("Article", [
    optional_field(
      multiverse.PublishedItem,
      "uuid",
      value,
      Lens.fromProp<multiverse.IArticle>()("uuid"),
      updateValue,
      StringComponent,
      () => ""
    ),
    optional_field(
      multiverse.PublishedItem,
      "title",
      value,
      Lens.fromProp<multiverse.IArticle>()("title"),
      updateValue,
      StringComponent,
      () => ""
    ),
    optional_field(
      multiverse.PublishedItem,
      "content",
      value,
      Lens.fromProp<multiverse.IArticle>()("body"),
      updateValue,
      StringComponent,
      () => ""
    ),
    repeated_field(
      multiverse.PublishedItem,
      "test",
      value,
      Lens.fromProp<multiverse.IArticle>()("test"),
      updateValue,
      StringComponent,
      () => ""
    ),
  ]);
};
