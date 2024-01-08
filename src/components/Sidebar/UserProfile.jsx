import logo from "../../assets/logo.png";
import { DownIcon } from "../../assets/icons/icons";
const UserProfile = () => {
  return (
    <header className="flex space-x-3 px-[8.5px] ">
      <img
        src={logo}
        alt="user-profile-logo"
        width={40}
        height={40}
        className="rounded"
      />
      <aside className="grow space-y-1">
        <h1 className="text-white font-medium">Markals</h1>
        <p className=" text-sm leading-4 text-white/80 underline hover:cursor-pointer w-fit">
          Visit store
        </p>
      </aside>
      <DownIcon />
    </header>
  );
};

export default UserProfile;
