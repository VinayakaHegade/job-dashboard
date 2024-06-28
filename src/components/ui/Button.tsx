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
    "flex gap-2.5 items-center justify-center text-base/[21.6px] font-medium px-6 py-3 rounded-lg border-solid transition duration-200 ease-in-out";
  const variantClasses = {
    primary:
      "text-white bg-red-650 border-red-150 border-2 hover:bg-red-700 hover:border-red-200 active:bg-red-800",
    secondary:
      "text-red-650 bg-amber-75 border-red-650 border-[0.8px] hover:bg-amber-100 hover:border-red-700 active:bg-amber-200",
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
