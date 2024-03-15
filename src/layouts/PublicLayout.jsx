import Header from "../components/Header"
import Footer from "../components/Footer"

export default function PublicLayout({ children, headerAnimation }) {
  return (
    <>
      <Header headerAnimation={headerAnimation} />
      {children}
      <Footer />
    </>
  )
}