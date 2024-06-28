import Image from "next/image";

interface JobStatProps {
  icon: string;
  label: string;
  value: string;
}

export default function JobStat({ icon, label, value }: JobStatProps) {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex items-center gap-2.5 p-2.5 text-base/[21.6px] font-medium text-neutral-650">
        <Image src={icon} alt={`${label} icon`} width={20} height={20} />
        <label>{label}</label>
      </div>
      <p className="px-2.5 py-1.5 text-xl font-semibold text-neutral-750">
        {value}
      </p>
    </div>
  );
}
