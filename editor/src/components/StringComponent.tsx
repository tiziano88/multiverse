import React from "react";
import { multiverse } from "../compiled/schema";
import { field_row, field_row_add, type } from "../utils/components";

interface Props {
  value: string;
  updateValue: (updatedValue: string) => void;
}

export const StringComponent: React.FC<Props> = ({ value, updateValue }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => updateValue(e.target.value)}
      placeholder="---"
    />
  );
};
