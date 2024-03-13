export default function CardCrew() {
  return (
    <article className="bg-[#F9F9F9] rounded-xl">
      <img src="/crew.svg" alt="user-image" loading="lazy" className="w-full object-contain" />
      <div className="flex flex-col p-4 py-8">
        <span className="text-lg font-made-outer">Daniela</span>
        <span className="text-lg">Sales <strong>manager</strong></span>
      </div>
    </article>
  )
}