import { useState } from "react"
import axios from "axios"

const baseUrl = import.meta.env.VITE_BASE_URL_API

export default function LoginBager() {
  const [data, setData] = useState({
    email: ''
  })
  const [error, setError] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleInput = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  const submit = (e) => {
    e.preventDefault()

    if (data.email === '') {
      return setError(true)
    } else {
      setError(false)
    }

    axios({
      method: 'post',
      url: `${baseUrl}/login`,
      data: {
        "user": {
          "login_type": "email",                      // *required siempre email
          "recipient": data.email,                    // *required
          "send_notifications": true,                 // si esta en false no manda el email
          "platform": "web",
          "device_id": "",
          "device_name": "",
          "autofill_hash": "",
          "expiration": 380                           // esto solo funciona en DEV
        }
      }
    })
      .then(res => {
        switch (res.data.data.attributes.metadata.action) {
          case 'signup':
            localStorage.setItem('token', res.data.data.attributes.token)
            break
          case 'login':
            localStorage.setItem('token', res.data.data.attributes.token)
            break
        }
      })
      .catch(err => {
        console.error(err)
      })

  }

  return (
    <div className=" font-abc fixed bottom-0 left-1/2 -translate-x-1/2 z-50 bg-white max-w-[500px] w-full rounded-t-2xl">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-primary text-white w-full rounded-t-2xl py-4 flex justify-center items-center gap-4 font-bold text-xl">
        Join our mailing list
        <img src="/icons/angle-down.svg" width="15px" className={isOpen ? '' : 'rotate-180'} />
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
  )
}

function VerifyEmail() {
  const [data, setData] = useState({
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: ''
  })


  const handleInput = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

  const submit = e => {
    e.preventDefault()

  }

  return (
    <div className="fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2">
      <form onSubmit={submit} className="p-5 pb-32">
        <div className="border-b-[1px] pb-4 border-secondary flex flex-col">
          <span className="font-bold font-made-outer">Don&apos;t miss out</span>
          <p>Our best homes sell fast, get personalized content first.</p>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="">Enter your email</label>
          <div>
          <input type="number" onChange={handleInput} name="code1" max={9} min={0} className="bg-gray-200 p-2 rounded" required />
          <input type="number" onChange={handleInput} name="code2" max={9} min={0} className="bg-gray-200 p-2 rounded" required />
          <input type="number" onChange={handleInput} name="code3" max={9} min={0} className="bg-gray-200 p-2 rounded" required />
          <input type="number" onChange={handleInput} name="code4" max={9} min={0} className="bg-gray-200 p-2 rounded" required />
          <input type="number" onChange={handleInput} name="code5" max={9} min={0} className="bg-gray-200 p-2 rounded" required />
          <input type="number" onChange={handleInput} name="code6" max={9} min={0} className="bg-gray-200 p-2 rounded" required />
          </div>
          
        </div>
      </form>
    </div>
  )
}