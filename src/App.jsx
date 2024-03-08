import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Learns from "./pages/Learns"
import Header from "./components/Header"
import PageNotFound from "./pages/PageNotFound"
import Footer from "./components/Footer"
import LoginBager from "./components/LoginBager"
import Terms from "./pages/Terms"
import Listings from "./pages/Listings"
import Collections from "./pages/Collections"
import Destinations from "./pages/Destinatations"


export default function App() {

  return (
      <BrowserRouter>
        <Header />
        <LoginBager />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learns" element={<Learns />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}
