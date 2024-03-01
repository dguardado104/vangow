import { Link } from "react-router-dom";

export default function Footer() {

  const items = [
    {
      key: 1,
      title: 'Offerings',
      links: [
        {
          key: 1,
          label: 'Learn',
          url: '/learn'
        },
        {
          key: 2,
          label: 'Listings',
          url: '/listings'
        }
      ]
    },
    {
      key: 2,
      title: 'About',
      links: [
        {
          key: 1,
          label: 'Our story',
          url: '/out-story'
        }
      ]
    },
    {
      key: 3,
      title: 'Support',
      links: [
        {
          key: 1,
          label: 'FAQs',
          url: '/faqs'
        },
        {
          key: 2,
          label: 'Contact',
          url: '/contact'
        }
      ]
    }
  ]

  const socialLinks = [
    {
      key: 1,
      label: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
        <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path d="M16.5 7.5l0 .01" />
      </svg>),
      url: '#'
    },
    {
      key: 2,
      label: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
        <path d="M8 11l0 5" />
        <path d="M8 8l0 .01" />
        <path d="M12 16l0 -5" />
        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
      </svg>),
      url: '#'
    },
    {
      key: 3,
      label: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>),
      url: '#'
    },
    {
      key: 4,
      label: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
        <path d="M10 9l5 3l-5 3z" />
      </svg>),
      url: '#'
    },
    {
      key: 5,
      label: (<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 20l4 -9" />
        <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>),
      url: '#'
    }
  ]

  return (
    <footer className=" bg-slate-600 text-white">
      <div className="px-4 md:px-16 xl:px-32">
        <section className="flex flex-col md:flex-row gap-8 justify-between pt-8">
          <div className="flex flex-col items-center">
            <span className="font-medium">SIGN UP, GET MORE</span>
            <span>Unlock exclusive features & receive updates</span>
            <div className="flex mt-6">
              <input type="email" placeholder="Email" className="pl-4 text-black outline-none" />
              <button className="bg-blue-400 p-4 py-2 font-medium hover:bg-blue-500 transition-colors">UNLOCK</button>
            </div>
          </div>
          <MultipleLinks items={items} />
        </section>
        <section>
          <nav className="flex md:w-1/2 gap-4 py-8">
            {
              socialLinks.map(link => (
                <a href={link.url} key={link.key} className="hover:scale-105 transition-all">{link.label}</a>
              ))
            }
          </nav>
        </section>
        <section className="pb-8 flex items-center justify-center">
            <span>&copy; 2024 Vangow. All Rights Reserved</span>
        </section>
      </div>
    </footer>
  )
}

function MultipleLinks(props) {
  const { items } = props

  return (
    <div className="flex flex-wrap gap-24">
      {
        items.map(item => (
          <div key={item.key}>
            <span className="uppercase font-medium">Offerings</span>
            <nav className="flex flex-col gap-4 mt-6">
              {
                item.links.map(link => (
                  <Link to={link.url} key={link.key} className="hover:scale-105 transition-all">{link.label}</Link>
                ))
              }
            </nav>
          </div>
        ))
      }
    </div>
  )

}
