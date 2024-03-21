import { useEffect, useState } from "react"
import login from "../../services/login"
import { Link } from "react-router-dom"
import VerificationInput from "react-verification-input"

export default function Login() {
  const [data, setData] = useState({ email: '' })
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
      console.error(error)
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
  const [disable, setDisable] = useState(false)
  

  const handleCode = async (e) => {
    try {
      const res = await login.verifyOpt(e)

      if(res){
        return ''
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  const resendCode = async () => {
    try {
      const res = await login.resendOtp()

      if(res){
        setDisable(true)
        setTimeout(() => {
          setDisable(false)
        }, 10000);
      }


    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="fixed font-abc bg-black/30 z-40 h-screen w-screen flex justify-center items-center">
      <div className="bg-white max-w-[500px] rounded-2xl">
        <header className="bg-primary text-white rounded-t-2xl p-4">
          <h3 className="text-2xl">Welcome to Vangow</h3>
        </header>
        <article className="flex flex-col px-4 gap-8 py-8">
          <section >
            <div>
              <strong className="font-abc-bold text-xl">Check your email</strong>
              <p>Unlock full pricing details, personalize your experience, save favorites and more.</p>
            </div>
          </section>
          <section className="border-y-[1px] py-8 border-[#ccc]" >
            <div className="flex items-center justify-center flex-col gap-4">
              <strong>Enter the code we&apos;ve sent by email</strong>
              <div>
                <VerificationInput classNames={{
                  character: "bg-[#f2f2f2] rounded-lg border-none outline-none text-[#787878]"
                }} validChars="0-9" onComplete={handleCode} inputProps={{ inputMode: "numeric" }} />
              </div>
              <span>Haven&apos;t received. <button onClick={resendCode} className={`underline ${disable ? 'text-secondary/10' : ''}`} disabled={disable} >Send again</button></span>
            </div>

          </section>
          <section className="text-center">
            <h3 className="font-abc-bold">VANGOW</h3>
            <p>I give Vangow permission to contact me & me agree to the <Link to={"/terms"} className="underline">terms</Link>. This site is protected by reCAPTCHA and the Google <Link className="underline">privacy policy</Link>, <Link className="underline">terms of service</Link> and <Link className="underline">mobile terms</Link></p>
          </section>
        </article>

      </div>
    </div>
  )
}