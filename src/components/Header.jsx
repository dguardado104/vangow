import { useEffect, useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()
  const { pathname } = location
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const openMenu = e => {
    e.stopPropagation()
    setOpen(true)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const closeMenuWithScrollTop = () => {
    setOpen(false)
    window.scrollTo(0, 0)
  } 

  /* Links URL */

  const items = [
    {
      key: 1,
      label: 'Home',
      url: '/',
      active: pathname != '/' ? false : true
    },
    {
      key: 2,
      label: 'How it works',
      url: '/learns',
      active: pathname != '/learns' ? false : true
    },
    {
      key: 3,
      label: 'Listings',
      url: '/listings',
      active: pathname != '/listings' ? false : true
    },
    {
      key: 4,
      label: 'Contact',
      url: '/contact',
      active: pathname != '/contact' ? false : true
    },
    {
      key: 5,
      label: 'About',
      url: '/about',
      active: pathname != '/about' ? false : true
    },
    {
      key: 6,
      label: (<img src="/icons/user.svg" alt="icon" />),
      url: '/about',
      active: pathname != '/about' ? false : true
    }
  ]

  const itemsNav = [
    {
      key: 1,
      label: 'Discover',
      links: [
        {
          key: 1,
          label: 'Home',
          url: '/',
          active: pathname != '/' ? false : true
        },
        {
          key: 2,
          label: 'How it works',
          url: '/learns',
          active: pathname != '/learns' ? false : true
        },
        {
          key: 3,
          label: 'Listings',
          url: '/listings',
          active: pathname != '/listings' ? false : true
        },
        {
          key: 4,
          label: 'About',
          url: '/about',
          active: pathname != '/about' ? false : true
        },
        {
          key: 5,
          label: 'Collections',
          url: '/collections',
          active: pathname != '/collections' ? false : true
        },
        {
          key: 6,
          label: 'Destinations',
          url: '/destinations',
          active: pathname != '/destinations' ? false : true
        },
        {
          key: 7,
          label: 'Scheduling',
          url: '/scheduling',
          active: pathname != '/destinations' ? false : true
        },
        {
          key: 8,
          label: 'Closing',
          url: '/closing',
          active: pathname != '/closing' ? false : true
        },
      ],
    },
    {
      key: 2,
      label: 'More',
      links: [
        {
          key: 1,
          label: 'Agents',
          url: '/agents',
          active: pathname != '/agents' ? false : true
        },
        {
          key: 2,
          label: 'Selling',
          url: '/selling',
          active: pathname != '/selling' ? false : true
        },
        {
          key: 3,
          label: 'Design Certified homes',
          url: '/design-certified-homes',
          active: pathname != '/design-certified-homes' ? false : true
        },
        {
          key: 4,
          label: 'Second Home Podcast',
          url: '/second-home-podcast',
          active: pathname != '/second-home-podcast' ? false : true
        },
        {
          key: 5,
          label: 'Blog',
          url: '/blog',
          active: pathname != '/blog' ? false : true
        },
        {
          key: 6,
          label: 'Communities',
          url: '/communities',
          active: pathname != '/communities' ? false : true
        }
      ],
    },
    {
      key: 3,
      label: 'Support',
      links: [
        {
          key: 1,
          label: 'FAQs',
          url: '/faqs',
          active: pathname != '/faqs' ? false : true
        },
        {
          key: 2,
          label: 'Terms',
          url: '/terms',
          active: pathname != '/terms' ? false : true
        },
        {
          key: 3,
          label: 'Privacy',
          url: '/privacy',
          active: pathname != '/privacy' ? false : true
        },
        {
          key: 4,
          label: 'Cookies',
          url: '/cookies',
          active: pathname != '/cookies' ? false : true
        },
        {
          key: 5,
          label: 'Candidate privacy',
          url: '/candidate-privacy',
          active: pathname != '/candidate-privacy' ? false : true
        },
      ],
    },
  ]

  useEffect(() => {
    const handleClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("click", handleClick)
    }

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [open])

  const shadow = {
    WebkitBoxShadow: "inset 0 50px 25px -10px rgba(0,0,0,0.7)",
    boxShadow: "inset 0 50px 25px -10px rgba(0,0,0,0.7)"
  }

  return (
    <header style={shadow} id="header-nav" className={` font-abc fixed w-full top-0 shadow-inner z-40 flex justify-between py-4 md:py-5 px-4 md:px-16 xl:px-32 transition-all duration-300 ${open ? 'after:w-full after:h-screen after:bg-black/30 after:fixed after:top-0 after:left-0' : ''}`}>
      <a href="/" className="block">
        <img src="/logo.svg" alt="image" />
      </a>
      <div className="flex gap-24 items-center ">
        <nav className="hidden gap-16 items-center lg:flex">
          {
            items.length > 0 ?
              items.slice(0, 6).map(item => {
                if (item.url != '/') {
                  return <Link to={item.url} className={` text-white  ${item.active ? '' : ''}`} key={item.key}>{item.label}</Link>
                }
              })
              : ''
          }
        </nav>
        <button className="hover:scale-105 transition-all" onClick={openMenu}>
          <img src="/icons/menu-burger.svg" alt="icon" />
        </button>
        <div ref={menuRef} className={`bg-white absolute z-10 top-0 right-0 transition-all duration-300 overflow-hidden flex flex-col shadow-xl h-screen ${open ? 'w-[90%] md:w-[40%] xl:w-[20%]' : 'w-0'} `}>
          <button className="self-end top-4 right-3 absolute hover:scale-105 transition-all" onClick={closeMenu}>
            <img src="/icons/close.svg" alt="icon" />
          </button>
          <nav className="flex flex-col p-16 overflow-y-auto">
            <span className="text-primary font-bold">SIGN UP / SIGN IN</span>
            {
              itemsNav.length > 0 ?
                itemsNav.map(item => (
                  <div className="flex flex-col" key={item.key}>
                    <span className="font-semibold mt-5 mb-2">{item.label}</span>
                    {
                      item.links.map(link => (
                        <Link to={link.url} onClick={closeMenuWithScrollTop} className=" block hover:text-lg transition-all mb-1" key={link.key}>{link.label}</Link>
                      ))
                    }
                  </div>
                ))
                : ''
            }
          </nav>
        </div>
      </div>
    </header>
  )
}