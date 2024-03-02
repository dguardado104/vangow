export default function Card({ item }) {

  return (
    item ?
      <div style={{ backgroundImage: item.imageUrl ? item.imageUrl : '/home-bg-2.webp' }} className="bg-cover bg-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint laboriosam accusantium est dignissimos dicta repudiandae, facilis expedita aspernatur, beatae debitis animi minima eaque ea repellendus perspiciatis, ipsam amet a.
      </div>
      :
      <div className=" bg-slate-300 h-80 relative rounded-xl">
        <div className="animate-pulse ">

          <div className="absolute bottom-0 w-full flex justify-between p-4 bg-slate-200 rounded-xl">
            <div className="flex flex-col gap-2">
              <div className="bg-slate-400 rounded h-4 w-40 md:w-60"></div>
              <div className="bg-slate-400 rounded h-4 w-40 md:w-64"></div>
              <div className="bg-slate-400 rounded h-4 w-48 md:w-72"></div>
            </div>

          </div>

        </div>
      </div>
  )
}