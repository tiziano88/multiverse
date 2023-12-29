import React from "react";

interface ArticleProps {
  article: Article; // Assume Article is a TypeScript type corresponding to your protobuf
  updateArticle: (updatedArticle: Article) => void;
}

const ArticleComponent: React.FC<ArticleProps> = ({
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
        value={article.uuid}
        onChange={(e) => handleChange(e, "uuid")}
        placeholder="UUID"
      />
      <input
        type="text"
        value={article.title}
        onChange={(e) => handleChange(e, "title")}
        placeholder="Title"
      />
      <textarea
        value={article.content}
        onChange={(e) => handleChange(e, "content")}
        placeholder="Content"
      />
    </div>
  );
};
