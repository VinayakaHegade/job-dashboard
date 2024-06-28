import Image from "next/image";

interface BadgeProps {
  status: "open" | "closed";
}

export default function Badge({ status }: BadgeProps) {
  const statusConfig = {
    open: {
      text: "Open",
      bgColor: "bg-emerald-75",
      textColor: "text-emerald-750",
      borderColor: "border-emerald-250",
      icon: "icons/green-dot.svg",
    },
    closed: {
      text: "Closed",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      borderColor: "border-red-200",
      icon: "icons/gray-dot.svg",
    },
  };

  const config = statusConfig[status];

  return (
    <div
      className={`flex gap-1 shrink-0 py-px pr-[7px] pl-[5px] text-xs/[18px] font-medium text-center whitespace-nowrap rounded-full border border-solid ${config.bgColor} ${config.textColor} ${config.borderColor}`}
    >
      <Image
        src={config.icon}
        alt={`${status} status icon`}
        width={8}
        height={8}
        className="shrink-0 my-auto"
      />
      <span className="block">{config.text}</span>
    </div>
  );
}
