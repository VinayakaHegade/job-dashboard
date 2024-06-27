import Tab from "./Tab";

type TabBarProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function TabBar({ tabs, activeTab, onTabChange }: TabBarProps) {
  return (
    <section className="flex gap-5 justify-between ml-5 max-w-full w-[608px] max-md:flex-wrap">
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
