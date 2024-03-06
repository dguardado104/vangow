import { Link } from "react-router-dom";

export default function Footer() {

  const items = [
    {
      key: 1,
      title: 'About',
      links: [
        {
          key: 1,
          label: 'Agents',
          url: '/agents'
        },
        {
          key: 2,
          label: 'Our story',
          url: '/our-story'
        },
        {
          key: 3,
          label: 'Communities',
          url: '/communities'
        }
      ]
    },
    {
      key: 2,
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
        },
        {
          key: 3,
          label: 'Collections',
          url: '/collections'
        },
        {
          key: 4,
          label: 'Destinations',
          url: '/destinations'
        },
        {
          key: 5,
          label: 'Scheduling',
          url: '/scheduling'
        },
        {
          key: 6,
          label: 'Closing',
          url: '/closing'
        },
        {
          key: 7,
          label: 'Selling',
          url: '/selling'
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
          label: 'Resources',
          url: '/resources'
        },
        {
          key: 3,
          label: 'Blog',
          url: '/blog'
        },
        {
          key: 4,
          label: 'Contact',
          url: '/contact'
        },
        {
          key: 5,
          label: 'Terms',
          url: '/terms'
        },
        {
          key: 6,
          label: 'Privacy',
          url: '/privacy'
        },
        {
          key: 7,
          label: 'Candidate privacy',
          url: '/candidate-privacy'
        }
      ]
    }
  ]

  const socialLinks = [
    {
      key: 1,
      label: (<img src="/icons/facebook.svg" />),
      url: '#'
    },
    {
      key: 2,
      label: (<img src="/icons/twitter-x.svg" />),
      url: '#'
    },
    {
      key: 3,
      label: (<img src="/icons/instagram.svg" />),
      url: '#'
    },
    {
      key: 4,
      label: (<img src="/icons/linkedin.svg" />),
      url: '#'
    },
    {
      key: 5,
      label: (<img src="/icons/youtube.svg" />),
      url: '#'
    },
    {
      key: 6,
      label: (<img src="/icons/pinterest.svg" />),
      url: '#'
    },
    {
      key: 7,
      label: (<img src="/icons/threads.svg" />),
      url: '#'
    },
    {
      key: 8,
      label: (<img src="/icons/whatsapp.svg" />),
      url: '#'
    }
  ]

  return (
    <footer className=" bg-primary text-white font-abc">
      <div className="px-4 md:px-16 xl:px-32">
        <section className="flex flex-col md:flex-row gap-8 justify-between pt-8">
          <MultipleLinks items={items} />
          <div className="w-full border-[1px] md:hidden"></div>
          <section>
            <div className="flex gap-4 items-center">
              <img src="/key.webp" />
              <span className="text-3xl">Connect with <br /> Vangow</span>
            </div>
            <div className="flex gap-4 my-4">
              <a href="#">
                <img src="/icons/ios.svg" alt="" width="140px" className="hover:scale-105 transition-all" />
              </a>
              <a href="#">
                <img src="/icons/play.svg" alt="" width="160px" className="hover:scale-105 transition-all" />
              </a>
            </div>
            <nav className="flex gap-4 py-8">
            {
              socialLinks.map(link => (
                <a href={link.url} key={link.key} className="hover:scale-105 transition-all">{link.label}</a>
              ))
            }
          </nav>
          </section>
        </section>
        
      </div>
      <section className="p-4 flex items-center text-secondary justify-end bg-primary-strong">
            <span className="font-medium">&copy; 2024 Vangow. All Rights Reserved</span>
        </section>
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
            <span className="font-bold">{item.title}</span>
            <nav className="flex flex-col gap-2 mt-4">
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
