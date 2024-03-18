import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Learns from "./pages/Learns"
import PageNotFound from "./pages/PageNotFound"
import Terms from "./pages/Terms"
import Listings from "./pages/Listings"
import Collections from "./pages/Collections"
import Destinations from "./pages/Destinatations"
import Scheduling from "./pages/Scheduling"
import Closing from "./pages/Closing"
import Selling from "./pages/Selling"
import Agents from "./pages/Agents"
import About from "./pages/About"
import FAQs from "./pages/FAQs"
import Privacy from "./pages/Privacy"
import CandidatePrivacy from "./pages/CandidatePrivacy"
import Login from "./components/users/Login"
import { useEffect, useState } from "react"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Communities from "./pages/Communities"

export default function App() {
  const [user, setUser] = useState(null)

  



  return (
    <BrowserRouter>
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learns" element={<Learns />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/closing" element={<Closing />} />
        <Route path="/selling" element={<Selling />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/candidate-privacy" element={<CandidatePrivacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </BrowserRouter>
  )
}
