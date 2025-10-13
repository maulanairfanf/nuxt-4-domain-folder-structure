// Nuxt runtime test - with components and composables
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";

import ArticleCard from "../../app/pages/articles/_components/ArticleCard.vue";
import { useArticleFormat } from "../../app/pages/articles/_composables";
import type { Article } from "../../app/pages/articles/_types";

const mockArticle: Article = {
  id: "1",
  title: "Test Article",
  excerpt: "Test excerpt for the article",
  content: "Test content for the article",
  category: "Technology",
  date: "2024-01-15",
  author: "John Doe",
  readingTime: useArticleFormat("Test content for the article").readingTime,
  likes: 10,
  views: 100,
  tags: ["vue", "nuxt", "testing"],
};

describe("ArticleCard Component", () => {
  it("renders article information correctly", async () => {
    const component = await mountSuspended(ArticleCard, {
      props: {
        article: mockArticle,
      },
    });

    expect(component.text()).toContain("Test Article");
    expect(component.text()).toContain("Technology");
    expect(component.text()).toContain("John Doe");
    expect(component.text()).toContain("1 min baca");
  });

  it("renders all tags", async () => {
    const component = await mountSuspended(ArticleCard, {
      props: {
        article: mockArticle,
      },
    });

    mockArticle.tags?.forEach((tag) => {
      expect(component.text()).toContain(tag);
    });
  });

  it("has correct article link", async () => {
    const component = await mountSuspended(ArticleCard, {
      props: {
        article: mockArticle,
      },
    });

    const link = component.find("a[href*='/articles/']");
    expect(link.exists()).toBe(true);
  });
});
