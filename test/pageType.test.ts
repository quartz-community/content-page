import { describe, it, expect } from "vitest";
import { contentMatcher } from "../src/pageType";

const matches = (slug: string) => contentMatcher({ slug, fileData: {}, cfg: {} } as never);

describe("contentMatcher", () => {
  it("matches ordinary notes", () => {
    expect(matches("notes/page")).toBe(true);
    expect(matches("index")).toBe(true);
  });

  it("matches hand-written pages under tags/ (tag-page, when enabled, claims them first)", () => {
    expect(matches("tags/written")).toBe(true);
  });

  it("leaves folder index pages to folder-page", () => {
    expect(matches("folder/index")).toBe(false);
  });
});
