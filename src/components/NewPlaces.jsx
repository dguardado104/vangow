import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Card from "./Card"

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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }

  

  return (
    <section>
      <div className="flex justify-center text-center flex-col font-bold text-6xl mb-12">
        <span>New<span>Places</span></span>
        <span>Explore<span>Yours</span></span>
      </div>

      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
        <Card />
        </div>
        <div>
        <Card />
        </div>
        <div>
        <Card />
        </div>
        <div>
        <Card />
        </div>
        <div>
        <Card />
        </div>
      </Slider>

    </section>
  )
}

const CustomNextArrow = (props) => (
  <div {...props} className="custom-next-arrow">
    <img src="/icons/left-arrow.svg" className="" />
  </div>
);

const CustomPrevArrow = (props) => (
  <div {...props} className="custom-prev-arrow">
    <img src="/icons/right-arrow.svg" className="" />
  </div>
);