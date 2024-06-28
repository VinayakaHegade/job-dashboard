import Tab from "./Tab";

type TabBarProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <section className="flex gap-6 flex-wrap justify-between md:justify-start md:gap-x-[72px]">
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
