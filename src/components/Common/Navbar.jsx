import {
  DownArrowTriangleIcon,
  NotificationIcon,
  QuestionMarkIcon,
  SearchIcon,
} from "../../assets/icons/icons";

const Navbar = () => {
  return (
    <nav className="bg-white flex w-full items-center px-8 py-3 space-x-4 sticky top-0 z-10">
      {/* Payments how it works */}
      <p>Payments</p>
      <div className="flex items-center space-x-2.5 grow">
        <QuestionMarkIcon />
        <p className=" text-xs text-text hover:underline hover:cursor-help">
          How it works
        </p>
      </div>

      {/* searchbar */}
      <div className="px-4 py-[9px] bg-[#F2F2F2] space-x-2 flex grow items-center rounded-md">
        <SearchIcon />
        <input
          className="grow outline-none bg-transparent leading-[22px] placeholder:text-[#808080]"
          placeholder="Search features, tutorials, etc."
        />
      </div>

      {/* notification & other button */}

      <section className="flex space-x-3 grow justify-end">
        <div className=" p-2.5 bg-background-light rounded-full hover:cursor-pointer">
          <NotificationIcon />
        </div>
        <DownArrowTriangleIcon />
      </section>
    </nav>
  );
};

export default Navbar;
