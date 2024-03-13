export default function Box({ backgroundImage, headerClassName , title, children, className }) {
  return (
    <div className={`border-secondary border-[1px] ${className}`}>
      <div style={{ backgroundImage: backgroundImage ? backgroundImage : "url(/bgs/gray-bg.webp)" }} className={`bg-cover h-[60px] relative ${headerClassName}`} >
        <span className="border-[1px] border-secondary bg-white -bottom-5 px-4 py-1 left-4  rounded-xl font-bold text-xl md:text-2xl absolute font-made-outer max-w-[250px]">{title}</span>
      </div>
      <p className="mt-6 p-4 ">
        {children}
      </p>
    </div>
  )
}