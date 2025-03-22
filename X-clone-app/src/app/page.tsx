import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import React from "react";

function Home() {
  return (
    <div className="max-w-xl mx-auto min-h-screen">
      <div>
        <PostForm />
      </div>
        <PostList />
      </div>
  );
}

export default Home;