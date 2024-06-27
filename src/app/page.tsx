import AboutTheJob from "@/components/job/AboutTheJob";
import JobHeader from "@/components/job/JobHeader";
import JobRequirements from "@/components/job/JobRequirements";
import Divider from "@/components/ui/Divider";
import Tabs from "@/components/ui/tabs/Tabs";

export default function Home() {
  return (
    <>
      <Tabs />
      <section className="flex">
        <section className="w-full">
          <JobHeader />
          <Divider />
          <JobRequirements />
          <Divider />
          <AboutTheJob />
          <Divider />
        </section>
        <aside className="bg-gray-200 max-w-[409px] p-4 min-h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos deleniti
          nisi quos. Eligendi repellat nobis veritatis beatae maiores natus
          excepturi praesentium cum dicta. Nemo voluptatibus iste hic recusandae
          facilis ducimus!
        </aside>
      </section>
    </>
  );
}
