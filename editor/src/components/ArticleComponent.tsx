import React from "react";
import { multiverse } from "../compiled/schema";
import { field_row, field_row_add, type } from "../utils/components";

interface Props {
  value: multiverse.IArticle;
  updateValue: (updatedValue: multiverse.IArticle) => void;
}

export const ArticleComponent: React.FC<Props> = ({ value, updateValue }) => {
  const addValue = (field: "test") => {
    const encoded = multiverse.Article.encode(value).finish();
    const newValue = multiverse.Article.decode(encoded);
    newValue[field].push("");
    updateValue(newValue);
  };

  const setValueSingle = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "uuid" | "title" | "body"
  ) => {
    const encoded = multiverse.Article.encode(value).finish();
    const newValue = multiverse.Article.decode(encoded);
    newValue[field] = e.target.value;
    updateValue(newValue);
  };
  const setValueRepeated = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "test",
    index: number
  ) => {
    const encoded = multiverse.Article.encode(value).finish();
    const newValue = multiverse.Article.decode(encoded);
    newValue[field][index] = e.target.value;
    updateValue(newValue);
  };

  return type("Article", [
    field_row(
      "uuid",
      <input
        type="text"
        value={value.uuid || ""}
        onChange={(e) => setValueSingle(e, "uuid")}
        placeholder="UUID"
      />
    ),
    field_row(
      "title",
      <input
        type="text"
        value={value.title || ""}
        onChange={(e) => setValueSingle(e, "title")}
        placeholder="title"
      />
    ),
    field_row(
      "content",
      <input
        type="text"
        value={value.body || ""}
        onChange={(e) => setValueSingle(e, "body")}
        placeholder="body"
      />
    ),
    ...(value.test || []).map((v, i) =>
      field_row(
        "test",
        <input
          type="text"
          value={v || ""}
          onChange={(e) => setValueRepeated(e, "test", i)}
          placeholder="test"
        />
      )
    ),
    field_row_add("test", () => {
      addValue("test");
    }),
  ]);
};
