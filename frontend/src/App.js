import { Route, Switch } from 'react-router'
import CourseDetails from './pages/CourseDetails'
import CourseOverview from './pages/CourseOverview'
import Login from './pages/Login'
import ProtectedRoute from './auth/ProtectedRoute'
import AuthProvider from './auth/AuthProvider'
import SegmentDetails from './pages/SegmentDetails'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ElementDetails from './pages/ElementDetails'
import {GridWrapper} from "./components/GlobalStyle";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <GridWrapper>
          <Header />
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/home" component={CourseOverview} />
          <ProtectedRoute
            path="/course/:courseName"
            component={CourseDetails}
          />
          <ProtectedRoute
            path="/segment/:segmentName"
            component={SegmentDetails}
          />
          <ProtectedRoute
            path="/element/:elementName"
            component={ElementDetails}
          />
        </GridWrapper>
      </Switch>
    </AuthProvider>
  )
}

export default App
