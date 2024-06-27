import Image from "next/image";
import Link from "next/link";

interface NavMenuItemProps {
  icon: string;
  text: string;
  link: string;
  hasNotification?: boolean;
  className?: string;
}

export default function NavMenuItem({
  icon,
  text,
  link,
  hasNotification,
  className,
}: NavMenuItemProps) {
  return (
    <li className={`flex gap-2 items-center ${className}`}>
      <Link href={link} className="flex gap-2 items-center">
        <div className="relative">
          {hasNotification && (
            <Image
              className="absolute right-[-2px] top-[-2px]"
              src="icons/orange-dot.svg"
              alt=""
              width={6}
              height={6}
            />
          )}
          <Image src={icon} alt="" width={24} height={24} />
        </div>
        <span className="text-xl text-neutral-350">{text}</span>
      </Link>
    </li>
  );
}
