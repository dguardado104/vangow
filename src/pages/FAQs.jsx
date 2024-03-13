import { useState, useEffect, useRef } from "react"
import GetInTouch from "../components/GetInTouch"
import AccordionItem from "../components/AccordionItem"

export default function FAQs() {

  const [selectedButton, setSelectedButton] = useState("Buying")
  const [headerPosition, setHeaderPosition] = useState(true)
  const header = useRef(null)

  const buttons = [
    {
      key: 1,
      title: "Buying",
      questions: [
        {
          key: 1,
          title: 'Do I really have ownership in the home?',
          description: 'Yes, possessing a Vangow constitutes genuine real estate ownership. When you acquire a share, it is tailored to a specific property, and the residence is meticulously managed and designed for co-ownership.'
        },
        {
          key: 2,
          title: "can I finance my purchase?",
          description: "Yes, we provide integrated financing options for our buyers, and they also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 3,
          title: "what is a prospect listing?",
          description: "A Prospect is a whole home listing that we believe will be in demand based on its price, location, style and amenities. If there's enough interest in the home from Vangow buyers, we may purchase the property and turn it into a Vangow."
        },
        {
          key: 4,
          title: "what is a coming soon listing?",
          description: "Coming Soon listings are Vangow homes currently under contract that will be available for co-ownership soon. Some listing details may be incomplete and pricing is estimated. Once the home is ready to be sold, this listing status will change to “Available Now.”"
        },
        {
          key: 5,
          title: "what is a prospect listing?",
          description: "A Prospect is a whole home listing that we believe will be in demand based on its price, location, style and amenities. If there's enough interest in the home from Vangow buyers, we may purchase the property and turn it into a Vangow."
        },
        {
          key: 6,
          title: "what is a coming soon listing?",
          description: "Coming Soon listings are Vangow homes currently under contract that will be available for co-ownership soon. Some listing details may be incomplete and pricing is estimated. Once the home is ready to be sold, this listing status will change to “Available Now.”"
        },
        {
          key: 7,
          title: "does this work like a regular real estate transaction?",
          description: "Yes. The legal forms and closing process are similar to a standard home purchase. We partner with local real estate agents and pay buyer's agent commissions."
        },
        {
          key: 8,
          title: "how do i schedule time to enjoy my home?",
          description: "You book time using the Vangow app, powered by our SmartStay™ scheduling system. It s easy to use and equitable for owners, based on the number of shares you own. The system supports two types of stays: advance and short-notice. Advance stays are scheduled 8 days to 24 months in advance, and each owner has access to an advance stay that falls on a special date (e.g., federal holidays and popular local events). Short-notice stays are booked 2 to 30 days in advance of arrival. (Note: For homes with unsold shares, the short-notice booking window is 2-7 days in advance of arrival.) See additional scheduling FAQs for more details."
        },
        {
          key: 9,
          title: "is vangow a timeshare or fractional company?",
          description: "Vangow helps people buy, own and enjoy a true real estate asset. Most timeshares, in contrast, sell the right to use a fixed amount of time in a condo or hotel shared by dozens of people. These units are notoriously hard to sell due to a supply and demand imbalance. Vangow brings together a small group of co-owners to purchase a share of a single-family home and enjoy ongoing access. Vangow handles all management details, provides full transparency on LLC operating expenses, and facilitates a seamless resale on the open market once homes have been fully sold."
        },
        {
          key: 10,
          title: "what monthly costs will i have to pay as an owner?",
          description: "Home operating costs, such as property management, maintenance, taxes and repairs, are passed along directly to owners transparently with no markup. Costs are shared pro rata. Owners pay an additional $99 monthly fee which covers LLC oversight, ongoing owner support, and the technology that enhances your owner experience."
        },
        {
          key: 11,
          title: "apart from the vangow app, what services does vangow provide after the sale is closed?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 12,
          title: "can owners rent out their time on airbnb or similar sites?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 13,
          title: "does vangow manage each home directly?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 14,
          title: "will i get to meet the other owners?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 15,
          title: "do i need an agent to buy a vangow?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 16,
          title: "who furnishes the home?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 17,
          title: "what if one of my co-owners misses a payment, or gets behind on their bills?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 18,
          title: "what if another owner damages the home?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 19,
          title: "what if i want to sell my ownership interest in the home?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 20,
          title: "can i keep personal items at my home?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 21,
          title: "can i bring pets to the home?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 22,
          title: "What Vangow policies must owners adhere to?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
        {
          key: 23,
          title: "Who will be responsible for lawn and home maintenance?",
          description: "Yes, we provide integrated financing options for our buyers, and they are also free to utilize alternative sources of capital, such as home equity financing or cash."
        },
      ]
    },
    {
      key: 2,
      title: "Scheduling"
    },
    {
      key: 3,
      title: "Financing"
    },
    {
      key: 4,
      title: "Ownership"
    },
    {
      key: 5,
      title: "Selling"
    },
    {
      key: 6,
      title: "Swap"
    },
    {
      key: 7,
      title: "Real Estate Agents"
    },
    {
      key: 8,
      title: "Neighbors"
    }
  ]

  useEffect(() => {
    
    const handleScroll = () => {
      
      if (window.scrollY <= 300) {
        setHeaderPosition(true)
      }else{
        setHeaderPosition(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <main className="text-secondary font-abc mx-auto">
      <header  className="mt-32 px-4 ">
        <div className="md:border-b-[1px] border-secondary flex justify-between gap-4 flex-col items-center text-center md:text-left md:flex-row pb-8 md:pb-16">
          <h1 className="font-made-outer text-3xl md:text-7xl">FAQs</h1>
          <p className="w-[200px]">A concise guide addressing common queries, providing quick answers to streamline your understanding and enhance your experience with Vangow</p>
        </div>
      </header>
      <article className="relative flex flex-col md:flex-row gap-8 px-4 py-16">
        <div className="md:w-1/4 relative">
          <nav className={`md:sticky ${ headerPosition ? 'sticky' : 'fixed top-16'}  overflow-x-auto categories_scroll bg-[#f9f9f9] md:bg-white left-0  md:top-24 gap-4 md:gap-0 p-4 flex md:flex-col items-start text-left w-full md:w-auto z-10`}>
            {buttons.map(button => (
              <button className={` flex-shrink-0 md:flex-shrink px-4 py-2 md:text-3xl font-abc-bold hover:scale-105 transition-all hover:text-secondary md:text-[#001925]/30 ${selectedButton === button.title ? '!text-secondary md:border-none border-[1px] border-secondary rounded-2xl' : ''}`} key={button.key} onClick={() => {
                setSelectedButton(button.title)
                window.scrollTo({
                  top:350,
                  behavior: 'smooth'
                })
              } }>{button.title}</button>
            ))}
          </nav>
        </div>

        <section ref={header} className={`grow  md:mt-0 ${ headerPosition ? '' : 'mt-24' }`}>
          <ContentItem items={buttons.find(button => button.title === selectedButton)?.questions} />
        </section>
      </article>
      <GetInTouch />
    </main>
  )
}

function ContentItem({ items }) {
  return (
    <section>
      {
        items && items.length > 0 ?
          items.map(item => (
            <AccordionItem key={item.key} title={item.title}>
              <p>{item.description}</p>
            </AccordionItem>
          ))
          : ''
      }

    </section>
  )
}