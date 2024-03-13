import { Link } from "react-router-dom"
import AccordionItem from "../components/AccordionItem"
import GetInTouch from "../components/GetInTouch"
import BlogCarousel from "../components/BlogCarousel"

export default function Agents() {
  return (
    <main className="font-abc text-secondary">
      <header style={{ backgroundImage: 'url(/bgs/black-bg-header.svg)' }} className="relative border-b-2 border-primary  text-white bg-contain h-[30rem] bg-center flex flex-col items-center justify-center gap-2 ">
        <h2 className="font-bold text-3xl font-made-outer z-10">Earn more selling Vangow</h2>
        <p className="max-w-[400px] text-center">Refer your clients to Vangow and earn a 3% referral commission when they co-own a second home — plus an extra 1% if they sell. We do the legwork including tours, inspections and escrow, and keep you in the loop every step of the way.</p>
        <img src="/stamp.svg" alt="stamp" className="absolute -bottom-20" />
      </header>
      <article className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto">
          <header className="text-center py-8">
            <h2 className="font-bold text-3xl font-made-outer">Your client, your commission - for life</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 max-w-7xl mt-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/chart.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Refer anywhere in the world</h2>
              </div>
              <p>Through curated marketing efforts and an increased buyer pool, we enable sellers to get the most value out of their homes.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/chart.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Connect with confidence</h2>
              </div>
              <p>Through curated marketing efforts and an increased buyer pool, we enable sellers to get the most value out of their homes.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/user-home.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Earn a 3% referral commission, every time</h2>
              </div>
              <p>Not ready to leave? Keep the amount of ownership that’s right for you, from ⅛ to ½, and tap into your home’s liquidity.</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <img src="/icons/shield.svg" alt="icon" />
                <h2 className="font-bold text-2xl font-abc-bold">Collect a 1% resale commission</h2>
              </div>
              <p>When you sell us part of your home, we manage it and you simply enjoy it. With a dedicated service team, we make second home co-ownership easy and headache free.</p>
            </div>
          </div>
          <div className="flex justify-center pt-16">
            <Link className="bg-primary px-4 py-2 text-white rounded-lg font-abc-bold">Refer a buyer</Link>
          </div>
        </section>
      </article>
      <article>
        <section className="bg-[#f2f2f2] py-16">
          <div className="flex flex-col md:flex-row p-4 items-center gap-16 max-w-7xl mx-auto">
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="font-abc-bold">Get rewarded for your referrals</span>
              <span className="font-bold text-2xl md:text-3xl font-made-outer">Refer and earn</span>
              <p>Vangow has paid agents more than $21 million in total gross commissions since October 2020. Contribute to our growth and get rewarded with referral bonuses.</p>
            </div>
            <div>
              <img src="/image-video.webp" alt="image" loading="lazy" className="rounded-xl" />
            </div>
          </div>
        </section>
        <section className=" py-16">
          <div className="flex flex-col md:flex-row p-4 items-center gap-16 max-w-7xl mx-auto">
            <div>
              <img src="/image-video.webp" alt="image" loading="lazy" className="rounded-xl" />
            </div>
            <div className="flex flex-col gap-4 md:w-1/3">
              <span className="font-abc-bold">Refer with ease</span>
              <span className="font-bold text-2xl md:text-3xl font-made-outer">Agent Referral Dashboard</span>
              <p>Use your Agent Referral Dashboard to easily refer potential buyers, track the status of commissions, generate unique share links and manage your Vangow Second Home Specialist Certification.</p>
            </div>
          </div>
        </section>
      </article>
      <article className="mx-4 pt-16 border-t-[1px] border-secondary">
        <section>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold mb-6 font-made-outer">Common questions</span>
          </div>
        </section>
        <section className="max-w-7xl mx-auto py-16">
          <AccordionItem title="I have a buyer interested in a Vangow. What's the next step?">
            <p>Yes, real estate closing costs, such as title fees and commissions, are already included in the share price. If a buyer chooses to finance up to 70% of their purchase through Vangow’s banking partners, an additional financing fee will be assessed at closing.</p>
          </AccordionItem>
          <AccordionItem title="Can Iearn commissions on sales outside of my market?">
            <p>No, our program management fee is a fixed $99 per month.</p>
          </AccordionItem>
          <AccordionItem title="Is commission paid on the whole home price or the share price?">
            <p>Material changes require an ownership vote. Vangow has limited authority to make non-material changes (e.g., change of address for state reporting purposes) on behalf of the ownership group.</p>
          </AccordionItem>
          <AccordionItem title="I’m unfamiliar with the Vangow process. How does it compare to a whole home sale?">
            <p>During periodic reconciliation processes, the Vangow management team will determine if any increases are required based on the actual costs needed for the home. Any increase to cover operating costs will be communicated during the review, and backup documentation will be provided.</p>
          </AccordionItem>
          <AccordionItem title="How do you keep me in the loop on the transaction?">
            <p>Reserve funds are held in the individual LLC&apos;s bank account, managed by Vangow. Funds are only used for the home’s repairs and maintenance. When the need for a major repair arises, Vangow will allocate funds after a transparent competitive bid process.</p>
          </AccordionItem>
          <AccordionItem title="What is the agent referral dashboard?">
            <p>Vangow serves as the corporate guarantor of any share financing protecting you should another owner default. In the unfortunate event of an owner default, Pacaso will step in to service the loan. If not resolved within 90 days, we will foreclose on that specific share and manage the resale without any disruption to the ownership group.</p>
          </AccordionItem>
          <AccordionItem title="What happens after I submit a referral?">
            <p>Vangow serves as the corporate guarantor of any share financing protecting you should another owner default. In the unfortunate event of an owner default, Pacaso will step in to service the loan. If not resolved within 90 days, we will foreclose on that specific share and manage the resale without any disruption to the ownership group.</p>
          </AccordionItem>
        </section>
      </article>
      <GetInTouch />
      <BlogCarousel />
    </main>
  )
}