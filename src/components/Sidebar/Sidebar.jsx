import sideBarOptions from "./data";
import UserProfile from "./UserProfile";
import WalletWidget from "./WalletWidget";

const Sidebar = () => {
  return (
    <div className=" w-56 bg-primary px-2.5 py-4 flex flex-col sticky top-0 h-screen">
      <UserProfile />
      <ul className="space-y-1 mt-6 grow">
        {sideBarOptions.map((option) => (
          <li
            key={option.id}
            className={`flex justify-start items-center hover:bg-white/10 hover:cursor-pointer hover:rounded space-x-3 px-4 py-2 ${
              option.selected ? "rounded bg-white/10 " : ""
            }`}
          >
            <option.icon />
            <h6
              className={`text-white/80 text-sm   ${
                option.selected ? "font-semibold" : "font-normal"
              }`}
            >
              {option.name}
            </h6>
          </li>
        ))}
      </ul>
      <WalletWidget />
    </div>
  );
};

export default Sidebar;
