import Divider from "../ui/Divider";
import JobStat from "./JobStat";

export default function JobStats() {
  const jobStats = [
    {
      icon: "/icons/users.svg",
      label: "Applicants",
      value: "400",
    },
    { icon: "/icons/user-check.svg", label: "Matches", value: "100" },
    { icon: "/icons/message-square-dark.svg", label: "Messages", value: "147" },
    { icon: "/icons/eye.svg", label: "Views", value: "800" },
  ];

  return (
    <div className="flex flex-col gap-4 p-3">
      {jobStats.map((stat, index) => (
        <>
          <JobStat
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
          <Divider/>
        </>
      ))}
    </div>
  );
}

