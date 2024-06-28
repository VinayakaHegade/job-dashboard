import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: string;
  buttonClassName?: string;
  iconClassName?: string;
  iconWidth?: number;
  iconHeight?: number;
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  icon,
  buttonClassName = "",
  iconClassName = "",
  iconWidth = 24,
  iconHeight = 24,
}: ButtonProps) {
  const baseClasses =
    "flex gap-2.5 items-center justify-center text-base/[21.6px] font-medium px-6 py-3 rounded-lg border-solid ";
  const variantClasses = {
    primary: "text-white bg-red-650 border-red-150 border-2",
    secondary: "text-red-650 bg-amber-75 border-red-650 border-[0.8px]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${buttonClassName}`}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={iconWidth}
          height={iconHeight}
          className={iconClassName}
        />
      )}
      {children}
    </button>
  );
}
