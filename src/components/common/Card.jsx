export default function Card({title, content}) {
  return (
    <div className="flex gap-9">
      <div className="">
        <h1 className="relative text-4xl text-vertical font-bold">
          {title}
          <div className="absolute top-[82%] left-[74%] w-[25px] aspect-square rounded-full border-8 border-[#AA6666] opacity-60 box-border"></div>
        </h1>
      </div>
      <p className="text-base">
        {content}
      </p>
    </div>
  )
}
