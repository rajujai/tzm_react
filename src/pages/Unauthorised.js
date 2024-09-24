import { Link } from 'react-router-dom'

export default function Unauthorised() {
  return (
    <div>
      <div>Unauthorised Access</div>
      <div>Please login to view this page</div>
      <Link to="/login">Login</Link>
    </div>
  )
}
