import React from "react";
import { multiverse } from "../compiled/schema";

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
      <div>
        uuid
        <input
          type="text"
          value={value.uuid || ""}
          onChange={(e) => handleChange(e, "uuid")}
          placeholder="UUID"
        />
      </div>
    </div>
  );
};
