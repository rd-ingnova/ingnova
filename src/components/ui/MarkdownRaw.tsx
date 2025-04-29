'use client';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface MarkdownProps {
  className?: string;
  children: any;
}

export default function MarkdownRaw({ className, children }: MarkdownProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="text-xl lg:text-2xl text-primary-800 my-4" {...props} />
          ),
          p: ({ node, ...props }) => <p className={`${className} mb-4`} {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc px-8" {...props} />,
          li: ({ node, ...props }) => <li className={`${className} *:mb-0`} {...props} />,
          img: ({ node, ...props }) => (
            <img className="max-w-full lg:max-w-1/2 my-8 rounded-lg overflow-hidden" {...props} />
          ),
          iframe: ({ node, ...props }) => (
            <iframe
              className="aspect-video max-w-full lg:max-w-1/2 rounded-lg overflow-hidden my-8"
              {...props}
            />
          ),
        }}>
        {children}
      </Markdown>
    </div>
  );
}
