import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "react-router-dom";
import { json } from "react-router-dom";
import { PostList } from "~/features/post/PostList";
import type { PostWithCommentCount } from "~/models/post.server";
import { getMostCommentedPosts } from "~/models/post.server";

type LoaderData = {
  posts: PostWithCommentCount[];
};

export const loader: LoaderFunction = async () => {
  const posts = await getMostCommentedPosts();

  return json<LoaderData>({ posts });
};

export const MostCommentedPosts = () => {
  const { posts } = useLoaderData();

  return <PostList posts={posts} />;
};

export default MostCommentedPosts;
