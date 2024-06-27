"use client";

import * as React from "react";
import Image from "next/image";

type SkillProps = {
  icon: string;
  name: string;
};

const Skill: React.FC<SkillProps> = ({ icon, name }) => (
  <div className="flex flex-col justify-center px-1.5 py-1 w-full whitespace-nowrap bg-white rounded-md border border-gray-300 border-solid shadow-sm">
    <div className="flex gap-1">
      <Image
        src={icon}
        alt={`${name} icon`}
        width={16}
        height={16}
        className="shrink-0 self-start"
      />
      <div>{name}</div>
    </div>
  </div>
);

type CompanyInfoItemProps = {
  label: string;
  value: string;
};

const CompanyInfoItem: React.FC<CompanyInfoItemProps> = ({ label, value }) => (
  <div className="flex flex-col">
    <div className="text-sm text-neutral-500">{label}</div>
    <div className="mt-2 text-base text-ellipsis text-neutral-700">{value}</div>
  </div>
);

type JobStatProps = {
  icon: string;
  label: string;
  value: string;
};

const JobStat: React.FC<JobStatProps> = ({ icon, label, value }) => (
  <>
    <div className="flex gap-2 justify-between pr-6 w-full max-md:pr-5">
      <div className="flex gap-2.5 p-2.5 text-base text-neutral-600">
        <Image
          src={icon}
          alt={`${label} icon`}
          width={20}
          height={20}
          className="shrink-0 my-auto"
        />
        <div>{label}</div>
      </div>
      <div className="justify-center self-start px-2.5 py-1.5 text-xl text-neutral-700">
        {value}
      </div>
    </div>
    <div className="shrink-0 mt-4 h-px bg-neutral-200" />
  </>
);

