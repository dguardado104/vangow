import { Link } from "react-router-dom";
import CardCrew from "../components/CardCrew";
import GetInTouch from "../components/GetInTouch";
import PublicLayout from "../layouts/PublicLayout";

export default function About() {
  return (
    <PublicLayout>
      <main className="text-secondary font-abc">
        <header className="mt-32 px-4 ">
          <div className="border-b-[1px] border-secondary flex justify-between gap-4 flex-col items-center text-center md:text-left md:flex-row pb-8 md:pb-16">
            <h1 className="font-made-outer text-3xl md:text-7xl">Why we&apos;re here</h1>
            <p className="w-[200px]">Vangow tech that makes co-owning possible and enjoyable</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 md:py-16">
            <div>
              <h3 className="text-lg">About <strong className="font-abc-bold">Vangow</strong></h3>
            </div>
            <div>
              <p>Approximately 10 million second homes remain vacant for 11 months annually. Concurrently, millions harbor the aspiration of possessing and relishing a second home. In response, we established Vangow, a service aimed at broadening second home ownership.</p>
            </div>
            <div>
              <p>Our platform enables individuals to acquire a stake in a second home, ranging from 1/8 to 1/2, providing them with an authentic real estate ownership experience.</p>
            </div>
          </div>

        </header>
        <article style={{ backgroundImage: "url(/bgs/home-bg-3.webp)" }} className="relative bg-cover bg-center flex justify-center items-center min-h-screen after:w-full after:h-screen after:absolute after:top-0 after:left-0 after:bg-black/40">
          <section className="flex justify-center items-center gap-4 flex-col z-10 text-white">
            <img src="/hero.svg" alt="image" className="w-[80px]" loading="lazy" />
            <span className="font-made-outer text-4xl md:text-7xl ">Find<span className="font-nautica">Your</span>Place</span>
            <Link className="border-[1px] rounded-lg border-white px-4 py-2">View listings</Link>
          </section>
        </article>
        <article className="py-16 px-4">
          <header className="flex flex-col items-center md:flex-row md:justify-between gap-4">
            <span className="font-made-outer text-3xl md:text-7xl">Meet<br className="hidden md:block" /> our crew</span>
            <div className="border-b-[1px] border-secondary grow hidden md:block"></div>
            <p className="w-[400px] md:self-end text-center md:text-left">From strategic acquisitions to seamless transactions, our team delivers unparalleled expertise, ensuring your real estate journey is not just a transaction but an investment in a future of possibilities</p>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-3 pt-16 gap-6">
            <CardCrew />
            <CardCrew />
            <CardCrew />
          </section>
        </article>
        <GetInTouch />
      </main>
    </PublicLayout>

  )
}