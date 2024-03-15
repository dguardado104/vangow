export default function BlogCard(){
  return(
    <div className="bg-[#f2f2f2] p-6 text-left rounded-xl flex flex-col">
      <img src="/bgs/home-bg-1.webp" alt="background" loading="lazy" className="mb-4 h-[180px] object-cover" />
      <span className="italic">By <span className="font-made-outer not-italic text-sm">Vangow</span></span>
      <p className="font-made-outer py-4">Understanding Vangow ownership</p>
      <a href="#" className="text-primary hover:text-secondary self-end text-xl">+</a>
    </div>
  )
}