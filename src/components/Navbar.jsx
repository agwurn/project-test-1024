import MainLogo from "./common/MainLogo";

const liStyle = "text-[18px] leading-4 text-custom-black";

export default function Navbar() {
  return (
    <navbar className="bg-custom-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <div className="flex p-[18px] justify-between items-center">
        <div className="w-12 flex">
          <div className="m-auto text-center w-6">三</div>
        </div>
        <h1 className="text-xl font-bold">白頭翁不吃小米</h1>
        <div className="w-12">
          <MainLogo />
        </div>
      </div>
      <ul className="w-full text-center flex flex-col gap-[21.74px] mb-[3em]">
        <li className={`${liStyle} text-custom-brown underline`}>
          白頭翁的特性
        </li>
        <li className={`${liStyle}`}>白頭翁的故事</li>
        <li className={`${liStyle}`}>白頭翁的美照</li>
        <li className={`${liStyle}`}>白頭翁的危機</li>
      </ul>
    </navbar>
  );
}
