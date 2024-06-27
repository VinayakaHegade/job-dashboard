import NavMenuItem from "./NavMenuItem";

export default function NavMenu() {
  interface MenuItem {
    icon: string;
    text: string;
    link: string;
    hasNotification?: boolean;
  }

  const menuItems: MenuItem[] = [
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
    {
      icon: "icons/users.svg",
      text: "Application",
      link: "#",
    },
  ];

  return (
    <ul className="lg:max-h-[74px] flex gap-10 pt-6 pb-5 pl-[46px] pr-[31px] border-[0.5px] border-solid border-gray-350 rounded-[36px] shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]">
      {menuItems.map((item, index) => (
        <NavMenuItem
          key={index}
          className={index === 0 ? "mr-[35px]" : ""}
          {...item}
        />
      ))}
    </ul>
  );
}
