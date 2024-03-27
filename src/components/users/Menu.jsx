import { Link, useLocation } from "react-router-dom"

export default function Menu() {

  const location = useLocation()
  const { pathname } = location

  const buttons = [
    {
      key: 1,
      label: "My profile",
      url: '/users/profile',
      active: pathname != '/users/profile' ? false : true
    },
    {
      key: 2,
      label: "Shopping preferences",
      url: '/users/shopping',
      active: pathname != '/users/shopping' ? false : true
    },
    {
      key: 3,
      label: "favorite homes",
      url: '/users/favorites',
      active: pathname != '/users/favorites' ? false : true
    },
    {
      key: 4,
      label: "Settings",
      url: '/users/settings',
      active: pathname != '/users/settings' ? false : true
    }
  ]
  return (
    <nav className={`md:sticky hidden overflow-x-auto categories_scroll bg-[#f9f9f9] md:bg-white left-0  md:top-24 gap-4 md:gap-0 p-4 md:flex md:flex-col items-start text-left w-full md:w-auto z-10`}>
      {buttons.map(button => (
        <Link className={` flex-shrink-0 md:flex-shrink px-4 py-2 md:text-3xl hover:scale-105 transition-all hover:text-secondary md:text-[#001925]/30 ${button.active ? '!text-secondary font-bold hover:scale-100' : '' } `} key={button.key} onClick={() => {
          window.scrollTo({
            top: 350,
            behavior: 'smooth'
          })
        }}>{button.label}</Link>
      ))}
    </nav>
  )
}