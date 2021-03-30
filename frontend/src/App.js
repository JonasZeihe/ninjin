import { Route, Switch } from 'react-router'
import CourseDetails from './pages/CourseDetails'
import CourseOverview from './pages/CourseOverview'
import Login from './pages/Login'
import ProtectedRoute from './auth/ProtectedRoute'
import AuthProvider from './auth/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/home" component={CourseOverview}/>
        <ProtectedRoute path="/course/:courseName" component={CourseDetails}/>
      </Switch>
    </AuthProvider>
  )
}

export default App
