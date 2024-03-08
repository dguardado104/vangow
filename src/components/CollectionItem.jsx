export default function CollectionItem({ title }){
  return(
    <div className="p-4 rounded-lg bg-secondary text-white">
      <img src="/bgs/home-bg-2.webp" loading="lazy" alt="background" className="rounded-lg w-full aspect-auto" />
      <div className="flex justify-between items-center py-6">
        <span className="font-bold">{title}</span>
        <a href="#" className="text-primary font-bold hover:text-white">+</a>
      </div>
    </div>
  )
}