import "./App.css"
import { Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { Layout } from "./components/layout/Layout"
import { Loader } from "./components/loader/Loader"
import Dashboard from "./pages/dashboard/Dashboard"

function App() {
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
