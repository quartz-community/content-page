import { htmlToJsx } from '@quartz-community/utils/jsx';
import { jsx } from 'preact/jsx-runtime';

// src/components/ContentBody.tsx
var ContentBody_default = (() => {
  const ContentBody = ({ fileData, tree }) => {
    const content = htmlToJsx(tree);
    const frontmatter = fileData?.frontmatter;
    const classes = frontmatter?.cssclasses ?? [];
    const classString = ["popover-hint", ...classes].join(" ");
    return /* @__PURE__ */ jsx("article", { class: classString, children: content });
  };
  return ContentBody;
});

export { ContentBody_default as ContentBody };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map