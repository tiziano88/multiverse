import { FieldEditor } from "../utils/components";

export const StringComponent: FieldEditor<string> = ({
  value,
  updateValue,
}) => {
  return (
    <input
      type="text"
      className="input-box"
      value={value || ""}
      onChange={(e) => updateValue(e.target.value)}
      placeholder="---"
    />
  );
};
