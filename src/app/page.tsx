import JobHeader from "@/components/job/JobHeader";
import Tabs from "@/components/ui/tabs/Tabs";

export default function Home() {
  return (
    <>
      <Tabs />
      <section className="flex">
        <section className="w-full">
          <section className="w-full pt-9 pr-9 pl-[100px] pb-8">
            <JobHeader />
          </section>
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
