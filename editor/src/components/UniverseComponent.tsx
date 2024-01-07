import React from "react";
import { multiverse } from "../compiled/schema";
import { PublishedItemComponent } from "./PublishedItemComponent";
import {
  Props,
  optional_field,
  repeated_field,
  type,
} from "../utils/components";
import { Lens } from "monocle-ts";
import { generateId } from "../utils/utils";
import { ArticleComponent } from "./ArticleComponent";

export const UniverseComponent: React.FC<Props<multiverse.IUniverse>> = ({
  value,
  updateValue,
}) => {
  return type("Universe", [
    optional_field(
      "single_article",
      value,
      "singleArticle",
      updateValue,
      ArticleComponent,
      () =>
        multiverse.Article.create({
          uuid: generateId(),
        })
    ),
    repeated_field(
      "articles",
      value,
      "articles",
      updateValue,
      ArticleComponent,
      () =>
        multiverse.Article.create({
          uuid: generateId(),
        })
    ),
  ]);
};
