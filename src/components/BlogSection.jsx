// src/components/BlogSection.jsx
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { fetchPostBySlug } from "../lib/fetchWpPost";

const slugs = [
  "monolithic-vs-microservices-architecture",
  "graphql-vs-rest-api-comparison-2025",
  "aws-kiro-the-revolutionary-agentic-ai-ide",
];

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const fetched = await Promise.all(slugs.map(fetchPostBySlug));
        setPosts(fetched.filter(Boolean)); // remove empty
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <section id="blogs" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12">
       <div className="text-center mb-12 px-4 mt-4">
        <h2 className="text-4xl font-bold mb-4">Latest Blogs</h2>
        <p className="text-lg text-gray-300">
          Discover tutorials, insights, and ideas on web development, programming, and the latest in technology.
        </p>
      </div>
      

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-16 sm:mx-6">
        {posts.length === 0 ? (
          <p className="text-zinc-400 text-center col-span-3">
            Loading blogs...
          </p>
        ) : (
          posts.map((post) => <BlogCard key={post.id} post={post} />)
        )}
      </div>
    </section>
  );
}
