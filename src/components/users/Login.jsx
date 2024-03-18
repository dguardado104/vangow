import { useEffect, useState } from "react"
import login from "../../services/login"

export default function Login() {
  const [data, setData] = useState({email: ''})
  const [error, setError] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hideButton, setHideButton] = useState(false)
  const [verifyStep, setVerifyStep] = useState(false)

  const handleInput = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  const submit = async (e) => {
    e.preventDefault()

    if (data.email === '') {
      setError(true)
      return;
    } else {
      setError(false)
    }

    try {
      const token = await login.createSession(data)
      if (token) {
        setVerifyStep(true)
      }
    } catch (error) {
      console.error('Error al crear sesión:', error)
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = document.documentElement.scrollHeight

      const footer = document.querySelector("footer")

      const scrollPosition = window.scrollY;

      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight >= pageHeight - footer.scrollHeight) {
        setHideButton(true)
        setIsOpen(false)
      } else {
        setHideButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    verifyStep ?
      <VerifyStep />
      :
      <>
        <div className={` font-abc fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-white max-w-[500px] w-full rounded-t-2xl ${hideButton ? 'hidden' : ''}`}>
          <button onClick={() => setIsOpen(!isOpen)} className="bg-primary text-white w-full rounded-t-2xl py-4 flex justify-center items-center gap-4 font-bold text-xl">
            Join our mailing list
            <img src="/icons/angle-down.svg" width="15px" alt="icon" className={isOpen ? '' : 'rotate-180'} />
          </button>
          <div className={` overflow-hidden transition-all duration-300 ${isOpen ? 'h-auto' : 'h-[0]'}`}>
            <form onSubmit={submit} className="p-5 pb-32">
              <div className="border-b-[1px] pb-4 border-secondary flex flex-col">
                <span className="font-bold font-made-outer">Don&apos;t miss out</span>
                <p>Our best homes sell fast, get personalized content first.</p>
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="email">Enter your email</label>
                <input type="email" name="email" onChange={handleInput} placeholder="example@example.com" className="bg-gray-200 p-2 rounded" required />
                {error ? <span className="text-red-400 text-xs">Email is required</span> : ''}
              </div>
              <div className="mt-4 flex justify-center">
                <button className="uppercase hover:bg-secondary bg-primary text-white font-bold py-3 px-6 rounded-2xl">Join or sign in</button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
}


function VerifyStep() {
  return (
    <></>
  )
}