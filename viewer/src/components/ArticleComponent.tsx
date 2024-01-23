import { multiverse } from "../compiled/schema";
import { FieldViewer, type } from "../utils/components";
import MarkdownPreview from "@uiw/react-markdown-preview";

export const ArticleComponent: FieldViewer<multiverse.IArticle> = ({
  value,
}) => {
  // See https://github.com/uiwjs/react-markdown-preview?tab=readme-ov-file#disable-header-links
  return (
    <div>
      <div className="articleTitle">{value?.title || ""}</div>
      <div className="articleBody">{value?.body || ""}</div>
      {/* <MarkdownPreview
        source={value?.body || ""}
        rehypeRewrite={(node: any, index, parent: any) => {
          if (
            node.tagName === "a" &&
            parent &&
            /^h(1|2|3|4|5|6)/.test(parent.tagName)
          ) {
            parent.children = parent.children.slice(1);
          }
        }}
      /> */}
    </div>
  );
};
