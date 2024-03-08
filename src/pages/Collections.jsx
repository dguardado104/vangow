import BlogCarousel from "../components/BlogCarousel";
import CollectionItem from "../components/CollectionItem";
import GetInTouch from "../components/GetInTouch";

export default function Collection(){
  return(
    <main className="font-abc">
      <header style={{ backgroundImage: 'url(/bgs/sky-transparent.webp)' }} className=" h-80 bg-primary bg-cover bg-center flex flex-col items-center justify-center">
        <span className="font-bold text-3xl"><span className="font-nautica">Explore</span>Home</span>
        <p className="max-w-[400px] text-center">Explore homes featuring exceptional amenities in prime destinations to begin your journey.</p>
      </header>
      <article className="py-16">
        <section className="grid grid-cols-1 md:grid-cols-3 px-4 gap-4">
          <CollectionItem title={"Beaches"} />
          <CollectionItem title={"Cities"} />
          <CollectionItem title={"Deserts"} />
          <CollectionItem title={"Lakes"} />
          <CollectionItem title={"Mountains"} />
          <CollectionItem title={"Winiries"} />
        </section>
      </article>
      <article className="py-16">
        <div className="flex justify-center text-center pb-16 text-4xl">
          <span className="font-made-outer">Homes with <br /> features you&apos;ll love</span>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 px-4 gap-4">
          <CollectionItem title={"Golf"} />
          <CollectionItem title={"Epic kitchens"} />
          <CollectionItem title={"Fitness"} />
          <CollectionItem title={"Kid friendly"} />
          <CollectionItem title={"Offices"} />
          <CollectionItem title={"Views"} />
        </section>
      </article>
      <GetInTouch />
      <BlogCarousel />
    </main>
  )
}