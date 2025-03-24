"use client";

import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function MarkdownRaw({
  className,
  children,
}: {
  className?: string;
  children: any;
}) {
  return (
    <div className="prose prose-lg max-w-none">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: ({ node, ...props }) => (
            <h2
              className="text-xl lg:text-2xl text-primary-800 my-4"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p className={`${className} mb-4`} {...props} />
          ),
          img: ({ node, ...props }) => (
            <img
              className="max-w-full lg:max-w-1/2 my-8 rounded-lg overflow-hidden"
              {...props}
            />
          ),
          iframe: ({ node, ...props }) => (
            <iframe
              className="aspect-video max-w-full lg:max-w-1/2 rounded-lg overflow-hidden my-8"
              {...props}
            />
          ),
        }}
      >
        {children}
      </Markdown>
    </div>
  );
}
