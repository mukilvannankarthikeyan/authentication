// Write your JS code here
import {Redirect, Route} from 'route-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const JWTToken = Cookies.get('jwt_token')
  if (JWTToken === undefined) {
    return <Redirect to="/Login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
