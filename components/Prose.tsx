import clsx from "clsx";

export function Prose({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "prose prose-zinc dark:prose-invert max-w-none",
        // Light and dark mode styles
        "prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-em:text-foreground",
        "prose-a:font-medium prose-a:text-foreground hover:prose-a:text-foreground/80",
        "prose-code:rounded prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:text-foreground",
        "prose-hr:border-border prose-blockquote:border-l-border prose-blockquote:text-muted-foreground",
        className,
      )}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}


