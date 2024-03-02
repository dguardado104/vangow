import { useState } from "react"

export default function LoginBager(){

  const [isOpen, setIsOpen] = useState(false)

  return(
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-20 bg-white max-w-[500px] w-full rounded-t-2xl">
     <button onClick={() => setIsOpen(!isOpen)} className="bg-primary text-white w-full rounded-t-2xl p-2 flex justify-center items-center gap-4">
      Join our mailing list
      <img src="/icons/angle-down.svg" width="15px" className={isOpen ? '' : 'rotate-180'} />
      </button> 
     <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto' : 'h-[0]'}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima eum ducimus animi quaerat consequatur, itaque voluptatibus sint repellat quasi provident cum voluptas! Soluta corporis harum inventore quos perferendis. Ipsum?
     </div>
    </div>
  )
}