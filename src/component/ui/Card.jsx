import { cn } from "./cn";

/** Consistent radius, padding, border and elevation for every card surface. */
export function Card({ as: Tag = "div", interactive = false, className, ...rest }) {
  return (
    <Tag
      className={cn(
        "rounded-card border border-line bg-surface shadow-sm",
        interactive &&
          "transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
      {...rest}
    />
  );
}

export function CardHeader({ className, ...rest }) {
  return <div className={cn("p-5 pb-3 space-y-1", className)} {...rest} />;
}

export function CardTitle({ as: Tag = "h3", className, ...rest }) {
  return <Tag className={cn("text-base font-semibold text-content", className)} {...rest} />;
}

export function CardDescription({ className, ...rest }) {
  return <p className={cn("text-sm text-content-secondary", className)} {...rest} />;
}

export function CardBody({ className, ...rest }) {
  return <div className={cn("p-5 pt-0", className)} {...rest} />;
}

export function CardFooter({ className, ...rest }) {
  return (
    <div className={cn("flex items-center gap-3 p-5 pt-0", className)} {...rest} />
  );
}

export default Card;
