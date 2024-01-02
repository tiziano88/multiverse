import React from "react";
import { multiverse } from "../compiled/schema";
import { ArticleComponent } from "./ArticleComponent";

type Target = multiverse.IPublishedItem;

interface Props {
  value: Target;
  updateValue: (updatedArticle: Target) => void;
}

export const PublishedItemComponent: React.FC<Props> = ({
  value,
  updateValue,
}) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const encoded = multiverse.PublishedItem.encode(value).finish();
    const newValue = multiverse.PublishedItem.decode(encoded);
    if (field === "uuid" || field === "title" || field === "body") {
      // newArticle[field] = e.target.value;
    }
    updateValue(newValue);
  };

  return (
    <div>
      Value
      <div className="row">
        <div className="row-label">uuid</div>
        <div className="row-value">
          <input
            type="text"
            value={value.uuid || ""}
            onChange={(e) => handleChange(e, "uuid")}
            placeholder="UUID"
          />
        </div>
      </div>
      <div className="row">
        <div className="row-label">article</div>
        <div className="row-value">
          {
            // Return if article is set.
            value.article ? (
              <ArticleComponent
                value={value.article}
                updateValue={(updatedArticle) => {
                  console.log("update article", updatedArticle);
                  const encoded =
                    multiverse.PublishedItem.encode(value).finish();
                  const newValue = multiverse.PublishedItem.decode(encoded);
                  newValue.article = updatedArticle;
                  updateValue(newValue);
                }}
              />
            ) : (
              <button
                className="button"
                onClick={() => {
                  const encoded =
                    multiverse.PublishedItem.encode(value).finish();
                  const newValue = multiverse.PublishedItem.decode(encoded);
                  newValue.article = multiverse.Article.create({});
                  updateValue(newValue);
                }}
              >
                Add article
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};
