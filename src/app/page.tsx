import AboutTheJob from "@/components/job/AboutTheJob";
import CompanyInfo from "@/components/job/CompanyInfo";
import JobActions from "@/components/job/JobActions";
import JobHeader from "@/components/job/JobHeader";
import JobRequirements from "@/components/job/JobRequirements";
import JobStats from "@/components/job/JobStats";
import Divider from "@/components/ui/Divider";
import Tabs from "@/components/ui/tabs/Tabs";

export default function Home() {
  return (
    <>
      <Tabs />
      <article className="flex">
        <section className="w-full">
          <JobHeader />
          <Divider />
          <JobRequirements />
          <Divider />
          <AboutTheJob />
          <Divider />
          <CompanyInfo />
        </section>
        <aside className="flex flex-col gap-6 bg-background border-solid border-l border-logobg shadow-[0_4px_4px_rgba(0,0,0,0.25)] py-9 px-6 max-w-[409px] w-full">
          <JobActions />
          <JobStats/>
        </aside>
      </article>
    </>
  );
}
