import Image from "next/image";
import Link from "next/link";

interface NavMenuItemProps {
  icon: string;
  text: string;
  link: string;
  hasNotification?: boolean;
  className?: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NavMenuItem({
  icon,
  text,
  link,
  hasNotification,
  isActive,
  onClick,
}: NavMenuItemProps) {
  const filterClasses =
    "brightness-[30%] invert-[88%] sepia-[10%] saturate-[0%] hue-rotate-[178deg] contrast-[91%]";

  return (
    <Link
      href={link}
      className={`flex gap-2 items-center cursor-pointer font-medium rounded-[49px] pt-4 pb-[15px] px-[15px] ${
        isActive
          ? "bg-red-650 text-white !pt-3.5 !pb-[13px] !px-[13px] border-2 border-solid border-border"
          : "text-neutral-350 hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <div className={`relative ${isActive ? "brightness-0 invert" : ""}`}>
        <Image
          src={icon}
          alt=""
          width={24}
          height={24}
          className={
            !isActive && icon === "icons/briefcase.svg" ? filterClasses : ""
          }
        />
        {hasNotification && (
          <Image
            className="absolute right-[-2px] top-[-0.5px]"
            src="icons/orange-dot.svg"
            alt=""
            width={6}
            height={6}
          />
        )}
      </div>
      <span className="text-xl">{text}</span>
    </Link>
  );
}
