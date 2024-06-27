import Image from "next/image";

export default function NotificationButton() {
  return (
    <button aria-label="Notifications" className="relative">
      <Image
        className="absolute right-1"
        src="icons/orange-dot.svg"
        alt=""
        width={6}
        height={6}
      />
      <Image src="icons/bell.svg" alt="" width={32} height={32} />
    </button>
  );
}
