import Image from "next/image";
import Badge from "../ui/Badge";

export default function JobHeader() {
  return (
    <section className="w-full pt-9 pr-9 pl-[100px] pb-8">
      <div className="flex items-center gap-3 max-md:flex-wrap">
        <h1 className="text-[35px]/[47.25px] font-semibold text-neutral-750 max-md:max-w-full">
          Senior Product Designer
        </h1>
        <Image src="gray-dot.svg" alt="" width={4} height={4} />
        <p className="text-sm/[18.9px] font-medium text-zinc-450">
          posted 2 days ago
        </p>
        <Badge status="open" />
      </div>
      <div className="flex gap-4 mt-6 text-xl font-medium text-zinc-550 max-md:flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            src="location-pin.svg"
            alt="Location icon"
            width={24}
            height={24}
          />
          <p>Delaware, USA</p>
        </div>
        <Image src="gray-dot.svg" alt="" width={4} height={4} />
        <div className="flex items-center gap-3">
          <Image
            src="coins-stacked.svg"
            alt="Salary icon"
            width={24}
            height={24}
          />
          <p>$300k-$400k</p>
        </div>
      </div>
    </section>
  );
}
