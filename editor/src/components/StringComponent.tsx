import { FieldEditor } from "../utils/components";

export const StringComponent: FieldEditor<string> = ({
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
