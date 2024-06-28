import Image from "next/image";
import Badge from "../ui/Badge";

export default function JobHeader() {
  return (
    <section className="w-full p-5 md:pt-9 md:pr-9 md:pl-[100px] md:pb-8">
      <div className="flex items-center gap-3">
        <h1 className="text-xl md:text-[35px]/[47.25px] font-semibold text-neutral-750 w-fit">
          Senior Product Designer
        </h1>
        <Image src="icons/gray-dot.svg" alt="" width={4} height={4} />
        <p className="text-sm/[18.9px] font-medium text-zinc-450">
          posted 2 days ago
        </p>
        <Badge status="open" />
      </div>
      <div className="flex gap-4 mt-5 md:mt-6 text-sm md:text-xl font-medium text-zinc-550 max-md:flex-wrap">
        <div className="flex items-center gap-2">
          <Image
            src="icons/location-pin.svg"
            alt="Location icon"
            width={24}
            height={24}
            className="h-4 w-4 md:h-6 md:w-6"
          />
          <p>Delaware, USA</p>
        </div>
        <Image src="icons/gray-dot.svg" alt="" width={4} height={4} />
        <div className="flex items-center gap-3">
          <Image
            src="icons/coins-stacked.svg"
            alt="Salary icon"
            width={24}
            height={24}
            className="h-4 w-4 md:h-6 md:w-6"
          />
          <p>$300k-$400k</p>
        </div>
      </div>
    </section>
  );
}
