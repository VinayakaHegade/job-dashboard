import Image from "next/image";

export default function UserMenu() {
  return (
    <button aria-label="User menu" className="flex items-center gap-1.5">
      <Image
        src="atlassian-logo.svg"
        alt="User avatar"
        width={40}
        height={40}
      />
      <Image src="chevron-down.svg" alt="" width={20} height={20} />
    </button>
  );
}
