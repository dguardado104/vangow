import Box from "../components/Box";

export default function Learns() {
  return (
    <main className="text-secondary">
      <section style={{ backgroundImage: 'url(/bgs/home-bg-1.webp)' }} className="h-[400px] bg-black bg-cover bg-center relative">
        <div className="text-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute flex flex-col text-center ">
          <span>How Vangow works</span>
          <span className="my-4 font-bold text-4xl">Co-Ownership, simplified</span>
          <p>You own the home, and we manage it. It’s the best and modern way to buy and own a luxury second home.</p>
        </div>
      </section>
      <article className="p-4">
        <section className="py-8 grid grid-cols-1 md:grid-cols-3 justify-center gap-4">

          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">Design</span>
            <p>Our residences are adorned with high-quality furniture, essential amenities, and kitchenware, complemented by local artisanal creations.</p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">Support</span>
            <p>Each owner receives support from a local Home Manager who delivers dedicated service and recommendations every day of the week.</p>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-bold text-xl">Scheduling</span>
            <p>Owners typically stay 6-7 times a year in their residences, and stays are fairly scheduled through the Intellistay™ owner app utilizing smart technology.</p>
          </div>

          <div className="md:col-span-3 md:flex gap-4 justify-center">
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="font-bold text-xl">Reselling</span>
              <p>Transfer ownership on your own terms, setting the price as you see fit. Historically, industry shares have sold with an average 10% profit.</p>
            </div>

            <div className="flex flex-col pt-4 md:pt-0 gap-4 md:w-1/3">
              <span className="font-bold text-xl">Management</span>
              <p>We comprehensively handle every aspect of the home, from preventive maintenance, to cleaning, to billing, ensuring it&apos;s always ready for owners to relish.</p>
            </div>
          </div>


        </section>
        <section className="py-8">
          <div className="flex justify-center flex-col text-center">
            <span>How Vangow works</span>
            <span className="font-bold text-2xl">The best way to own a luxury second home</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
            <Box title={"Explore"} backgroundImage={"url('/bgs/black-bg.webp')"} headerClassName={"bg-primary-strong"}>
            Shop our collection of amazing single-family luxury homes in the best second home destinations. We help you find the best fit. <strong>You choose</strong> how many share you would like to own.
            </Box>

            <Box title={"Own"} backgroundImage={"url('/bgs/gold-bg.webp')"} headerClassName={"bg-black"}>
            We create a property company (S.A.) for every home, and we take care of all the sale details and work. At closing and delivery, the co-owners enjoy <strong>owning 100%</strong> of the home. Vangow does not retain any shares.
            </Box>

            <Box title={"Enjoy"} backgroundImage={"url('/bgs/black-bg.webp')"} headerClassName={"bg-primary-strong"}>
            We professionally take care of development, remodeling or redecorating the home, furnishings, repairs, utilities and property management. It’s like a luxury hotel, you just show up and relax!. Scheduling is easy and fair with our app and <strong>Intellistay™</strong> technology.
            </Box>
          </div>
        </section>
      </article>
    </main>
  )
}