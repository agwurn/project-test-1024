export default function MainLogo() {
  return (
    <div className={`border bg-white w-full aspect-square rounded-full relative`}>
      <div className="bg-gray-800 absolute top-[25%] left-[25%] w-[49%] h-[46%] rounded-tl-[64%] rounded-tr-[34%] rounded-br-[50%]">
        <div className="bg-white absolute top-[19%] left-0 w-full h-[60%] rounded-tl-[69%] rounded-tr-[23%] rounded-br-[47%]">
          <div className="bg-gray-800 absolute top-[32%] left-[57%] w-[19%] aspect-square rounded-full"></div>
          <div className="bg-gray-800 absolute top-[19%] left-[94%] w-[25%] h-[22%] rounded-tr-[99%] rotate-[-10deg]"></div>
        </div>
      </div>
    </div>
  );
}
