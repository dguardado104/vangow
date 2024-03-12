export default function CollectionItem({ title, subtitle }) {
  return (
    <div className="p-4 rounded-lg bg-secondary text-white">
      <img src="/bgs/home-bg-2.webp" loading="lazy" alt="background" className="rounded-lg w-full aspect-auto" />
      <div className="flex justify-between items-center py-6">
        <div>
          <h3 className="font-bold text-xl font-abc-bold">{title}</h3>
          {subtitle ? <h4 className="italic">{subtitle}</h4> : '' }
        </div>


        <a href="#" className="text-primary font-bold hover:text-white">+</a>
      </div>
    </div>
  )
}