import { Link } from "react-router-dom"
import Card from "../components/Card"
import AccordionItem from "../components/AccordionItem"
import GetInTouch from "../components/GetInTouch"

export default function Listings() {
  return (
    <main className="text-secondary font-abc">
      <header style={{ backgroundImage: 'url(/bgs/room.webp)' }} className="bg-cover bg-center  h-[30rem] flex justify-center items-center">
        <div className="flex flex-col">
          <span className="font-made-outer text-white text-5xl leading-[.5] text-center mb-6">Find<span className="font-nautica">Your</span><br className="md:hidden" />Place</span>
          <div className="flex bg-white justify-between items-center p-2 rounded-lg border-[1px] border-secondary">
            <input type="text" className="w-full outline-0" placeholder="Where would you like to live?" />
            <img src="/icons/search.svg" alt="" />
          </div>
        </div>
      </header>
      <div className="py-16 px-4">
        <Categories />
      </div>

      <section>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pb-4 mb-16">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </article>
      </section>
      <section className="py-16 border-t-[1px] border-secondary mx-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col">
          <span className="font-made-outer text-3xl">What Vangow <br />Offers</span>
          <strong>How it works</strong>
        </div>
        <div>
          <p>Buyers can purchase from ⅛ to ½ of a luxury second home True real estate ownership.</p>
        </div>
        <div>
          <p>Easy resale and transfer opportunities Easy and fair scheduling with Vangow’s app Intellistay™</p>
        </div>
        <div>
          <p>Easy resale and transfer opportunities Easy and fair scheduling with Vangow’s app Intellistay™</p>
        </div>
      </section>
      <section className="mx-4 mb-16 border-b-[1px] border-secondary">
        <AccordionItem title={"Learn more"}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non atque praesentium voluptas ducimus, soluta est expedita. Dolores laudantium harum provident perspiciatis repellendus quibusdam iure voluptate, pariatur, quod dolore deserunt. Labore.</p>
        </AccordionItem>
      </section>
      <GetInTouch />
    </main>
  )
}

function Categories() {


  const items = [
    {
      key: 1,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" />)
    },
    {
      key: 2,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" />)
    },
    {
      key: 3,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" />)
    },
    {
      key: 4,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" />)
    },
    {
      key: 5,
      label: 'Beach',
      icon: (<img src="/icons/beach.svg" />)
    }
  ]

  return (
    items.length > 0 ?
      <nav className="flex overflow-x-auto gap-4 categories_scroll pb-3">
        {
          items.map(item => (
            <Link to="#" key={item.key} className="border-[1px] border-secondary w-32 py-2 px-4 rounded-xl flex gap-2 flex-shrink-0 items-center justify-between" >
              <span>{item.label}</span>
              {item.icon}
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