import AccordionItem from "../components/AccordionItem";
import PublicLayout from "../layouts/PublicLayout";

export default function Communities() {
  return (
    <PublicLayout headerAnimation>
      <main className="font-abc text-secondary mt-16">
        <header style={{ backgroundImage: 'url(/bgs/sky-white.svg)' }} className=" h-80 bg-primary bg-cover bg-center flex flex-col items-center justify-center">
          <h3 className="font-abc-bold">Part of the community</h3>
          <h1 className=" text-4xl font-made-outer">Helping communities thrive</h1>
          <p className="max-w-[400px] text-center">Vangow owners are families, neighbors and local business supporters.</p>
        </header>
        <article className="py-16 px-4">
          <section className="max-w-7xl mx-auto">
            <header className="text-center py-8">
              <h3 className="font-abc-bold max-w-[400px] mx-auto">We buy high-end, turnkey homes in top second home destinations</h3>
              <h2 className="font-bold text-3xl font-made-outer">Responsible second home ownership</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mt-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src="/icons/chart.svg" alt="icon" />
                  <h2 className="font-bold text-2xl font-abc-bold">Families next door</h2>
                </div>
                <p>Your Vangow neighbors are families, not corporations. Owners, not renters. Together, they own 100% of their home.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src="/icons/user-home.svg" alt="icon" />
                  <h2 className="font-bold text-2xl font-abc-bold">Economic benefits</h2>
                </div>
                <p>Unlike a typical second home, Vangow homes are occupied nearly 90% of the time — providing year-round support for local businesses.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src="/icons/shield.svg" alt="icon" />
                  <h2 className="font-bold text-2xl font-abc-bold">Sustainable ownership</h2>
                </div>
                <p>Vangow reduces competition for middle-tier homes by consolidating up to eight buyers into one luxury home.</p>
              </div>
            </div>
          </section>
        </article>
        <article style={{ backgroundImage: "url('bgs/home-bg-4.webp')" }} className="h-screen bg-black bg-center bg-cover flex justify-center items-center">
          <section className="text-white text-center max-w-[400px]">
            <h3 className="font-abc-bold text-3xl mb-5">Part of the community</h3>
            <p>No one benefits when homes are empty. Vangow co-owners use their homes year-round, supporting local businesses and building community connections.</p>
          </section>
        </article>
        <article>
          <section className=" py-16">
            <div className="flex flex-col md:flex-row p-4 items-center gap-16 max-w-7xl mx-auto">
              <div>
                <img src="/image-video.webp" alt="image" loading="lazy" className="rounded-xl" />
              </div>
              <div className="flex flex-col gap-4 md:w-2/3">
                <span className="font-bold text-2xl md:text-3xl font-abc-bold">Agent Referral Dashboard</span>
                <p>Forget short-term renters. Vangow serves homeowners and their families. They are invested in their home and bring an owner’s mindset to their use and care of the property. All owners agree to Vangow’s policies, which prohibit rentals and large events or parties.</p>
              </div>
            </div>
          </section>
          <section className="bg-[#f2f2f2] py-16">
            <div className="flex flex-col md:flex-row p-4 items-center gap-16 max-w-7xl mx-auto">
              
              <div className="flex flex-col gap-4 md:w-2/3">
                <span className="font-bold text-2xl md:text-3xl font-abc-bold">Setting the record straight</span>
                <p>How does Vangow affect communities? We’d like to address some common misconceptions. Watch the video to learn how Vangow provides housing solutions, supports communities, and why Vangow owners make great neighbors.</p>
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
              <div className="flex flex-col gap-4 md:w-2/3">
                <span className="font-bold text-2xl md:text-3xl font-abc-bold">Supporting the local economy</span>
                <p>Most second homes sit vacant 10-11 months each year. In contrast, Vangow homes are occupied nearly 90% of the year, meaning owners and their families are patronizing local shops and restaurants in all seasons. The result: nearly 10 times more spending at local businesses compared to the average second home.</p>
                <div>
                <button className="text-white font-medium bg-primary py-3 px-8 rounded-lg font-abc-bold transition-all  hover:scale-105 hover:bg-primary-strong">See the data</button>
                </div>
                
              </div>
            </div>
          </section>
        </article>
        <article className="mx-4 pt-16 border-t-[1px] border-secondary">
          <section>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-bold mb-6 font-made-outer">Neighbor FAQs</span>
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
      </main>
    </PublicLayout>
  )
}