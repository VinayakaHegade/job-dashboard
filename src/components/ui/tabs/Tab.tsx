interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={`${
        isActive ? "text-red-650" : "text-zinc-550"
      } focus:outline-none relative`}
      onClick={onClick}
    >
      <span className="block mb-5">{label}</span>
      {isActive && (
        <div className=" w-7/12 h-0.5 bg-red-650 mx-auto -mb-0.5"></div>
      )}
    </button>
  );
}
