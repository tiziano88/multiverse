import React from "react";
import { multiverse } from "../compiled/schema";
import { FieldEditor, Props, optional_field, type } from "../utils/components";
import { RatingComponent } from "./RatingComponent";
import { StringComponent } from "./StringComponent";
import { YoutubeVideoComponent } from "./YoutubeVideoComponent";

export const PublishedItemComponent: FieldEditor<multiverse.IPublishedItem> = ({
  value,
  updateValue,
}) => {
  console.log("creating PublishedItemComponent", value);
  return type("PublishedItem", [
    optional_field({
      parent: value,
      fieldName: "uuid",
      updateParent: updateValue,
      component: StringComponent,
      childFactory: () => "",
    }),
    optional_field({
      parent: value,
      fieldName: "rating",
      updateParent: updateValue,
      component: RatingComponent,
      childFactory: () => multiverse.Rating.create({}),
    }),
    optional_field({
      parent: value,
      fieldName: "youtubeVideo",
      updateParent: updateValue,
      component: YoutubeVideoComponent,
      childFactory: () => multiverse.YouTubeVideo.create({}),
    }),
  ]);
};
