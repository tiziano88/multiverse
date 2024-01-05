import React from "react";

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
