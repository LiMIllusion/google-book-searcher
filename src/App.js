import NavigationBar from './Components/NavigationBar'
import BooksList from './Components/BooksList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/'>
            <BooksList />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
