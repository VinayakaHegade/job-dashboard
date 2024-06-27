import Skill from "./Skill";

export default function JobRequirements() {
  const skills = [
    { icon: "/images/figma.png", name: "Figma" },
    { icon: "/images/adobe-illustrator.png", name: "Adobe Illustrator" },
    { icon: "/images/adobe-xd.png", name: "Adobe XD" },
  ];

  return (
    <section className="py-6 pr-6 pl-[100px] flex gap-16">
      <div className="flex flex-col gap-2 max-w-[170px] w-full">
        <h4 className="text-sm/[18.9px] font-medium text-neutral-550">
          Skills Required
        </h4>
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>

      <div className="flex flex-col gap-2 max-w-[170px] w-full">
        <h4 className="text-sm/[18.9px] font-medium text-neutral-550">
          Preferred Language
        </h4>
        <p className="text-base/[21.6px] font-semibold text-neutral-750">
          English
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-[170px] w-full">
        <h4 className="text-sm/[18.9px] font-medium text-neutral-550">Type</h4>
        <p className="text-base/[21.6px] font-semibold text-neutral-750">
          Full time
        </p>
      </div>

      <div className="flex flex-col gap-2 max-w-[170px] w-full">
        <h4 className="text-sm/[18.9px] font-medium text-neutral-550">
          Years of Experience
        </h4>
        <p className="text-base/[21.6px] w-44 font-semibold text-neutral-750">
          3+ Years of Experience
        </p>
      </div>
    </section>
  );
}
