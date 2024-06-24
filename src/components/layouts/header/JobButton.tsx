import Image from "next/image";

export default function JobButton() {
  return (
    <button className="bg-red-650 h-[58px] w-[109px] flex items-center gap-2 border-border border-2 border-solid rounded-[49px] pt-4 pl-[15px] pr-[14px] pb-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <Image src="briefcase.svg" alt="" height={24} width={24} />
      <span className="text-xl leading-[30px] text-white">Jobs</span>
    </button>
  );
}
