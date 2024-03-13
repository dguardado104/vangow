import BlogCarousel from "../components/BlogCarousel";
import Box from "../components/Box";
import GetInTouch from "../components/GetInTouch";
import SectionPicture from "../components/SectionPicture";

export default function Learns() {
  return (
    <main className="text-secondary font-abc">
      <section style={{ backgroundImage: 'url(/bgs/home-bg-1.webp)' }} className="h-[30rem]  bg-black bg-cover bg-center relative">
        <div className="text-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute flex flex-col text-center ">
          <h1>How Vangow works</h1>
          <span className="my-4 font-bold text-4xl font-made-outer">Co-Ownership, simplified</span>
          <p>You own the home, and we manage it. It’s the best and modern way to buy and own a luxury second home.</p>
        </div>
      </section>
      <article className="p-4 max-w-7xl mx-auto">
        <section className="py-8 grid grid-cols-1 md:grid-cols-3 justify-center gap-4">
          <ItemContent title={"Design"}>
            <p>Our residences are adorned with high-quality furniture, essential amenities, and kitchenware, complemented by local artisanal creations.</p>
          </ItemContent>
          <ItemContent title={"Support"}>
            <p>Each owner receives support from a local Home Manager who delivers dedicated service and recommendations every day of the week.</p>
          </ItemContent>
          <ItemContent title={"Scheduling"}>
            <p>Owners typically stay 6-7 times a year in their residences, and stays are fairly scheduled through the Intellistay™ owner app utilizing smart technology.</p>
          </ItemContent>


          <div className="md:col-span-3 md:flex gap-4 justify-center">
            <ItemContent title={"Reselling"} className="md:w-1/3">
              <p>Transfer ownership on your own terms, setting the price as you see fit. Historically, industry shares have sold with an average 10% profit.</p>
            </ItemContent>
            <ItemContent title={"Management"} className="md:w-1/3 pt-4 md:pt-0 ">
              <p>We comprehensively handle every aspect of the home, from preventive maintenance, to cleaning, to billing, ensuring it&apos;s always ready for owners to relish.</p>
            </ItemContent>
          </div>


        </section>
        <section className="py-8">
          <div className="flex justify-center flex-col text-center">
            <span>How Vangow works</span>
            <span className="font-bold text-2xl font-made-outer">The best way to own a luxury second home</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <Box title={"Explore"} backgroundImage={"url('/bgs/black-bg.webp')"} headerClassName={"bg-primary-strong"}>
              Shop our collection of amazing single-family luxury homes in the best second home destinations. We help you find the best fit. <strong className="font-made-outer">You choose</strong> how many share you would like to own.
            </Box>

            <Box title={"Own"} backgroundImage={"url('/bgs/gold-bg.webp')"} headerClassName={"bg-black"}>
              We create a property company (S.A.) for every home, and we take care of all the sale details and work. At closing and delivery, the co-owners enjoy <strong className="font-made-outer">owning 100%</strong> of the home. Vangow does not retain any shares.
            </Box>

            <Box title={"Enjoy"} backgroundImage={"url('/bgs/black-bg.webp')"} headerClassName={"bg-primary-strong"}>
              We professionally take care of development, remodeling or redecorating the home, furnishings, repairs, utilities and property management. It’s like a luxury hotel, you just show up and relax!. Scheduling is easy and fair with our app and <strong className="font-made-outer">Intellistay™</strong> technology.
            </Box>
          </div>
        </section>

      </article>
      <section className="bg-[#f2f2f2] md:hidden">
        <div className="flex justify-center flex-col text-center p-16">
          <span className="font-made-outer text-3xl mb-4">Easy simple scheduling</span>
          <p>Our <strong className="font-made-outer">Intellistay™</strong> scheduling system markes booking time in your home simple and fair</p>
          <p>Book stays from 2 days to 2 years in advance with the Vangow app and enjoy guaranteed access to your home during holidays and the summer season.</p>
          <img src="/calendar.webp" alt="icon" className="mt-8" />
        </div>
        <div className="px-4 pb-16">
          <ItemContent title={"Flexible"}>
            <p>Book open dates in real-time, from 2 days to 2 years ahead. Easily adjust confirmed stays as needed.</p>
          </ItemContent>
          <ItemContent title={"Smart"}>
            <p>Our Intellistay™ system adapts to seasonal changes, local events, and evolving owner preferences over time.</p>
          </ItemContent>
          <ItemContent title={"Fair"}>
            <p>Each owner enjoys fair access to their residence throughout the year, with numerous chances to reserve stays during holiday periods and the summer season.</p>
          </ItemContent>
        </div>
      </section>
      <section style={{ backgroundImage: 'url(/bgs/hero-bg.svg)' }} className="hidden md:block bg-[#f2f2f2] px-4 py-16 bg-auto bg-no-repeat bg-right-bottom">
        <div className="flex justify-between max-w-7xl mx-auto">
          <div>
            <span className="font-made-outer text-3xl mb-4">Easy simple <br /> scheduling</span>
          </div>
          <div className="flex gap-4 w-1/2">
            <p>Our <strong className="font-made-outer">Intellistay™</strong> scheduling system markes booking time in your home simple and fair</p>
            <p>Book stays from 2 days to 2 years in advance with the Vangow app and enjoy guaranteed access to your home during holidays and the summer season.</p>
          </div>
        </div>
        <div className="flex gap-16 max-w-7xl mx-auto mt-16">
          <div className="w-1/3 flex flex-col gap-8">
            <ItemContent title={"Flexible"}>
              <p>Book open dates in real-time, from 2 days to 2 years ahead. Easily adjust confirmed stays as needed.</p>
            </ItemContent>
            <ItemContent title={"Smart"}>
              <p>Our Intellistay™ system adapts to seasonal changes, local events, and evolving owner preferences over time.</p>
            </ItemContent>
            <ItemContent title={"Fair"}>
              <p>Each owner enjoys fair access to their residence throughout the year, with numerous chances to reserve stays during holiday periods and the summer season.</p>
            </ItemContent>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <img src="/mobile-home.svg" alt="image" loading="lazy" />
            <img src="/mobile-calendar.svg" alt="image" loading="lazy" />
            <img src="/mobile-stays.svg" alt="image" loading="lazy" />
          </div>
        </div>


      </section>
      <BlogCarousel />
      <SectionPicture title="Learn more about co-ownership" subtitle="How co-ownership works" description="Each owner enjoys fair access to their residence throughout the year, with numerous chances to reserve stays during holiday periods and the summer season." >
        <img src="/image-video.webp" alt="image" loading="lazy" className="rounded-xl" />
      </SectionPicture>
      <GetInTouch />
    </main>
  )
}

function ItemContent({ title, children, className }) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <span className="font-bold text-xl font-made-outer">{title}</span>
      {children}
    </div>
  )
}