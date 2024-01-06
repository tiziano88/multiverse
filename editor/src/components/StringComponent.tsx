import React from "react";
import { Props } from "../utils/components";

export const StringComponent: React.FC<Props<string>> = ({
  value,
  updateValue,
}) => {
  return (
    <input
      type="text"
      value={value || ""}
      onChange={(e) => updateValue(e.target.value)}
      placeholder="---"
    />
  );
};
