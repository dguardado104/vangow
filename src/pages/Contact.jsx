import PublicLayout from "../layouts/PublicLayout";

export default function Contact() {
  return (
    <PublicLayout headerAnimation>
      <main className="font-abc bg-[#042434] text-white justify-between py-48 px-4 flex flex-col md:flex-row gap-16">
        <article className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl xl:text-7xl font-bold font-made-outer leading-[.5]">Get<span className="font-nautica font-normal">In</span>Touch</h1>
          <p className="w-[300px] mx-auto md:mx-0">If you have any special requests, please let us know. Tell us who you are and what you would like to know about Vangow.</p>
        </article>
        <article className="grow max-w-3xl">
          <form action="" className="[&>section]:py-4">
            <section className="flex flex-col md:flex-row gap-4 w-full">
              <div className="md:w-1/2">
                <label htmlFor="">Full name</label>
                <input type="text" className="p-2 rounded-md text-secondary outline w-full" />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="">Email</label>
                <input type="text" className="p-2 rounded-md text-secondary outline w-full" />
              </div>
            </section>
            <section className="flex flex-col md:flex-row gap-4 w-full ">
              <div className="md:w-1/2">
                <label htmlFor="">Phone</label>
                <input type="text" className="p-2 rounded-md text-secondary outline w-full" />
              </div>
              <div className="md:w-1/2">
                <label htmlFor="">Where would you like to own?</label>
                <input type="text" className="p-2 rounded-md text-secondary outline w-full" />
              </div>
            </section>
            <section>
              <div className="flex gap-4 md:gap-6">
                <div className="grid grid-cols-3">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-1 md:p-3 rounded-full cursor-pointer"
                      htmlFor="type"
                    >
                      <input
                        name="color"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary-strong hover:before:opacity-10"
                        id="type"
                      />
                      <span className="absolute text-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle data-name="ellipse" cx={8} cy={8} r={8} />
                        </svg>

                      </span>

                    </label>
                    <span>I am a buyer</span>
                  </div>

                  <div className="inline-flex items-center">

                    <label
                      className="relative flex items-center p-1 md:p-3 rounded-full cursor-pointer"
                      htmlFor="type"
                    >
                      <input
                        name="color"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary-strong hover:before:opacity-10"
                        id="type"
                      />
                      <span className="absolute text-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle data-name="ellipse" cx={8} cy={8} r={8} />
                        </svg>

                      </span>

                    </label>
                    <span>I am a seller</span>
                  </div>

                  <div className="inline-flex items-center">

                    <label
                      className="relative flex items-center p-1 md:p-3 rounded-full cursor-pointer"
                      htmlFor="type"
                    >
                      <input
                        name="color"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-primary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primary checked:before:bg-primary-strong hover:before:opacity-10"
                        id="type"

                      />
                      <span className="absolute text-primary transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle data-name="ellipse" cx={8} cy={8} r={8} />
                        </svg>

                      </span>

                    </label>
                    <span>I am an agent</span>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <label htmlFor="">Drop us a line (optional)</label>
              <textarea cols="30" rows="5" className="p-2 rounded-md text-secondary outline w-full"></textarea>
            </section>
            <section>
              <div className="flex items-center mb-4">
                <input type="checkbox" value="" className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary " />
                <label htmlFor="" className="ms-2 text-sm font-medium">Create an account with this email to receive exclusive updates & listings</label>
              </div>
            </section>
            <section className="flex justify-center md:justify-start">
              <button className="text-white font-medium bg-primary py-3 px-8 rounded-lg font-abc-bold transition-all uppercase hover:scale-105 hover:bg-primary-strong mx-4">Contact me</button>
            </section>
          </form>
        </article>
      </main>
    </PublicLayout>
  )
}

function Badged(){
  return(
    <></>
  )
}