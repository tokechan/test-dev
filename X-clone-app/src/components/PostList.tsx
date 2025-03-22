"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/client";
import { Post } from "@/domain/Post";

export default function PostList() {
  const { data: posts, isLoading } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await client.post.all.$get();
      const data = await res.json();
      return data as Post[];
    },
  });

  if (isLoading || !posts) {
    return <p>Loading...</p>;
  }

  return (
    <div className="divide-y divide-gray-100">
      {posts.map((post: Post) => (
        <div key={post.id}>
          <p>{post.content}</p>
          <p>{post.like}</p>
          <p>{post.image}</p>
          <p>{post.name}</p>
          <p>{post.handle}</p>
        </div>
      ))}
    </div>
  );
}
