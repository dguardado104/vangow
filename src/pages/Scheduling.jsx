import Calendar from "../assets/icons/Calendar"
import Heartbeat from "../assets/icons/Heartbeat"
import Danger from "../assets/icons/Danger"
import AccordionItem from "../components/AccordionItem"
import BlogCarousel from "../components/BlogCarousel"
import GetInTouch from "../components/GetInTouch"
import PublicLayout from "../layouts/PublicLayout"

export default function Scheduling() {
  return (
    <PublicLayout>
      <main className="font-abc text-secondary">
        <header className="">
          <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 relative py-32">
            <div className="text-center w-[300px] md:text-left">
              <h2 className="font-made-outer text-3xl md:text-5xl mb-6">Easy simple scheduling</h2>
              <p>Our <strong>Intellistay™</strong> scheduling system markes booking time in your home simple and fair Book stays from 2 days to 2 years in advance with the Vangow app and enjoy guaranteed access to your home during holidays and the summer season.</p>
            </div>
            <img src="/phone-mockup.webp" alt="image" className="w-[300px] pt-16 md:pt-0 md:absolute -bottom-6 right-0" />
          </section>
        </header>
        <article className="bg-primary text-white py-16 px-4">
          <section className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mt-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Calendar />
                  <h2 className="font-bold text-2xl sfont-abc-bold">Flexible</h2>
                </div>
                <p>Book open dates in real-time, from 2 days to 2 years ahead. Easily adjust confirmed stays as needed.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src="/icons/settings.svg" alt="icon" />
                  <h2 className="font-bold text-2xl sfont-abc-bold">Smart</h2>
                </div>
                <p>Our Intellistay™ system adapts to seasonal changes, local events, and evolving owner preferences over time.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <img src="/icons/heart.svg" alt="icon" />
                  <h2 className="font-bold text-2xl sfont-abc-bold">Fair</h2>
                </div>
                <p>Each owner enjoys fair access to their residence throughout the year, with numerous chances to reserve stays during holiday periods and the summer season.</p>
              </div>
            </div>
          </section>
        </article>
        <article className="py-16 px-4">
          <header className="flex justify-between">
            <span className="font-made-outer text-3xl md:text-4xl">Booking Time Equitably</span>
            <span className="hidden md:block font-made-outer text-4xl">Fair for all</span>
          </header>
          <section className="overflow-x-auto py-16">
            <table className="table-auto w-full ">
              <thead>
                <tr className="border-b-2 [&>th]:p-4 [&>th]:text-xl ">
                  <th>Stay types</th>
                  <th>Min stay</th>
                  <th>Max stay length</th>
                  <th>Time in advance ⅛</th>
                  <th>⅛ (1 share)</th>
                  <th>¼ (2 shares)</th>
                  <th>½ (4 shares)</th>
                </tr>
              </thead>
              <tbody className=" [&>tr]:border-b-2 [&>tr]:border-secondary [&>tr>td]:p-4">
                <tr>
                  <td><strong>Advance Notice</strong></td>
                  <td>2 nights</td>
                  <td>14 nights</td>
                  <td>31 days to years</td>
                  <td>6 reservations at a time</td>
                  <td>12 reservations at a time</td>
                  <td>24 reservations at a time</td>
                </tr>
                <tr className="bg-primary/20 !border-primary">
                  <td><strong>Short Notice</strong></td>
                  <td>2 nights</td>
                  <td>14 nights</td>
                  <td>2 to 30 days</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                  <td>Unlimited</td>
                </tr>
                <tr className="bg-vpurple/20 !border-vpurple">
                  <td><strong>Holiday</strong></td>
                  <td>3 nights</td>
                  <td>Upon holiday</td>
                  <td>Up to 2 years</td>
                  <td>1 reservation at a time</td>
                  <td>2 reservation at a time</td>
                  <td>4 reservation at a time</td>
                </tr>
                <tr className="bg-vorange/20 !border-vorange">
                  <td><strong>Summer</strong></td>
                  <td>2 nights</td>
                  <td>Upon ownership</td>
                  <td>Up to 2 years</td>
                  <td>1 res. up to 14 nights, or 2 res. up to 7 nights</td>
                  <td>4 res. up to 14 nights, or 2 res. up to 7 nights</td>
                  <td>8 res. up to 14 nights, or 2 res. up to 7 nights</td>
                </tr>
                <tr>
                  <td colSpan={3}></td>
                  <td>Max Nights stay length</td>
                  <td>14</td>
                  <td>28</td>
                  <td>42</td>
                </tr>
                <tr className="!border-0">
                  <td colSpan={3}></td>
                  <td>Nights per year</td>
                  <td>44</td>
                  <td>88</td>
                  <td>176</td>
                </tr>
              </tbody>
            </table>
          </section>
        </article>
        <article className="px-4">
          <section>
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl xl:text-7xl font-bold mb-6 font-made-outer">Intellistay<span className="font-sans">™</span></span>
              <p className="max-w-[400px] text-center text-pretty">Dynamic Scheduling, you decide what dates are most important to you, and your usage may vary from year to year.</p>
            </div>
          </section>
          <section className="max-w-7xl mx-auto py-16">
            <AccordionItem title="Advance notice">
              <p>Owners can book from 31 days to 2 years in advance, and each share can hold 6 reservations at a time. Includes holiday and summer stays. When these reservations are within the short-notice window (30 days or less) they become short notice, and you can book more stays. The minimum stay length is 2 nights. A stay with a of 2-7 nights counts as one reservation, while a stay with a of 8-14 nights counts as 2 reservations.</p>
            </AccordionItem>
            <AccordionItem title="Short notice">
              <p>Owners can book from 2 to 30 days in advance, and do not count towards your general stays. For homes with unsold shares, booking window is from 2 to 7 days in advance. The minimum stay is 2 nights. 1 reservation at a time.</p>
            </AccordionItem>
            <AccordionItem title="Holiday">
              <p>Each share can hold 1 “holiday date” at a time up to two years in advance. The minimum stay length is 3 nights.</p>
            </AccordionItem>
            <AccordionItem title="Summer">
              <p>Each home has a defined summer season. Each share can book 1 stay of up to 14 nights, or 2 stays of up to 7 nights each. Owners have the opportunity to book one summer stay per share before another owner can book a second stay.</p>
            </AccordionItem>
          </section>
        </article>
        <article className="py-16 px-4">
          <section className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mt-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Calendar />
                  <h2 className="font-bold text-2xl font-abc-bold">Modify a stay</h2>
                </div>
                <p>You can modify or change an existing stay in the app. If it&apos;s within 48 hours of arrival you can contact your home manager and he will help you adjust your stay duration.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Heartbeat />
                  <h2 className="font-bold text-2xl font-abc-bold">Back to Back</h2>
                </div>
                <p>In order for all co-owners of your home to have fair ongoing access, the period between your arrival date and your prior departure date must be equal or greater than your last stay.</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <Danger />
                  <h2 className="font-bold text-2xl font-abc-bold">Cancel a stay</h2>
                </div>
                <p>You can cancel your stays up to 31 days before arrival without any penalties. It you cancel within 30 days of your stay or before, you can cancel twice in a 12-months rolling period. All other cancellations will trigger that one available stay will be frozen for a period of 30 days.</p>
              </div>
            </div>
          </section>
        </article>
        <article className="bg-[#f2f2f2]">
          <section className="text-center flex justify-center">
            <div>
              <h3 className="font-bold font-made-outer text-2xl mt-16 md:text-4xl mb-4">Swap stays</h3>
              <p className="max-w-[300px]">You can swap stays with other co-owner of your home, or with a friend who owns a different <strong className="font-abc-bold">Vangow</strong></p>
            </div>

          </section>
          <section className="flex md:justify-center pt-16">
            <img src="/swap-stays.webp" alt="image" className="max-w-500px hidden md:block" />
            <img src="/swap-stays-mobile.webp" alt="image" className=" w-full mb-4 md:hidden" />
          </section>
        </article>
        <article className="py-16 px-4 bg-secondary text-white">
          <section className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-4xl mt-8">
              <div className="flex flex-col gap-2">
                <p>As an owner, when you book a stay you can select if you are <strong className="font-abc-bold">“open to swap”</strong> this stay. Other co-owners can view your stays and request a swap.</p>
              </div>
              <div className="flex flex-col gap-2">
                <strong className="font-abc-bold">How does it work:</strong>
                <ul>
                  <li>1. Make a connection with a friend.</li>
                  <li>2. Start a swap request</li>
                  <li>3. Your friend reviews and respond.</li>
                  <li>4. You finally confirm the swap.</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <p>Once the swap is <strong className="font-abc-bold">confirmed</strong>, you&apos;re all set to live the Vangow lifestyle in your friend’s home and destination</p>
              </div>
            </div>
          </section>
        </article>
        <BlogCarousel />
        <GetInTouch />
      </main>
    </PublicLayout>

  )
}