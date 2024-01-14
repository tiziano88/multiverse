import { multiverse } from "../compiled/schema";
import { FieldViewer, type } from "../utils/components";
import MarkdownPreview from "@uiw/react-markdown-preview";

export const ArticleComponent: FieldViewer<multiverse.IArticle> = ({
  value,
}) => {
  return type("Article", [
    <div>{value?.title || ""}</div>,
    <MarkdownPreview source={value?.body || ""} />,
  ]);
};
