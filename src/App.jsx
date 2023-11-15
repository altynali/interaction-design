import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { Layout } from "./components/layout/Layout"
import { Loader } from "./components/loader/Loader"
import Advertisement from "./pages/advertisement/Advertisement"
import Home from "./pages/home/Home"
import YourLevel from "./pages/yourLevel/YourLevel"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import SocialMedia from "./pages/socialMedia/SocialMedia"
import AdvertisementList from "./pages/advertisementList/AdvertisementList"

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <main>
          <Routes>
            {/* sem pridavame stranky co chceme */}
            <Route path="/" element={<Home />} />
            <Route path="/:instrument" element={<YourLevel />} />
            <Route path="/:instrument/:level" element={<AdvertisementList />} />
            <Route
              path="/advertisement/:id/:instrument/:level"
              element={<Advertisement />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/socialMedia" element={<SocialMedia />} />
          </Routes>
        </main>
      </Suspense>
    </Layout>
  )
}

export default App
