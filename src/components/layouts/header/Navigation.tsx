import JobButton from "./JobButton";
import NavMenu from "./NavMenu";

export default function Navigation() {
  return (
    <nav className="flex items-center gap-[19px]">
      <JobButton />
      <NavMenu />
    </nav>
  );
}
