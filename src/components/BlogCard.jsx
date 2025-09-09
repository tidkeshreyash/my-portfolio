import { Calendar } from "lucide-react";
import React from "react";

export default function BlogCard({ post }) {
  const featuredImage =
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "https://placehold.co/800x500/111/999?text=No+Image";

  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className=" brd-card
        group block rounded-xl overflow-hidden border
        border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900
        transition hover:-translate-y-0.5 hover:shadow-lg
        shadow-black/20
      "
    >
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-zinc-800">
        <img
          src={featuredImage}
          alt={post.title?.rendered}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="flex items-center gap-1 text-xs tracking-wide text-zinc-400">
           <Calendar size={14} className="text-zinc-400" />
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h3
          className="mt-1 text-lg font-semibold"  style={{ color: "#e5e7eb" }}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
        <div
          className="mt-2 text-sm leading-relaxed line-clamp-3" style={{ color: "#F2F3F499" }}
          dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
        />
      </div>
    </a>
  );
}
