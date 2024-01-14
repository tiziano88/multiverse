import { TextareaHTMLAttributes } from "react";
import { FieldEditor } from "../utils/components";

export const MarkdownComponent: FieldEditor<string> = ({
  value,
  updateValue,
}) => {
  function updateStyle(t: HTMLElement) {
    console.log("updating style", t);
    t.style.height = "0";
    t.style.height = t.scrollHeight + "px";
  }
  function onInput(e: React.FormEvent<HTMLTextAreaElement>) {
    updateStyle(e.currentTarget);
    updateValue(e.currentTarget.value);
  }
  return (
    <textarea
      value={value || ""}
      onChange={(e) => onInput(e)}
      placeholder="---"
    />
  );
};
