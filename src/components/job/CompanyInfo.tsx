import Image from "next/image";
import CompanyInfoItem from "./CompanyInfoItem";

export default function CompanyInfo() {
  const companyInfo = [
    { label: "Company size", value: "1k - 2k Employees" },
    { label: "Sector", value: "Information Technology, Infrastructure" },
    { label: "Founded In", value: "2019" },
    { label: "Type", value: "Private" },
    { label: "Funding", value: "Bootstrapped" },
    { label: "Founded By", value: "Scott Farquhar, Mike Cannon-Brookes" },
  ];

  return (
    <section className="flex flex-col gap-4 pt-8 pb-9 pl-[100px] pr-6">
      <div className="flex items-center gap-3 p-2.5 pl-0">
        <Image
          src="icons/atlassian-logo.svg"
          alt="Atlassian logo"
          width={40}
          height={40}
        />
        <h3 className="text-xl font-medium text-neutral-650">Atlassian</h3>
      </div>
      <section className="flex gap-x-12 gap-y-6 flex-wrap">
        <div className="flex flex-col gap-6 max-w-[344px] w-full">
          {companyInfo.slice(0, 3).map((info, index) => (
            <CompanyInfoItem
              key={index}
              label={info.label}
              value={info.value}
            />
          ))}
        </div>
        <div className="flex flex-col gap-6 max-w-[344px] w-full">
          {companyInfo.slice(3).map((info, index) => (
            <CompanyInfoItem
              key={index}
              label={info.label}
              value={info.value}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
