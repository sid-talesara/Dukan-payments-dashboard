import { WalletIcon } from "../../assets/icons/icons";
const WalletWidget = () => {
  return (
    <section className=" py-1.5 px-3 bg-background rounded flex items-center space-x-3">
      <aside className="p-1.5 bg-white/10 rounded h-fit">
        <WalletIcon />
      </aside>

      <aside className="grow">
        <p className="text-white/80 text-sm">Available credits</p>
        <b className="font-medium text-white">222.10</b>
      </aside>
    </section>
  );
};

export default WalletWidget;
