import NavigationBar from './Components/NavigationBar'
import BooksList from './Components/BooksList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BookInfo from './Pages/BookInfo'

function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path='/'>
            <BooksList />
          </Route>
          <Route path='/book/:id' children={<BookInfo/>} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