const MyComponent: React.FC = () => {
  const [isFollowing, setIsFollowing] = React.useState(false);
  const [reportModalOpen, setReportModalOpen] = React.useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleReportClick = () => {
    setReportModalOpen(true);
  };

  const handleDeleteJob = () => {
    console.log("Delete job clicked");
  };

  const handleEditJob = () => {
    console.log("Edit job clicked");
  };

  const skills: SkillProps[] = [
    { icon: "/images/figma-icon.png", name: "Figma" },
    { icon: "/images/illustrator-icon.png", name: "Adobe Illustrator" },
    { icon: "/images/xd-icon.png", name: "Adobe XD" },
  ];

  const companyInfo: CompanyInfoItemProps[] = [
    { label: "Company size", value: "1k - 2k Employees" },
    { label: "Type", value: "Private" },
    { label: "Sector", value: "Information Technology, Infrastructure" },
    { label: "Funding", value: "Bootstrapped" },
    { label: "Founded In", value: "2019" },
    { label: "Founded By", value: "Scott Farquhar, Mike Cannon-Brookes" },
  ];

  const jobStats: JobStatProps[] = [
    { icon: "/images/applicants-icon.png", label: "Applicants", value: "400" },
    { icon: "/images/matches-icon.png", label: "Matches", value: "100" },
    { icon: "/images/messages-icon.png", label: "Messages", value: "147" },
    { icon: "/images/views-icon.png", label: "Views", value: "800" },
  ];

  return (
    <div className="flex flex-col">
      {/* <header className="flex flex-col justify-center px-10 py-7 w-full bg-white shadow-sm max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
          <div className="justify-center px-7 py-2.5 text-xl font-bold text-red-500 whitespace-nowrap bg-neutral-200 max-md:px-5">
            Logo
          </div>
          <nav className="flex gap-5 self-stretch my-auto text-xl whitespace-nowrap max-md:flex-wrap">
            <button className="flex flex-col justify-center px-4 py-3.5 my-auto text-white bg-red-500 border-2 border-red-300 border-solid shadow-sm rounded-[49px]">
              <div className="flex gap-2 justify-center">
                <Image
                  src="/images/jobs-icon.png"
                  alt="Jobs icon"
                  width={24}
                  height={24}
                  className="shrink-0 my-auto"
                />
                <div>Jobs</div>
              </div>
            </button>
            <div className="flex flex-auto gap-5 py-6 pl-12 bg-white border border-solid shadow-sm border-neutral-300 rounded-[36px] text-zinc-400 max-md:flex-wrap max-md:max-w-full">
              <button className="flex gap-2 justify-center">
                <Image
                  src="/images/messages-icon.png"
                  alt="Messages icon"
                  width={25}
                  height={26}
                  className="shrink-0 self-start"
                />
                <div>Messages</div>
              </button>
              <div className="flex flex-auto gap-2 justify-center">
                <button className="flex gap-2 justify-center">
                  <Image
                    src="/images/payments-icon.png"
                    alt="Payments icon"
                    width={24}
                    height={24}
                    className="shrink-0 my-auto"
                  />
                  <div>Payments</div>
                </button>
                <button className="flex gap-2 justify-center px-8 max-md:px-5">
                  <Image
                    src="/images/application-icon.png"
                    alt="Application icon"
                    width={24}
                    height={24}
                    className="shrink-0 my-auto"
                  />
                  <div>Application</div>
                </button>
              </div>
            </div>
          </nav>
          <div className="flex gap-4 justify-center p-2.5">
            <button>
              <Image
                src="/images/notification-icon.png"
                alt="Notification icon"
                width={32}
                height={32}
                className="shrink-0 my-auto"
              />
            </button>
            <div className="flex gap-1.5 justify-center">
              <Image
                src="/images/user-avatar.png"
                alt="User avatar"
                width={40}
                height={40}
                className="shrink-0"
              />
              <button>
                <Image
                  src="/images/dropdown-icon.png"
                  alt="Dropdown icon"
                  width={20}
                  height={20}
                  className="shrink-0 my-auto"
                />
              </button>
            </div>
          </div>
        </div>
      </header> */}
      <nav className="flex flex-col items-start px-20 pt-5 pb-0.5 w-full text-xl bg-white border border-solid border-neutral-200 text-zinc-500 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between ml-5 max-w-full w-[608px] max-md:flex-wrap">
          <button className="text-red-500">Job preview</button>
          <button>Applicants</button>
          <button>Match</button>
          <button>Messages</button>
        </div>
        <div className="shrink-0 mt-5 ml-11 h-0.5 bg-red-500 w-[65px] max-md:ml-2.5" />
      </nav>
      <main className="flex flex-col justify-center w-full max-md:max-w-full">
        <section className="flex gap-5 justify-between pr-3 pl-20 w-full bg-white border border-solid border-neutral-200 max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-col my-auto max-md:max-w-full">
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex gap-3 justify-between max-md:flex-wrap">
                <h1 className="text-4xl font-bold text-neutral-700 max-md:max-w-full">
                  Senior Product Designer
                </h1>
                <div className="flex gap-3 my-auto">
                  <div className="text-sm text-zinc-500">posted 2 days ago</div>
                  <div className="flex gap-1 py-0.5 pr-2 pl-1.5 text-xs font-medium leading-5 text-center text-emerald-700 whitespace-nowrap bg-emerald-50 rounded-full border border-emerald-200 border-solid">
                    <Image
                      src="/images/open-status-icon.png"
                      alt="Open status icon"
                      width={8}
                      height={8}
                      className="shrink-0 my-auto"
                    />
                    <div>Open</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-between self-start mt-6 text-xl text-zinc-600 max-md:flex-wrap">
                <div className="flex gap-2">
                  <Image
                    src="/images/location-icon.png"
                    alt="Location icon"
                    width={24}
                    height={24}
                    className="shrink-0 my-auto"
                  />
                  <div>Delaware, USA</div>
                </div>
                <div className="flex gap-3 whitespace-nowrap">
                  <Image
                    src="/images/salary-icon.png"
                    alt="Salary icon"
                    width={24}
                    height={24}
                    className="shrink-0 my-auto"
                  />
                  <div>$300k-$400k</div>
                </div>
              </div>
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-10">
                    <div className="text-sm text-neutral-500">
                      Skills Required
                    </div>
                    <div className="flex flex-col justify-center mt-2 text-xs text-center text-slate-700">
                      {skills.map((skill, index) => (
                        <Skill
                          key={index}
                          icon={skill.icon}
                          name={skill.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                    <div className="text-sm text-neutral-500">
                      Preferred Language
                    </div>
                    <div className="mt-2 text-base text-ellipsis text-neutral-700">
                      English
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col whitespace-nowrap max-md:mt-10">
                    <div className="text-sm text-neutral-500">Type</div>
                    <div className="mt-2 text-base text-ellipsis text-neutral-700">
                      Full time
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col max-md:mt-10">
                    <div className="text-sm text-neutral-500">
                      Years of Experience
                    </div>
                    <div className="mt-2 text-base whitespace-nowrap text-ellipsis text-neutral-700">
                      3+ Years of Experience
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-14 max-w-full w-[526px] max-md:mt-10">
              <h2 className="justify-center self-start text-sm text-neutral-500">
                About the job
              </h2>
              <div className="mt-2 text-base leading-7 whitespace-nowrap text-ellipsis text-neutral-700 max-md:max-w-full">
                1. Handle the UI/UX research design 2. Work on researching on
                latest web applications designs & trends 3. Work on
                conceptualizing and visualizing 4. Work on creating graphics
                content and other graphic related works
                <br />
                Benefits:
                <br />
                Health insurance
                <br />
                Provident Fund
                <br />
                Schedule:
                <br />
                Day shift
                <br />
                Supplemental pay types:
                <br />
                Performance bonus
                <br />
                Yearly bonus
                <br />
                Work Location: In person
              </div>
            </div>
            <div className="flex flex-col justify-center mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-3.5 self-start">
                <div className="flex flex-col justify-center py-2.5 pr-2.5 text-xl text-neutral-600">
                  <div className="flex gap-3 justify-center">
                    <Image
                      src="/images/atlassian-logo.png"
                      alt="Atlassian logo"
                      width={40}
                      height={40}
                      className="shrink-0"
                    />
                    <div className="my-auto">Atlassian</div>
                  </div>
                </div>
                <button
                  onClick={handleFollowClick}
                  className={`justify-center px-4 py-1.5 my-auto text-xs font-bold leading-4 whitespace-nowrap rounded-lg shadow-sm ${
                    isFollowing
                      ? "text-white bg-blue-500"
                      : "text-blue-900 bg-blue-100"
                  }`}
                >
                  {isFollowing ? "Following" : "Follow"}
                </button>
              </div>
              <div className="flex flex-col flex-wrap content-start mt-4 max-md:max-w-full">
                <div className="flex gap-5 justify-between max-md:flex-wrap">
                  {companyInfo.slice(0, 2).map((info, index) => (
                    <CompanyInfoItem
                      key={index}
                      label={info.label}
                      value={info.value}
                    />
                  ))}
                </div>
                <div className="flex gap-5 justify-between mt-6 whitespace-nowrap max-md:flex-wrap">
                  {companyInfo.slice(2, 4).map((info, index) => (
                    <CompanyInfoItem
                      key={index}
                      label={info.label}
                      value={info.value}
                    />
                  ))}
                </div>
                <div className="flex gap-5 justify-between mt-6 max-md:flex-wrap">
                  {companyInfo.slice(4).map((info, index) => (
                    <CompanyInfoItem
                      key={index}
                      label={info.label}
                      value={info.value}
                    />
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={handleReportClick}
              className="mt-7 text-xs underline text-zinc-400 max-md:max-w-full"
            >
              Report this listing
            </button>
          </div>
          <div className="flex flex-col pt-9 pr-3 pb-20 pl-6 border-t border-r border-solid shadow-sm bg-zinc-50 border-neutral-200 max-md:pl-5 max-md:max-w-full">
            <div className="flex flex-col">
              <div className="flex gap-4 text-base">
                <button
                  onClick={handleDeleteJob}
                  className="flex gap-2.5 justify-center px-6 py-3 text-red-500 bg-red-50 rounded-lg border border-red-500 border-solid max-md:px-5"
                >
                  <Image
                    src="/images/delete-icon.png"
                    alt="Delete icon"
                    width={20}
                    height={20}
                    className="shrink-0 my-auto"
                  />
                  <div>Delete job</div>
                </button>
                <button
                  onClick={handleEditJob}
                  className="flex gap-2.5 justify-center px-6 py-3 text-white bg-red-500 rounded-lg border-2 border-red-200 border-solid max-md:px-5"
                >
                  <Image
                    src="/images/edit-icon.png"
                    alt="Edit icon"
                    width={16}
                    height={16}
                    className="shrink-0 my-auto"
                  />
                  <div>Edit job</div>
                </button>
              </div>
              <div className="flex flex-col p-3 mt-6 whitespace-nowrap rounded-md">
                {jobStats.map((stat, index) => (
                  <JobStat
                    key={index}
                    icon={stat.icon}
                    label={stat.label}
                    value={stat.value}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col p-8 mt-10 w-full font-medium bg-white rounded-xl border border-solid shadow-lg border-neutral-100 leading-[150%] max-md:px-5">
              <div className="text-xl text-black">
                &quot;A quote from a Atlassian.&quot;
              </div>
              <div className="flex gap-4 mt-12 text-base whitespace-nowrap max-md:mt-10">
                <Image
                  src="/images/quote-avatar.png"
                  alt="Quote avatar"
                  width={45}
                  height={45}
                  className="shrink-0 my-auto rounded-full"
                />
                <div className="flex flex-col">
                  <div className="text-black">Name</div>
                  <div className="text-zinc-500">Description</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyComponent;
