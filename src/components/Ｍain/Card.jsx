export default function Card({title, content}) {
  return (
    <div className="flex mb-9 xl:mb-0 xl:mr-9">
      <div className="mr-9">
        <h1 className="relative text-4xl font-bold">
          {title}
          <div className="absolute top-[82%] left-[74%] w-[25px] h-[25px] rounded-full border-8 border-[#AA6666] opacity-60 box-border"></div>
        </h1>
      </div>
      <p className="text-base">
        {content}
      </p>
    </div>
  )
}
