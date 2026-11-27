import { describe, expect, it } from "vitest";
import type { Root } from "hast";
import type { QuartzComponentProps } from "@quartz-community/types";
import { ContentPage } from "../src/index";
import { renderToHtml } from "./render";

const tree: Root = {
  type: "root",
  children: [
    {
      type: "element",
      tagName: "h2",
      properties: { id: "intro" },
      children: [{ type: "text", value: "Intro" }],
    },
    {
      type: "element",
      tagName: "p",
      properties: {},
      children: [
        { type: "text", value: "See " },
        {
          type: "element",
          tagName: "a",
          properties: { href: "./other", className: ["internal"] },
          children: [{ type: "text", value: "other" }],
        },
      ],
    },
  ],
};

const render = (frontmatter?: Record<string, unknown>) => {
  const Body = ContentPage().body!();
  return renderToHtml(
    Body({ fileData: { frontmatter }, tree, cfg: {} } as unknown as QuartzComponentProps),
  );
};

describe("ContentPage", () => {
  it("is the catch-all page type (lowest priority) with the content layout", () => {
    const pageType = ContentPage();
    expect(pageType).toMatchObject({ name: "ContentPage", priority: 0, layout: "content" });
  });

  it("renders the page's HTML inside Obsidian's reading-view containers", () => {
    expect(render({})).toBe(
      '<article class="popover-hint"><div class="markdown-preview-view markdown-rendered">' +
        '<h2 id="intro">Intro</h2><p>See <a href="./other" class="internal">other</a></p>' +
        "</div></article>",
    );
  });

  it("adds the frontmatter cssclasses to the article", () => {
    expect(render({ cssclasses: ["wide", "no-title"] })).toMatch(
      /^<article class="popover-hint wide no-title">/,
    );
    expect(render(undefined)).toMatch(/^<article class="popover-hint">/);
  });
});
