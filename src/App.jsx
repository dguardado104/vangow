import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Learns from "./pages/Learns"
import PageNotFound from "./pages/PageNotFound"
import LoginBager from "./components/LoginBager"
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

export default function App() {

  return (
      <BrowserRouter>
        
        <LoginBager />
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        
      </BrowserRouter>
  )
}
