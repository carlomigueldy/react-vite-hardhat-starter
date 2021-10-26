import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="**" component={NotFoundPage} />
      </Switch>
    </Router>
  )
}

export default App
