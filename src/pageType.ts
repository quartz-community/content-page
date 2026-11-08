import type { PageMatcher, QuartzPageTypePlugin } from "@quartz-community/types";
import ContentBody from "./components/ContentBody";

export interface ContentPageOptions {}

// Pages under `tags/` are content pages too: when the tag-page plugin is enabled, its page type
// (priority 10) claims them first; when it's off, a hand-written `tags/<tag>.md` still renders.
export const contentMatcher: PageMatcher = ({ slug }) => !slug.endsWith("/index");

export const ContentPage: QuartzPageTypePlugin<ContentPageOptions> = () => ({
  name: "ContentPage",
  priority: 0,
  match: contentMatcher,
  layout: "content",
  body: ContentBody,
});
