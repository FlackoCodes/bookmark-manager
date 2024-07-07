import { Analytics } from "@vercel/analytics/react"
import NavBar from "./components/NavBar"
import CallToAct from "./components/CallToAct"
import Features from "./components/Features"
import Extensions from "./components/Extensions"
import FAQ from "./components/FAQ"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <NavBar />
    <CallToAct />
    <Features />
    <Extensions />
    <FAQ />
    <Footer />
    <Analytics />
    </>
  )
}

export default App
