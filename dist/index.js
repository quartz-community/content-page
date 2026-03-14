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

// src/pageType.ts
var contentMatcher = ({ slug }) => {
  if (slug.endsWith("/index")) return false;
  if (slug.startsWith("tags/")) return false;
  return true;
};
var ContentPage = () => ({
  name: "ContentPage",
  priority: 0,
  match: contentMatcher,
  layout: "content",
  body: ContentBody_default
});

export { ContentBody_default as ContentBody, ContentPage };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map