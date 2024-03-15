import AccordionItem from "../components/AccordionItem"
import BlogCarousel from "../components/BlogCarousel"
import GetInTouch from "../components/GetInTouch"
import SectionPicture from "../components/SectionPicture"
import PublicLayout from "../layouts/PublicLayout"

export default function Closing() {
  return (
    <PublicLayout>
      <main className="font-abc text-secondary">
        <header style={{ backgroundImage: 'url(/bgs/sky-transparent.webp)' }} className=" h-80 bg-cover bg-center flex flex-col items-center justify-center gap-2">
          <h3 className="font-abc-bold">Close with confidence</h3>
          <h2 className="font-bold text-3xl font-made-outer">Streamlined closing</h2>
          <p className="max-w-[400px] text-center">Just a few more steps before you step through the door of your Vangow</p>
        </header>
        <article className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Reserve your share" number={1}>
            <p>Vangow schedules a call to kick off your closing. You’ll sign the residential purchase agreement and addendum. You’ll receive instructions on how to wire your deposit, which is 10% of the share price.</p>
          </Card>
          <Card title="Review and sign documents" number={2}>
            <p>You’ll receive two packets of documents to review and sign. The first includes the house policy, program manager agreement, inspection report and seller disclosures. The second has the operating agreement and ACH form for monthly operating expenses.</p>
          </Card>
          <Card title="Secure financing" number={3}>
            <p>If you are financing a portion of your purchase, you must provide Vangow with your most recent pay stub, bank statement and tax return. In addition, you will need to supply a credit report authorization.</p>
          </Card>
          <Card title="Prepare for closing" number={4}>
            <p>Vangow schedules a check-in call 5 days before closing. We’ll review your closing statement and wire instructions for sending the remaining funds. We’ll confirm all documents are signed and verify your first stay date.</p>
          </Card>
          <Card title="Close" number={5}>
            <p>Congratulations, you are now a Vangow owner! It’s time to crack open the champagne and share the good news about your second home with your family and friends. Now, just one more step.</p>
          </Card>
          <Card title="Onboarding" number={6}>
            <p>Following closing, schedule an onboarding session with your home manager. Download the Vangow app so you can start Vangow your stays, and get ready to enjoy your new second home!</p>
          </Card>
        </article>
        <SectionPicture title="Our support doesn't end at closing" subtitle="What to expect as an owner" description="Vangow takes care of your home, so you can just show up and relax. Our ongoing services include property management, bill payment, maintenance and more. Owners are responsible for the home's monthly operating expenses, such as utilities and turnover services. Vangow passes these costs through to owners based on the number of shares owned." >
          <img src="/image-video.webp" alt="image" loading="lazy" className="rounded-xl" />
        </SectionPicture>
        <article className="px-4 pt-16">
          <section>
            <div className="flex flex-col items-center justify-center">
              <span className="text-4xl font-bold mb-6 font-made-outer">Closing FAQs</span>
            </div>
          </section>
          <section className="max-w-7xl mx-auto py-16">
            <AccordionItem title="Are closing costs included in the price?">
              <p>Yes, real estate closing costs, such as title fees and commissions, are already included in the share price. If a buyer chooses to finance up to 70% of their purchase through Vangow’s banking partners, an additional financing fee will be assessed at closing.</p>
            </AccordionItem>
            <AccordionItem title="Does the Vangow program management fee go up each year?">
              <p>No, our program management fee is a fixed $99 per month.</p>
            </AccordionItem>
            <AccordionItem title="Can vangow make changes to the owner operating agreement?">
              <p>Material changes require an ownership vote. Vangow has limited authority to make non-material changes (e.g., change of address for state reporting purposes) on behalf of the ownership group.</p>
            </AccordionItem>
            <AccordionItem title="Can vangow raise the monthly home operating estimate?">
              <p>During periodic reconciliation processes, the Vangow management team will determine if any increases are required based on the actual costs needed for the home. Any increase to cover operating costs will be communicated during the review, and backup documentation will be provided.</p>
            </AccordionItem>
            <AccordionItem title="Where do the reserve funds go and how are funds used?">
              <p>Reserve funds are held in the individual LLC&apos;s bank account, managed by Vangow. Funds are only used for the home’s repairs and maintenance. When the need for a major repair arises, Vangow will allocate funds after a transparent competitive bid process.</p>
            </AccordionItem>
            <AccordionItem title="What if another owner defaults? How does vangow protect me as an owner?">
              <p>Vangow serves as the corporate guarantor of any share financing protecting you should another owner default. In the unfortunate event of an owner default, Pacaso will step in to service the loan. If not resolved within 90 days, we will foreclose on that specific share and manage the resale without any disruption to the ownership group.</p>
            </AccordionItem>
          </section>
        </article>
        <GetInTouch />
        <BlogCarousel />
      </main>
    </PublicLayout>
  )
}

function Card({ title, number, children }) {
  return (
    <section className="bg-[#f2f2f2] rounded-xl p-4 flex flex-col">
      <h2 className="text-secondary/10 font-abc-bold text-4xl self-end">#{number}</h2>
      <div>
        <h3 className="font-abc-bold text-xl max-w-[150px] mb-4">{title}</h3>
        {children}
      </div>
    </section>
  )
}