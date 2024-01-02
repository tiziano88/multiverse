import React, { Children } from "react";
import { multiverse } from "../compiled/schema";
import { PublishedItemComponent } from "./PublishedItemComponent";
import { generateId } from "../utils/utils";

interface Props {
  label: string;
  children: React.ReactNode;
}

// Component that shows a field and a value
export const FieldComponent: React.FC<Props> = ({ label, children }) => {
  return (
    <div>
      <label>{label}</label>
      {children}
    </div>
  );
};
