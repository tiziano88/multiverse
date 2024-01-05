import React from "react";
import { multiverse } from "../compiled/schema";
import { ArticleComponent } from "./ArticleComponent";
import { clone_proto, optional_field, type } from "../utils/components";
import { Lens } from "monocle-ts";
import { StringComponent } from "./StringComponent";
import { generateId } from "../utils/utils";

type Target = multiverse.IPublishedItem;

interface Props {
  value: Target;
  updateValue: (updatedArticle: Target) => void;
}

export const PublishedItemComponent: React.FC<Props> = ({
  value,
  updateValue,
}) => {
  return type("PublishedItem", [
    optional_field(
      multiverse.PublishedItem,
      "uuid",
      value,
      Lens.fromProp<Target>()("uuid"),
      updateValue,
      StringComponent,
      () => ""
    ),
    optional_field(
      multiverse.PublishedItem,
      "article",
      value,
      Lens.fromProp<Target>()("article"),
      updateValue,
      ArticleComponent,
      () =>
        multiverse.Article.create({
          uuid: generateId(),
        })
    ),
  ]);
};
