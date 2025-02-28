import Tab from "./Tab";

type TabBarProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <section className="flex gap-6 md:gap-x-[72px] justify-between md:justify-start pb-2 whitespace-nowrap overflow-x-auto scroll-smooth sm:pb-0 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-zinc-400 scrollbar-track-zinc-100 hover:scrollbar-thumb-zinc-500 ">
      {tabs.map((tab) => (
        <Tab
          key={tab}
          label={tab}
          isActive={tab === activeTab}
          onClick={() => onTabChange(tab)}
        />
      ))}
    </section>
  );
}
