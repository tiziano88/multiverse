import React from "react";
import { multiverse } from "../compiled/schema";

interface Props {
  value: multiverse.IArticle;
  updateValue: (updatedValue: multiverse.IArticle) => void;
}

export const ArticleComponent: React.FC<Props> = ({ value, updateValue }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const encoded = multiverse.Article.encode(value).finish();
    const newValue = multiverse.Article.decode(encoded);
    if (field === "uuid" || field === "title" || field === "body") {
      newValue[field] = e.target.value;
    }
    updateValue(newValue);
  };

  return (
    <div>
      <div>
        uuid
        <input
          type="text"
          value={value.uuid || ""}
          onChange={(e) => handleChange(e, "uuid")}
          placeholder="UUID"
        />
      </div>
      <div>
        title
        <input
          type="text"
          value={value.title || ""}
          onChange={(e) => handleChange(e, "title")}
          placeholder="Title"
        />
      </div>
      <div>
        content
        <input
          type="text"
          value={value.body || ""}
          onChange={(e) => handleChange(e, "body")}
          placeholder="Content"
        />
      </div>
    </div>
  );
};
