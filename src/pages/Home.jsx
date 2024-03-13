
import { Link } from "react-router-dom"
import GetInTouch from "../components/GetInTouch"
import Box from "../components/Box"
import NewPlaces from "../components/NewPlaces"

export default function Home() {

  return (
    <main className="text-secondary font-abc">
      <section className="bg-[#222] h-screen w-full relative overflow-hidden">
        {/*<video className="h-full w-full object-cover object-top animate-duration-[2s] animate-ease-in-out" src="/video-home.mp4" playsInline muted autoPlay loop></video>*/}
        <img src="/bgs/home-front-1.webp" alt="image" className="w-screen h-screen min-h-full" />
        <div className="absolute top-1/2 -translate-y-1/2  left-1/2 z-10 -translate-x-1/2 text-center text-white">
          <div className="flex justify-center">
            <img src="/hero.svg" alt="image" />
          </div>
          <div className="flex flex-col">
            <h2 className=" text-lg xl:text-xl ">EST.2024</h2>
            <h1 className="text-5xl md:text-7xl font-nautica !leading-[0]">Luxury<span className="text-4xl md:text-7xl font-made-outer">Second</span></h1>
            <h2 className="text-5xl md:text-7xl font-nautica"><span className="text-4xl md:text-7xl font-made-outer">Home</span>Club</h2>
            <Link to="/listings" className="self-center text-white bg-primary py-3 px-8 rounded-lg  transition-all uppercase hover:scale-105 hover:bg-secondary font-abc-bold" >View Listing</Link>
          </div>

        </div>
        <div className="absolute bottom-4 px-4 w-full text-white text-justify hidden md:inline-flex items-center justify-between">
          <p className="w-96">
            Vangow is a new way to buy real estate assets. We help you to find your dreamed vacation home and easily co-own a part of it. <Link className="text-[#ABF3FB] font-abc-bold">Read more +</Link>
          </p>
          <div>
          <Link className="p-3 border-[1px] rounded-xl border-primary inline-flex "><img src="/icons/message-circle.svg" alt="icon" /></Link>
          </div>
        </div>
      </section>
      <article className="px-8">
        <section className="flex flex-col items-center my-16 justify-center ">
          <div className="flex flex-col text-center max-w-2xl mb-8">
            <span className="text-3xl font-bold mb-4 font-made-outer">Luxury Second Homes for ⅛ the cost</span>
            <p>Vangow offers the opportunity to co-own a stunning home for quality family time, minus the challenges of owning an entire property. Select from ⅛ to ½ ownership options for a hassle-free experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mt-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/gem.svg" alt="icon" className="hidden md:block" />
                <h2 className="font-bold text-2xl font-abc-bold">Luxury Homes</h2>
              </div>
              <p>Our turnkey homes with exceptional design, prime locations, and a captivating &quot;wow&quot; factor.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/user-time.svg" alt="icon" className="hidden md:block" />
                <h2 className="font-bold text-2xl font-abc-bold">Simple Buying</h2>
              </div>
              <p>Own a second home for 1/8 price and share the financial load.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/hand-holding-heart.svg" alt="icon" className="hidden md:block" />
                <span className="font-bold text-2xl font-abc-bold">Full Management</span>
              </div>
              <p>We take care of the most tiring part of managing a house with others.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/earnings.svg" alt="icon" className="hidden md:block" />
                <span className="font-bold text-2xl font-abc-bold">Easy Selling</span>
              </div>
              <p>Swap or sell on your own terms. The homes have an average resale gain of 10%, ensuring a lucrative investment.</p>
            </div>
          </div>
          <div className="my-14 ">
            <Link to="/learns" className="text-white bg-primary py-3 px-8 rounded-lg  transition-all hover:scale-105 hover:bg-secondary" >How it works</Link>
          </div>
          
        </section>

        <NewPlaces />

        <section className="">
          <div className="flex  flex-col justify-center items-center gap-4 text-center md:flex-row md:justify-between md:items-start md:text-start">
            <span className="text-3xl font-bold md:w-full xl:w-1/6 font-made-outer">Vangow is not a timeshare</span>
            <p className="xl:w-1/3">Co-ownership of a vacation home provides you with a share of the property&apos;s title, whereas timeshare ownership only grants you the right to utilize the property during specific time intervals.</p>
          </div>
          <table className="table-auto w-full my-8">
            <thead>
              <tr className="bg-primary-strong [&>th]:p-2 [&>th]:py-4 [&>th]:text-start border-y-[1px] border-y-secondary">
                <th></th>
                <th>Vangow co-ownership</th>
                <th>Timeshare</th>
              </tr>
            </thead>
            <tbody className="[&>tr]:border-y-[1px] [&>tr]:border-secondary [&>tr>td]:p-2 ">
              <tr className="bg-primary-strong/[42%]">
                <td className="font-bold">Number of owners</td>
                <td>From 2 to 8 owners </td>
                <td>Up to 52 owners</td>
              </tr>
              <tr>
                <td>Usage Ongoing access</td>
                <td>Ongoing access, 44 nights or more</td>
                <td>Fixed weeks, 1-2 weeks </td>
              </tr>
              <tr className="bg-primary-strong/[42%]">
                <td>Ownership</td>
                <td>True ownership, real property</td>
                <td>No ownership, right-to-use time</td>
              </tr>
              <tr>
                <td>Management</td>
                <td>Owners can decide</td>
                <td>Owners cannot decide</td>
              </tr>
              <tr className="bg-primary-strong/[42%]">
                <td>Maintenance</td>
                <td>Owners pay maintenance and taxes</td>
                <td>Owners pay maintenance and taxes</td>
              </tr>
              <tr>
                <td>Home</td>
                <td>Single-family residence</td>
                <td>Hotel/Condo</td>
              </tr>
              <tr className="bg-primary-strong/[42%]">
                <td>Resale</td>
                <td>Real estate usually appreciates</td>
                <td>Timeshares tend to depreciate</td>
              </tr>

            </tbody>
          </table>
        </section>
        <section className="py-16">
          <div className="flex  flex-col justify-center items-center gap-4 text-center md:flex-row md:justify-between md:items-start md:text-start">
            <span className="text-3xl font-bold md:w-full xl:w-1/5 leading-none font-made-outer"><span className="font-nautica font-normal text-5xl">Effectively</span>Managed co-ownership</span>
            <p className="xl:w-1/3">For just $99 per share, Vangow Management Fee covers all your property management needs with premium services, including:</p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-8">

            <Box backgroundImage={"url(/bgs/gray-bg.webp)"} title={"Property oversight"}>
              Vangow oversees local vendor management, cleaning, security, home repairs, landscaping, interior design upgrades and more.
            </Box>
            
            <Box backgroundImage={"url(/bgs/sky-bg.webp)"} title={"Easy Scheduling"}>
              We invest in software development and improvements to the Vangow app and <strong>Intellistay™</strong> scheduling technology.
            </Box>

            <Box backgroundImage={"url(/bgs/gray-bg.webp)"} title={"Owner support"} className={"md:hidden"}>
              A dedicated Vangow crew member will provide onboarding and ongoing support as your home’s owner representative and manager.
            </Box>

            <Box backgroundImage={"url(/bgs/sky-bg.webp)"} title={"Company guarantee"} className={"md:hidden"}>
              Vangow guarantees the other owners in the company. If one owner defaults the monthly payments, Vangow steps in, the co-owners are protected.
            </Box>

            <Box backgroundImage={"url(/bgs/sky-bg.webp)"} title={"Owner support"} className={"md:block hidden"}>
              A dedicated Vangow crew member will provide onboarding and ongoing support as your home’s owner representative and manager.
            </Box>

            <Box backgroundImage={"url(/bgs/gray-bg.webp)"} title={"Company guarantee"} className={"md:block hidden"}>
              Vangow guarantees the other owners in the company. If one owner defaults the monthly payments, Vangow steps in, the co-owners are protected.
            </Box>

          </div>

        </section>

      </article>
      <section className="pt-16 md:pb-32 xl:pb-28 bg-[#000]/5 p-4">

        <div className="flex flex-col items-center justify-center">
          <span className="text-3xl md:text-7xl font-bold mb-6 font-made-outer">Intellistay<span className="font-sans">™</span></span>
          <p className="max-w-[400px] text-center text-pretty">Dynamic Scheduling, you decide what dates are most important to you, and your usage may vary from year to year.</p>
        </div>
        <div className="md:hidden">
          <div className="p-4">
            <img src="/phone-mockup.webp" alt="Phone Mockup" />
            <div>
              <span className="text-xl font-bold">Smart</span>
              <p>Our Intellistay™ system adapts to seasonal changes, local events, and evolving owner preferences over time.</p>
            </div>
          </div>
          <div className="p-4">
            <div>
              <span className="text-xl font-bold">Flexible</span>
              <p>Book open dates in real-time, from 2 days to 2 years ahead. Easily adjust confirmed stays as needed.</p>
            </div>
          </div>
          <div className="p-4">
            <div>
              <span className="text-xl font-bold">Fair</span>
              <p>Each owner enjoys fair access to their residence throughout the year, with numerous chances to reserve stays during holiday periods and the summer season.</p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-between items-center relative h-[470px] px-16">

          <div className="flex flex-col gap-6 max-w-[150px] xl:max-w-[300px]">

            <div>
              <span className="text-xl font-bold">Smart</span>
              <p>Our Intellistay™ system adapts to seasonal changes, local events, and evolving owner preferences over time.</p>
            </div>
            <div>
              <span className="text-xl font-bold">Flexible</span>
              <p>Book open dates in real-time, from 2 days to 2 years ahead. Easily adjust confirmed stays as needed.</p>
            </div>

          </div>
          <div className="max-w-[150px] xl:max-w-[300px]">
            <div>
              <span className="text-xl font-bold">Fair</span>
              <p>Each owner enjoys fair access to their residence throughout the year, with numerous chances to reserve stays during holiday periods and the summer season.</p>
            </div>
          </div>
          <img src="/phone-mockup.webp" alt="Phone Mockup" className="absolute left-1/2 -translate-x-1/2 -bottom-44 max-w-[300px] xl:-bottom-40" />
        </div>

      </section>
      <GetInTouch />
    </main>
  )
}