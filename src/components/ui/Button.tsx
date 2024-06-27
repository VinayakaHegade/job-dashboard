import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant: "primary" | "secondary";
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant,
  icon,
}) => {
  const baseClasses =
    "flex gap-2.5 justify-center px-6 py-3 rounded-lg border-2 border-solid max-md:px-5";
  const variantClasses = {
    primary: "text-white bg-red-500 border-red-200",
    secondary: "text-blue-900 bg-blue-100 border-blue-200",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {icon && (
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className="shrink-0 my-auto"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
