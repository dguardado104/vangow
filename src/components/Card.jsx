export default function Card({ item, className }) {

  return (
    item ?
      <div style={{ backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'url(/bgs/home-bg-2.webp)' }} className={`bg-cover bg-center h-80 rounded-lg relative ${className}`}>
        <div className="bg-secondary text-white absolute bottom-0 rounded-lg p-3 flex justify-between text-xs items-center w-full">
          <div className="flex flex-col gap-1 w-1/2">
            <span className="font-bold text-2xl font-made-outer">Sandcastle</span>
            <span className="text-primary-strong">$275,000.00</span>
            <span>Isla Contadora, Panama</span>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <button className="hover:scale-105 border-[1px] border-white rounded-lg p-1 self-end">
              <img src="/icons/heart.svg" alt="icon" className="w-[16px]" />
            </button>
            <span className="text-primary-strong flex items-center gap-1">
              <span className="block w-2 h-2 rounded-full bg-primary-strong"></span> 1/8 Ownership</span>
            <span>220m2 | 5 Bed | 4 Bath</span>
          </div>

        </div>
      </div>
      :
      <div className={` bg-slate-300 h-80 relative rounded-xl ${className}`}>
        <div className="animate-pulse ">
          <div className="absolute bottom-0 w-full flex justify-between p-4 bg-slate-200 rounded-xl">
            <div className="flex flex-col gap-2 w-full">
              <div className="bg-slate-400 rounded h-4 w-1/2"></div>
              <div className="bg-slate-400 rounded h-4 w-full"></div>
              <div className="bg-slate-400 rounded h-4 w-full"></div>
            </div>

          </div>

        </div>
      </div>
  )
}