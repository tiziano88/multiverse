import React, { Children } from "react";
import { multiverse } from "../compiled/schema";
import { PublishedItemComponent } from "./PublishedItemComponent";
import { generateId } from "../utils/utils";

interface Props {
  value: multiverse.IUniverse;
  updateValue: (updatedValue: multiverse.IUniverse) => void;
}

export const UniverseComponent: React.FC<Props> = ({ value, updateValue }) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const encoded = multiverse.Universe.encode(value).finish();
    const newValue = multiverse.Universe.decode(encoded);
    if (field === "uuid" || field === "title" || field === "body") {
      // newValue[field] = e.target.value;
    }
    updateValue(newValue);
  };

  const addItem = () => {
    const encoded = multiverse.Universe.encode(value).finish();
    const newValue = multiverse.Universe.decode(encoded);
    // newValue.ratings.push(multiverse.Rating.create({}));
    newValue.publishedItems.push(
      multiverse.PublishedItem.create({
        uuid: generateId(),
      })
    );
    console.log("new universe", newValue);

    updateValue(newValue);
  };

  // Get children of this element.
  // const children = Children.toArray(props.children);

  return (
    <div>
      <ol>
        {(value.publishedItems || []).map((item) => (
          <li key={item.uuid}>
            <PublishedItemComponent
              value={item}
              updateValue={(updatedItem) => {
                console.log("update published item", updatedItem);
                const encoded = multiverse.Universe.encode(value).finish();
                const newValue = multiverse.Universe.decode(encoded);
                newValue.publishedItems.find(
                  (i) => i.uuid === updatedItem.uuid
                )!.article = updatedItem.article;
                newValue.publishedItems = newValue.publishedItems.map((i) => {
                  if (i.uuid === updatedItem.uuid) {
                    return updatedItem;
                  } else {
                    return i;
                  }
                });
                updateValue(newValue);
              }}
            />
          </li>
        ))}
      </ol>
      <button className="button" onClick={addItem}>
        Add Item
      </button>
    </div>
  );
};
