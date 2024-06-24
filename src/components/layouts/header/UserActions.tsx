import NotificationButton from "./NotificationButton";
import UserMenu from "./UserMenu";

export default function UserActions() {
  return (
    <div className="flex items-center gap-4 p-2.5">
      <NotificationButton />
      <UserMenu />
    </div>
  );
}
