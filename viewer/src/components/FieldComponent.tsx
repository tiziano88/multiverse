import React from "react";

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
