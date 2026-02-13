import type {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import type { Root as HastRoot } from "hast";
import { Fragment, jsx, jsxs } from "preact/jsx-runtime";

export interface ContentBodyOptions {}

type FrontmatterWithClasses = {
  cssclasses?: string[];
};

export default (() => {
  const ContentBody: QuartzComponent = ({ fileData, tree }: QuartzComponentProps) => {
    const content = toJsxRuntime(tree as HastRoot, {
      Fragment,
      jsx,
      jsxs,
      elementAttributeNameCase: "html",
    });

    const frontmatter = fileData?.frontmatter as FrontmatterWithClasses | undefined;
    const classes = frontmatter?.cssclasses ?? [];
    const classString = ["popover-hint", ...classes].join(" ");

    return <article class={classString}>{content}</article>;
  };

  return ContentBody;
}) satisfies QuartzComponentConstructor;
