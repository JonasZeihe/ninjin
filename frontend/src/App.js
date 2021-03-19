import { Route, Switch } from 'react-router'
import CourseDetails from './pages/CourseDetails'
import CourseOverview from './pages/CourseOverview'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <CourseOverview />
      </Route>
      <Route exact path="/course/:courseName">
        <CourseDetails />
      </Route>
    </Switch>
  )
}

export default App
