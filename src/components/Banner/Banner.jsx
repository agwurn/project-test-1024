export default function Banner() {
  return (
    <div className="relative h-[311px] xl:h-[634px] p-4 flex flex-col justify-end items-end">
      <div className="absolute inset-0 bg-banner bg-cover bg-center filter brightness-90"></div>
      <h1 className="w-2/3 text-right text-5xl leading-[50px] text-custom-white font-bold relative z-10">
        白頭翁 (Chinese bulbul)
      </h1>
      <div className="mt-4 text-[18px] text-custom-white relative z-10">
        又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
      </div>
    </div>
  );
}
