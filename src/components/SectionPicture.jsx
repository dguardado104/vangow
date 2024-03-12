export default function SectionPicture({title, subtitle, description, children}){
  return(
    <section className="bg-[#f2f2f2] py-16">
        <div className="flex flex-col md:flex-row p-4 items-center gap-16 max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 md:w-1/3">
            <span>{subtitle}</span>
            <span className="font-bold text-2xl font-made-outer">{title}</span>
            <p>{description}</p>
          </div>
          <div>
            {children}
          </div>
        </div>
      </section>
  )
}