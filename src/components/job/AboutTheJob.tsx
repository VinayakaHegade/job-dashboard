export default function AboutTheJob() {
  return (
    <section className="flex flex-col gap-2 py-8 pr-6 pl-[100px]">
      <h2 className="text-sm/[18.9px] font-medium text-neutral-550">
        About the job
      </h2>
      <div className="pb-2.5 text-base leading-7 font-medium text-neutral-750">
        <ol className="list-decimal list-inside">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching on latest web applications designs &amp; trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic related works
          </li>
        </ol>

        <dl>
          <dt>Benefits:</dt>
          <dd className="pl-2 before:content-['•'] before:mr-2 before:text-neutral-750">
            Health insurance
          </dd>
          <dd className="pl-2 before:content-['•'] before:mr-2 before:text-neutral-750">
            Provident Fund
          </dd>

          <dt>Schedule:</dt>
          <dd>Day shift</dd>

          <dt>Supplemental pay types:</dt>
          <dd className="pl-2 before:content-['•'] before:mr-2 before:text-neutral-750">
            Performance bonus
          </dd>
          <dd className="pl-2 before:content-['•'] before:mr-2 before:text-neutral-750">
            Yearly bonus
          </dd>

          <dt className="inline-block">Work Location:</dt>
          <dd className="inline-block ml-1">In person</dd>
        </dl>
      </div>
    </section>
  );
}
