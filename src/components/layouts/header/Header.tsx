import Logo from "./Logo";
import Navigation from "./Navigation";
import UserActions from "./UserActions";

export default function Header() {
  return (
    <header className="lg:max-h-[116.4px] py-[26px] pl-10 pr-6 flex justify-between shadow-[0_4px_4px_rgba(217, 217, 217, 0.1)]">
      <Logo />
      <Navigation />
      <UserActions />
    </header>
  );
}
