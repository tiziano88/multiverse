import React from "react";
import { multiverse } from "../compiled/schema";

interface ArticleProps {
  article: multiverse.IArticle; // Assume Article is a TypeScript type corresponding to your protobuf
  updateArticle: (updatedArticle: multiverse.IArticle) => void;
}

export const ArticleComponent: React.FC<ArticleProps> = ({
  article,
  updateArticle,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    updateArticle({ ...article, [field]: e.target.value });
  };

  return (
    <div>
      <input
        type="text"
        value={article.uuid || ""}
        onChange={(e) => handleChange(e, "uuid")}
        placeholder="UUID"
      />
      <input
        type="text"
        value={article.title || ""}
        onChange={(e) => handleChange(e, "title")}
        placeholder="Title"
      />
      <input
        type="text"
        value={article.body || ""}
        onChange={(e) => handleChange(e, "body")}
        placeholder="Content"
      />
    </div>
  );
};
