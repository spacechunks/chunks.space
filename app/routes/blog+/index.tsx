import { LoaderFunctionArgs } from "react-router";
import { Form, redirect, useLoaderData } from "react-router";
import FeaturedPost from "~/routes/blog+/components/featured-post";
import { TypographyH2, TypographyLead } from "~/components/ui/typography";
import Post from "~/routes/blog+/components/post";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { PlusIcon, XIcon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";
import { getPostsByTags, getTags } from "~/service/posts.server";
import type { Route } from "./+types/index";

const ITEMS_PER_PAGE = 12;

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const tagsToFilter = searchParams.getAll("tags");
  const page = parseInt(searchParams.get("page") || "1");

  const allPosts = await getPostsByTags(tagsToFilter);
  const featuredPost = allPosts.find((post) => post.frontmatter.featured);

  const maxPages = Math.ceil(allPosts.length / ITEMS_PER_PAGE);
  if (page > maxPages || page < 1) {
    searchParams.set("page", maxPages.toString());
    throw redirect(`/blog?${searchParams.toString()}`);
  }
  const posts = allPosts.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const pagination = {
    page,
    pages: maxPages,
    limit: ITEMS_PER_PAGE,
    total: allPosts.length,
    size: posts.length,
    from: (page - 1) * ITEMS_PER_PAGE + 1,
    to: page * ITEMS_PER_PAGE,
  };

  const tags = await getTags();
  return {
    posts,
    featuredPost,
    pagination,
    tags,
    tagsToFilter,
  };
}

export default function BlogPage({loaderData}: Route.ComponentProps) {
  const { posts, featuredPost, pagination, tags, tagsToFilter } = loaderData;

  function getPaginationLink(page: number) {
    // returns pagination link with tags
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set("page", page.toString());
    tagsToFilter.forEach((tag) => urlSearchParams.append("tags", tag));
    return `/blog/?${urlSearchParams.toString()}`;
  }

  return (
    <div className="space-y-20">
      {featuredPost ? <FeaturedPost featuredPost={featuredPost} /> : null}
      <div className="space-y-6">
        <TypographyH2 className="text-4xl font-bold">
          All Articles from the Universe
        </TypographyH2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <TypographyLead>Filter by tags:</TypographyLead>
            {tags.map((tag) => {
              const isSelected = tagsToFilter.includes(tag.name);

              return (
                <Form
                  key={tag.name}
                  method="get"
                  preventScrollReset
                  replace
                  className="mt-1 flex items-center"
                >
                  {tagsToFilter
                    .filter((filteredTag) => filteredTag !== tag.name)
                    .map((filteredTag) => (
                      <input
                        key={filteredTag}
                        type="hidden"
                        name="tags"
                        value={filteredTag}
                      />
                    ))}

                  {!isSelected ? (
                    <input type="hidden" name="tags" value={tag.name} />
                  ) : null}
                  <input
                    type="hidden"
                    name="page"
                    value={pagination.page.toString()}
                  />
                  <Badge
                    variant={
                      tagsToFilter.includes(tag.name) ? "secondary" : "default"
                    }
                    asChild
                  >
                    <button
                      type="submit"
                      className="flex items-center gap-2 uppercase"
                    >
                      {isSelected ? (
                        <XIcon className="h-4 w-4" />
                      ) : (
                        <PlusIcon className="h-4 w-4" />
                      )}
                      {tag.name}
                    </button>
                  </Badge>
                </Form>
              );
            })}
          </div>
          <Form method="get" preventScrollReset replace>
            <Button
              size="sm"
              variant="muted"
              type="submit"
              disabled={tagsToFilter.length === 0}
            >
              Reset
            </Button>
          </Form>
        </div>
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <li key={post.slug}>
              <Post
                post={post}
                recent={
                  // first in list and published in the last 7 days
                  index == 0 &&
                  new Date(post.frontmatter.published || "").getTime() >
                    Date.now() - 7 * 24 * 60 * 60 * 1000
                }
              />
            </li>
          ))}
        </ul>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                to={getPaginationLink(pagination.page - 1)}
                disabled={pagination.page === 1}
              />
            </PaginationItem>
            {Array.from({ length: pagination.pages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  to={getPaginationLink(index + 1)}
                  isActive={index + 1 === pagination.page}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                to={getPaginationLink(pagination.page + 1)}
                disabled={pagination.page === pagination.pages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
