// const imgUrl = '../assets/banner material.png'
// import bannerImg from '../public/images/banner.png'

export default function Banner() {
  return (
    <div className='bg-cover bg-banner bg-center bg-s h-[311px] p-4 flex flex-col justify-end items-end'>
      <h1 className="w-2/3 text-right text-5xl leading-[50px] text-custom-white font-bold">白頭翁 (Chinese bulbul)</h1>
      <div className="mt-4 text-[18px] text-custom-white">
        又名白頭鵯。以果實、昆蟲為主食，無法消化小米、穀類。平均壽命約 8~10 年。
      </div>
    </div>
  )
}
