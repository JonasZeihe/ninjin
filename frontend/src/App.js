import { Route, Switch } from 'react-router'
import CourseDetails from './pages/CourseDetails'
import CourseOverview from './pages/CourseOverview'
import Login from './pages/Login'
import ProtectedRoute from './auth/ProtectedRoute'
import AuthProvider from './auth/AuthProvider'
import SegmentDetails from './pages/SegmentDetails'

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/home" component={CourseOverview} />
        <ProtectedRoute path="/course/:courseName" component={CourseDetails} />
        <ProtectedRoute
          path="/segment/:segmentName"
          component={SegmentDetails}
        />
      </Switch>
    </AuthProvider>
  )
}

export default App
