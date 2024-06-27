import Image from "next/image";

export default function UserMenu() {
  return (
    <button aria-label="User menu" className="flex items-center gap-1.5">
      <Image
        src="icons/atlassian-logo.svg"
        alt="User avatar"
        width={40}
        height={40}
        className="rounded-full"
      />
      <Image src="icons/chevron-down.svg" alt="" width={20} height={20} />
    </button>
  );
}
