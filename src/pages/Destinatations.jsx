import CollectionItem from "../components/CollectionItem";
import GetInTouch from "../components/GetInTouch"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import PublicLayout from "../layouts/PublicLayout";

export default function Destinations() {

  const beaches = [
    {
      id: 1,
      title: 'Beachs',
      subtitle: 'France'
    },
    {
      id: 2,
      title: 'Citie',
      subtitle: 'Italy'
    },
    {
      id: 3,
      title: 'Beachs',
      subtitle: 'France'
    },
    {
      id: 4,
      title: 'Beachs',
      subtitle: 'France'
    },
  ]


  return (
    <PublicLayout>
      <main className="font-abc">
        <header style={{ backgroundImage: 'url(/bgs/sky-transparent.webp)' }} className=" h-80 bg-primary bg-cover bg-center flex flex-col items-center justify-center">
          <h1 className="font-bold text-3xl font-made-outer text-center mb-5"><span className="font-nautica font-normal text-5xl">Amazing</span><br className="md:hidden " />Destinations</h1>
          <p className="max-w-[400px] text-center">Vangow makes co-ownership simple. You choose your dream home, and we manage it. Browse our collection of stunning homes to get started.</p>
        </header>
        <article className="py-16 px-4">
          <div className="flex justify-center text-center pb-8 text-2xl md:text-4xl">
            <span className="font-made-outer">Beach destinations</span>
          </div>
          <Carousel items={beaches} />
        </article>
        <article className="py-16 px-4">
          <div className="flex justify-center text-center pb-8 text-2xl md:text-4xl">
            <span className="font-made-outer">Ski destinations</span>
          </div>
          <Carousel items={beaches} />
        </article>
        <article className="py-16">
          <div className="flex justify-center text-center pb-8 text-2xl md:text-4xl">
            <span className="font-made-outer">All destinations</span>
          </div>
          <section className="grid grid-cols-1 md:grid-cols-3 px-4 gap-4">
            <CollectionItem title={"Beaches"} subtitle={"France"} />
            <CollectionItem title={"Cities"} subtitle={"Italy"} />
            <CollectionItem title={"Deserts"} subtitle={"Colorado"} />
            <CollectionItem title={"Lakes"} subtitle={"Panama"} />
            <CollectionItem title={"Mountains"} subtitle={"Grecee"} />
            <CollectionItem title={"Winiries"} subtitle={"Panama"} />
          </section>
        </article>
        <GetInTouch />
      </main>
    </PublicLayout>
  )
}

function Carousel({ items }) {

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerPadding: "100px 0px 0px",
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px 0 0",
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px 0 0",
        }
      }
    ]
  }

  return (
    items && items.length > 0 ?
      <Slider {...settings}>
        {
          items.map(item => (
            <div key={item.id}>
              <CollectionItem title={"Beaches"} subtitle={"France"} />
            </div>
          ))
        }
      </Slider>

      : ''
  )

}

const CustomNextArrow = ({ onClick }) => (
  <div onClick={onClick} className="bg-[#f2f2f2] py-3 hover:bg-primary rounded cursor-pointer absolute right-1 top-1/2 -translate-y-1/2">
    <img src="/icons/left-arrow.svg" alt="icon" />
  </div>
)

const CustomPrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="bg-[#f2f2f2] py-3 hover:bg-primary rounded absolute z-10 cursor-pointer left-0 top-1/2 -translate-y-1/2">
    <img src="/icons/right-arrow.svg" alt="icon" />
  </div>
)