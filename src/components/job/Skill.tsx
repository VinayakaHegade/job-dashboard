import Image from "next/image";

interface SkillProps {
  icon: string;
  name: string;
}

export default function Skill({ icon, name }: SkillProps) {
  return (
    <div className="flex items-center gap-1 w-fit px-[5px] py-[3px] rounded-md border border-gray-375 border-solid ">
      <Image
        src={icon}
        alt={`${name} icon`}
        width={16}
        height={16}
        className="shrink-0 self-start"
      />
      <span className="block text-xs font-medium text-slate-650">
        {name}
      </span>
    </div>
  );
}

