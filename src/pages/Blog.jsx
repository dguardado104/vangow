import { Link } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import BlogCard from "../components/BlogCard";
import GetInTouch from "../components/GetInTouch";

export default function Blog() {
  return (
    <PublicLayout headerAnimation>
      <main className="font-abc text-secondary mt-16">
        <header style={{ backgroundImage: 'url(/bgs/gray-bg.webp)' }} className=" flex-col gap-4 h-80 bg-cover bg-center flex items-center justify-center">
          <h1 className="font-bold text-3xl md:text-5xl font-made-outer">Blog</h1>
          <p className="w-[300px] text-center">We empower you to make smart second home decisions. Our blog offers fresh insights into buying, selling and owning a perfect retreat.</p>
        </header>
        <nav className="flex justify-between gap-4 py-6 px-4">
          <Categories />
          <div>
            <select name="" id="" className="border-[1px] border-secondary py-2 px-6 rounded-xl flex-shrink-0 text-center">
              <option value="">Sort</option>
            </select>
          </div>
        </nav>
        <article className="px-4">
          <div>
            <span>Results: <strong>Vangow new</strong></span> <button className="text-primary">Clear filter</button>
          </div>
        </article>
        <article className="py-16 px-4">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </section>
        </article>
        <GetInTouch />
      </main>
    </PublicLayout>
  )
}

function Categories() {


  const items = [
    {
      key: 1,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" alt="icon" />)
    },
    {
      key: 2,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" alt="icon" />)
    },
    {
      key: 3,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" alt="icon" />)
    },
    {
      key: 4,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" alt="icon" />)
    },
    {
      key: 5,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" alt="icon" />)
    }
  ]

  return (
    items.length > 0 ?
      <nav className="flex overflow-x-auto gap-4 categories_scroll pb-3">
        {
          items.map(item => (
            <Link to="#" key={item.key} className="border-[1px] border-secondary w-32 py-2 px-4 rounded-xl flex-shrink-0 text-center" >
              <span>{item.label}</span>
            </Link>

          ))
        }

      </nav>
      :
      <nav className="flex overflow-x-auto gap-4 categories_scroll pb-3">
        <div className="bg-gray-200 w-32 py-3 px-4 rounded flex gap-2 animate-pulse flex-shrink-0">
          <div className="bg-slate-400 h-4 w-2/3 rounded"></div>
          <div className="bg-slate-400 h-4 w-1/3 rounded"></div>
        </div>
        <div className="bg-gray-200 w-32 py-3 px-4 rounded flex gap-2 animate-pulse flex-shrink-0">
          <div className="bg-slate-400 h-4 w-2/3 rounded"></div>
          <div className="bg-slate-400 h-4 w-1/3 rounded"></div>
        </div>
        <div className="bg-gray-200 w-32 py-3 px-4 rounded flex gap-2 animate-pulse flex-shrink-0">
          <div className="bg-slate-400 h-4 w-2/3 rounded"></div>
          <div className="bg-slate-400 h-4 w-1/3 rounded"></div>
        </div>
        <div className="bg-gray-200 w-32 py-3 px-4 rounded flex gap-2 animate-pulse flex-shrink-0">
          <div className="bg-slate-400 h-4 w-2/3 rounded"></div>
          <div className="bg-slate-400 h-4 w-1/3 rounded"></div>
        </div>
      </nav>
  )
}