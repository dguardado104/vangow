export default function GetInTouch() {
  return (
    <section className="bg-secondary text-white">
      <div className="py-36 flex flex-col items-center justify-center">
        <span className="text-4xl md:text-7xl font-bold">GetInTouch</span>
        <p className="w-[300px] text-center py-16">If you have any special requests, please let us know. Tell us who you are and what you would like to know about Vangow.</p>

        <form action="#" className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="">Enter your email</label>
            <input type="email" placeholder="example@example.com" className="p-2 rounded-md text-secondary outline " required />
          </div>
          <div className="flex gap-4 md:gap-6">
            <div>
              <div className="flex flex-col md:flex-row gap-4 w-max">
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
          </div>
          <button type="submit" className="text-white font-medium bg-primary-strong py-3 px-8 rounded-lg  transition-all uppercase hover:scale-105 hover:bg-primary-strong">Join</button>
        </form>
      </div>
    </section>
  )
}