import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import BlogCard from "./BlogCard"

export default function BlogCarousel() {

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
    <>
      <Slider {...settings}>
        <div>
          <BlogCard />
        </div>
        <div>
          <BlogCard />
        </div>
        <div>
          <BlogCard />
        </div>
      </Slider>

    </>
  )
}

const CustomNextArrow = ({ onClick }) => (
  <div onClick={onClick} className="bg-[#f2f2f2] py-3 hover:bg-primary rounded cursor-pointer absolute right-1 top-1/2 -translate-y-1/2">
    <img src="/icons/left-arrow.svg"  />
  </div>
)

const CustomPrevArrow = ({onClick}) => (
  <div onClick={onClick} className="bg-[#f2f2f2] py-3 hover:bg-primary rounded absolute z-10 cursor-pointer left-0 top-1/2 -translate-y-1/2">
    <img src="/icons/right-arrow.svg" className="" />
  </div>
)