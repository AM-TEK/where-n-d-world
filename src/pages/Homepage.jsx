import { Link } from "react-router-dom"
import PageNav from "../components/PageNav"

export default function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>Where-N-D-World</h1>
      
      <Link to='/Pricing'>Pricing</Link>
      
    </div>
  )
}
