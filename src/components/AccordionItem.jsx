import { useState } from "react"

export default function AccordionItem({title, children}){
  const [isOpen, setIsOpen] = useState(false)

  const handleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return(
    <>
      <button onClick={handleAccordion} className="bg-white text-xl border-t-[1px] flex justify-between items-center border-secondary p-4 gap-4 w-full">
        {title}
        <img src="/icons/angle-up.svg" alt="icon" className={!isOpen ? 'rotate-180' : ''} width="13px" />
      </button>
      <div className={`bg-white px-4 pb-4 ${ isOpen ? '' : 'overflow-hidden hidden'}`}>
        {children}
      </div>
    </>
  )
}