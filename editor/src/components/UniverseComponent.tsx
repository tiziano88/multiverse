import React from "react";
import { multiverse } from "../compiled/schema";
import { PublishedItemComponent } from "./PublishedItemComponent";
import { optional_field, repeated_field, type } from "../utils/components";
import { Lens } from "monocle-ts";
import { generateId } from "../utils/utils";
import { ArticleComponent } from "./ArticleComponent";

interface Props {
  value: multiverse.IUniverse;
  updateValue: (updatedValue: multiverse.IUniverse) => void;
}

export const UniverseComponent: React.FC<Props> = ({ value, updateValue }) => {
  return type("Universe", [
    optional_field(
      multiverse.Universe,
      "single_article",
      value,
      Lens.fromProp<multiverse.IUniverse>()("singleArticle"),
      updateValue,
      ArticleComponent,
      () =>
        multiverse.Article.create({
          uuid: generateId(),
        })
    ),
    repeated_field(
      multiverse.Universe,
      "publishedItems",
      value,
      Lens.fromProp<multiverse.IUniverse>()("publishedItems"),
      updateValue,
      PublishedItemComponent,
      () =>
        multiverse.PublishedItem.create({
          uuid: generateId(),
        })
    ),
  ]);
};
