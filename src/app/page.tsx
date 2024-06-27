import AboutTheJob from "@/components/job/AboutTheJob";
import CompanyInfo from "@/components/job/CompanyInfo";
import JobHeader from "@/components/job/JobHeader";
import JobRequirements from "@/components/job/JobRequirements";
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
        <aside className="bg-background border-solid border-l border-logobg shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 max-w-[409px] min-h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti
          nisi quos. Eligendi repellat nobis veritatis beatae maiores natus
          excepturi praesentium cum dicta. Nemo voluptatibus iste hic recusandae
          facilis ducimus!
        </aside>
      </article>
    </>
  );
}





