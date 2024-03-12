import AccordionItem from "../components/AccordionItem";
import BlogCarousel from "../components/BlogCarousel";
import GetInTouch from "../components/GetInTouch";
import NewPlaces from "../components/NewPlaces";

export default function Selling() {
  return (
    <main className="font-abc text-secondary">
      <header style={{ backgroundImage: 'url(/bgs/sky-transparent.webp)' }} className=" h-80 bg-cover bg-center flex flex-col items-center justify-center gap-2">
        <h3 className="font-abc-bold">Make your next move</h3>
        <h2 className="font-bold text-3xl font-made-outer">Sell your home to Vangow</h2>
        <p className="max-w-[400px] text-center">Whether you want to sell your entire home or right-size your ownership, we offer competitive and flexible options.</p>
      </header>
      <article className="py-16 px-4">
        <section className="max-w-7xl mx-auto">
          <header className="text-center py-8">
            <h3 className="font-abc-bold max-w-[400px] mx-auto">We buy high-end, turnkey homes in top second home destinations</h3>
            <h2 className="font-bold text-3xl font-made-outer">Sell us your wow-worthy home</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mt-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/chart.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Get top dollar</h2>
              </div>
              <p>Through curated marketing efforts and an increased buyer pool, we enable sellers to get the most value out of their homes.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/user-home.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Right-size your ownership</h2>
              </div>
              <p>Not ready to leave? Keep the amount of ownership that’s right for you, from ⅛ to ½, and tap into your home’s liquidity.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/shield.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Reduce the hassle</h2>
              </div>
              <p>When you sell us part of your home, we manage it and you simply enjoy it. With a dedicated service team, we make second home co-ownership easy and headache free.</p>
            </div>
          </div>
        </section>
      </article>
      <article style={{ backgroundImage: "url('bgs/home-bg-4.webp')" }} className="h-screen bg-black bg-center bg-cover flex justify-center items-center">
        <section className="text-white text-center max-w-[400px]">
          <h3 className="font-abc-bold text-3xl mb-5">How to sell your second home to Vangow</h3>
          <p>Sell all or part of your second home to Vangow, and let us take care of the management and upkeep.</p>
        </section>
      </article>
      <article className="px-4 pt-16">
        <section>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold mb-6 font-made-outer">Common questions</span>
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-16">
          <AccordionItem title="Why would I sell part of my home to Vangow?">
            <p>Yes, real estate closing costs, such as title fees and commissions, are already included in the share price. If a buyer chooses to finance up to 70% of their purchase through Vangow’s banking partners, an additional financing fee will be assessed at closing.</p>
          </AccordionItem>
          <AccordionItem title="How does the home sale process with Vangow work?">
            <p>No, our program management fee is a fixed $99 per month.</p>
          </AccordionItem>
          <AccordionItem title="What work is needed to prep for a sale?">
            <p>Material changes require an ownership vote. Vangow has limited authority to make non-material changes (e.g., change of address for state reporting purposes) on behalf of the ownership group.</p>
          </AccordionItem>
          <AccordionItem title="Can Vangow raise the monthly home operating estimate?">
            <p>During periodic reconciliation processes, the Vangow management team will determine if any increases are required based on the actual costs needed for the home. Any increase to cover operating costs will be communicated during the review, and backup documentation will be provided.</p>
          </AccordionItem>
          <AccordionItem title="How do you find buyers to purchase shares in my home?">
            <p>Reserve funds are held in the individual LLC&apos;s bank account, managed by Vangow. Funds are only used for the home’s repairs and maintenance. When the need for a major repair arises, Vangow will allocate funds after a transparent competitive bid process.</p>
          </AccordionItem>
          <AccordionItem title="How are prospective owners evaluated?">
            <p>Vangow serves as the corporate guarantor of any share financing protecting you should another owner default. In the unfortunate event of an owner default, Pacaso will step in to service the loan. If not resolved within 90 days, we will foreclose on that specific share and manage the resale without any disruption to the ownership group.</p>
          </AccordionItem>
        </section>
      </article>
      <NewPlaces />
      <GetInTouch />
      <BlogCarousel />
    </main>
  )
}