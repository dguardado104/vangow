import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Header from "./components/Header"
import PageNotFound from "./pages/PageNotFound"
import Footer from "./components/Footer"


export default function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}
