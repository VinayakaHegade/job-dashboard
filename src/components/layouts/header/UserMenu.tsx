"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Account settings", href: "" },
  { label: "Support", href: "" },
];

const MOBILE_MENU_ITEMS = [
  { label: "Jobs", href: "", icon: "/icons/briefcase.svg" },
  { label: "Messages", href: "", icon: "/icons/message-square.svg" },
  { label: "Payments", href: "", icon: "/icons/coins-hand.svg" },
];

const filterClasses =
  "brightness-[30%] invert-[88%] sepia-[10%] saturate-[0%] hue-rotate-[178deg] contrast-[91%]";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!dropdownRef.current?.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left"
      ref={dropdownRef}
      onBlur={handleBlur}
    >
      <button
        aria-label="User menu"
        className="flex items-center gap-1.5"
        onClick={handleToggle}
      >
        <Image
          src="/icons/atlassian-logo.svg"
          alt="User avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
        <Image
          src="/icons/chevron-down.svg"
          alt=""
          width={20}
          height={20}
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 z-10 mt-2 w-48 lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-out ${
          isOpen
            ? "transform opacity-100 scale-100"
            : "transform opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="py-1">
          {/* Mobile-only menu items */}
          <div className="lg:hidden">
            {MOBILE_MENU_ITEMS.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-neutral-550 hover:bg-gray-100"
                onClick={handleOptionClick}
              >
                <Image
                  src={item.icon}
                  alt=""
                  width={20}
                  height={20}
                  className={`mr-3 ${
                    item.icon === "/icons/briefcase.svg" ? filterClasses : ""
                  }`}
                />
                {item.label}
              </Link>
            ))}
            <div className="my-1 h-px bg-gray-200" aria-hidden="true" />
          </div>

          {/* Common menu items */}
          {MENU_ITEMS.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-4 py-2 text-sm font-medium text-neutral-550 hover:bg-gray-100"
              onClick={handleOptionClick}
            >
              {item.label}
            </Link>
          ))}

          <button
            className="block w-full px-4 py-2 text-left text-sm font-medium text-neutral-550 hover:bg-gray-100"
            onClick={handleOptionClick}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
