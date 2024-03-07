import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from "./Card"
import { Link } from "react-router-dom"

export default function NewPlaces() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    centerPadding: "150px 0px 70px",
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

  const item = {
    imageUrl: "/bgs/home-bg-3.webp"
  }

  return (
    <section className="border-y-[1px] my-16 py-16 border-secondary">
      <div className="flex justify-center text-center flex-col font-bold text-5xl xl:text-6xl mb-12">
        <span className="font-nautica font-normal leading-[.025]">New<span className="font-made-outer text-4xl xl:text-5xl ">Places</span></span>
        <span className="font-made-outer text-4xl xl:text-5xl">Explore<span className="font-nautica font-normal">Yours</span></span>
      </div>

      <Slider {...settings}>
        <div>
          <Card item={item} className="xl:h-[600px]" />
        </div>
        <div>
        <Card  className="xl:h-[600px]" />
        </div>
        <div>
        <Card  className="xl:h-[600px]" />
        </div>
        <div>
        <Card  className="xl:h-[600px]" />
        </div>
        <div>
        <Card  className="xl:h-[600px]" />
        </div>
        <div>
        <Card  className="xl:h-[600px]" />
        </div>
      </Slider>

      <div className="flex justify-center pt-16">
      <Link to={"/listings"} className=" text-white bg-primary py-3 px-8 rounded-lg  transition-all hover:scale-105 hover:bg-secondary">View listings</Link>

      </div>

    </section>
  )
}

const CustomNextArrow = ({ onClick }) => (
  <div onClick={onClick} className={"custom-next-arrow"}>
    <img src="/icons/left-arrow.svg" className="" />
  </div>
)

const CustomPrevArrow = ({onClick}) => (
  <div onClick={onClick} className="custom-prev-arrow">
    <img src="/icons/right-arrow.svg" className="" />
  </div>
)