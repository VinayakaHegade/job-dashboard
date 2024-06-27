interface DividerProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export default function Divider({
  orientation = "horizontal",
  className,
}: DividerProps) {
  const dividerClasses = `border-${
    orientation === "vertical" ? "l" : "t"
  } border-logo-bg ${className}`;

  return <hr className={dividerClasses} aria-hidden="true" />;
}
