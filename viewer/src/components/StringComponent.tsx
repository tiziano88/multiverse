import { FieldEditor, FieldViewer } from "../utils/components";

export const StringComponent: FieldViewer<string> = ({ value }) => {
  return <input type="text" value={value || ""} placeholder="---" />;
};
