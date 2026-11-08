import type { PageMatcher, QuartzPageTypePlugin } from "@quartz-community/types";
import ContentBody from "./components/ContentBody";

export interface ContentPageOptions {}

// Every page is a content page unless a more specific page type claims it first: tag-page and
// folder-page (priority 10) take `tags/…` and `…/index` pages when they're enabled; when they're
// off, a hand-written `tags/<tag>.md` or `folder/index.md` still renders as a content page.
export const contentMatcher: PageMatcher = () => true;

export const ContentPage: QuartzPageTypePlugin<ContentPageOptions> = () => ({
  name: "ContentPage",
  priority: 0,
  match: contentMatcher,
  layout: "content",
  body: ContentBody,
});
