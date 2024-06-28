"use client";

import { useState } from "react";
import NavMenuItem from "./NavMenuItem";

interface MenuItem {
  icon: string;
  text: string;
  link: string;
  hasNotification?: boolean;
}

export default function NavMenu() {
  const [activeItem, setActiveItem] = useState<string>("Jobs");

  const menuItems: MenuItem[] = [
    {
      icon: "icons/briefcase.svg",
      text: "Jobs",
      link: "#",
    },
    {
      icon: "icons/message-square.svg",
      text: "Messages",
      link: "#",
      hasNotification: true,
    },
    {
      icon: "icons/coins-hand.svg",
      text: "Payments",
      link: "#",
    },
  ];

  return (
    <nav className="flex gap-[50px] p-[7px] border-[0.5px] border-solid border-gray-350 rounded-[36px]">
      {menuItems.map((item, index) => (
        <NavMenuItem
          key={index}
          {...item}
          isActive={activeItem === item.text}
          onClick={() => setActiveItem(item.text)}
        />
      ))}
    </nav>
  );
}
