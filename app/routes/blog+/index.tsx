import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Form, redirect, useLoaderData } from "@remix-run/react";
import { ghostApi } from "~/service/ghost.server";
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

const ITEMS_PER_PAGE = 12;

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const tagsToFilter = searchParams.getAll("tags");
  const page = parseInt(searchParams.get("page") || "1");

  const posts = await ghostApi.posts.browse({
    limit: ITEMS_PER_PAGE,
    page: page,
    // fields: ["id", "slug", "title", "feature_image", "featured"],
    include: ["tags"],
    filter:
      tagsToFilter.length > 0
        ? `tags.slug:[${tagsToFilter.join(",")}]`
        : undefined,
  });

  if (page > posts.meta.pagination.pages) {
    searchParams.set("page", posts.meta.pagination.pages.toString());
    return redirect(`/blog?${searchParams.toString()}`);
  }

  const featuredPosts = await ghostApi.posts.browse({
    limit: "1",
    include: ["tags"],
    filter: "featured:true",
  });

  const tags = await ghostApi.tags.browse({
    limit: "all",
  });

  const sortedPostsByDate = posts.sort((a, b) => {
    return (
      new Date(b.published_at || "").getTime() -
      new Date(a.published_at || "").getTime()
    );
  });

  return json({
    posts: sortedPostsByDate,
    featuredPost: featuredPosts[0],
    pagination: posts.meta.pagination,
    tags,
    tagsToFilter,
  });
}

export default function BlogPage() {
  const { posts, featuredPost, pagination, tags, tagsToFilter } =
    useLoaderData<typeof loader>();

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
              const isSelected = tagsToFilter.includes(tag.slug);

              return (
                <Form key={tag.id} method="get" preventScrollReset>
                  {tagsToFilter
                    .filter((filteredTag) => filteredTag !== tag.slug)
                    .map((filteredTag) => (
                      <input type="hidden" name="tags" value={filteredTag} />
                    ))}

                  {!isSelected ? (
                    <input type="hidden" name="tags" value={tag.slug} />
                  ) : null}
                  <input
                    type="hidden"
                    name="page"
                    value={pagination.page.toString()}
                  />
                  <Badge
                    variant={
                      tagsToFilter.includes(tag.slug) ? "secondary" : "default"
                    }
                    asChild
                  >
                    <button type="submit" className="flex items-center gap-2">
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
          <Form method="get" preventScrollReset>
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
            <li key={post.id}>
              <Post
                post={post}
                recent={
                  // first in list and published in the last 7 days
                  index == 0 &&
                  new Date(post.published_at || "").getTime() >
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
