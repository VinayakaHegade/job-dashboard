import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserActions from "./UserActions";

export default function Header() {
  return (
    <header className="pt-[17px] pb-[18px] pl-10 pr-6 flex items-center justify-between shadow-[0_4px_4px_rgba(217,217,217,0.1)]">
      <Logo />
      <NavMenu />
      <UserActions />
    </header>
  );
}
