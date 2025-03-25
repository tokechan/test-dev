"use client";
import { useState, useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { client } from "@/lib/client";
import Image from "next/image";
import { UserProfile } from "@/domain/User";

export default function PostForm({ user }: { user: UserProfile }) {
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: async (newPost: {
      content: string;
      handle: string;
      image?: string;
    }) => {
      const res = await client.post.create.$post(newPost);
      return await res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts", user.handle] });
      setContent("");
      setImage(null);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      createPostMutation.mutate({
        content,
        handle: user.handle,
        image: image || undefined,
      });
    }
  };

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="flex gap-3">
        <div className="flex-shrink-0">
          {user.avatarUrl ? (
            <Image
              src={user.avatarUrl}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          )}
        </div>
        <div className="flex-grow">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={3}
          />

          {image && (
            <Image src={image} alt="Upload preview" width={500} height={300} />
          )}

          <div>
            <button type="button" onClick={handleImageButtonClick}>
              画像
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageSelect}
            />
          </div>

          <button type="submit">投稿する</button>
        </div>
      </div>
    </form>
  );
}
