interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={`${isActive ? "text-red-650 font-semibold" : "text-zinc-450"}`}
      onClick={onClick}
    >
      <span className={`block ${isActive ? "mb-[17px]" : "mb-5"}`}>
        {label}
      </span>
      {isActive && (
        <div className="w-[56%] h-0.5 bg-red-650 mx-auto"></div>
      )}
    </button>
  );
}
