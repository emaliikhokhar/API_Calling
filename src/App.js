import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Posts from './Components/Posts/Posts';
import Albums from './Components/Albums/Albums';
import Comments from './Components/Comments/Comments';
import Intro from './Components/Intro/Intro';

function App() {
  return (
    <div className="App-header">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/comments" component={Comments} />
            <Route exact path="/albums" component={Albums} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;