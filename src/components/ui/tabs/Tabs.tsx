"use client";

import { useState } from "react";
import TabBar from "./TabBar";

const Tabs = () => {
  const tabs = ["Job preview", "Applicants", "Match", "Messages"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="pl-[100px] pr-5 pt-5 pb-[1px] w-full text-xl font-medium border-y border-solid border-logo-bg text-zinc-500 max-md:px-5 max-md:max-w-full">
      <TabBar tabs={tabs} activeTab={activeTab} onTabChange={handleTabChange} />
    </nav>
  );
};

export default Tabs;
