import { BrowserRouter, Routes, Route } from "react-router-dom"
import Pricing from "./pages/Pricing"
import Product from './pages/Product'
import Login from "./pages/Login"
import Homepage from "./pages/Homepage"
import PageNotFound from "./pages/PageNotFound"
import AppLayout from "./pages/AppLayout"
import CityList from "./components/CityList"
import { useEffect, useState } from "react"

const BASE_URL = 'http://localhost:9000'

function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState({})

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true)
        const res = await fetch(`${BASE_URL}/cities`)
        const data = await res.json()
        setCities(data)
      } catch {
        alert("there was an error loading data")
      } finally {
        setIsLoading(false)
      }
    }
    fetchCities()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<p>List of countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App