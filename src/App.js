import logo from './logo.svg';
import {  BrowserRouter as Router,  Switch,  Route,  Link } from "react-router-dom";
import './App.css';

import Header from './components/header/header';
import Main from './components/main/main';
import Request_manage from './components/request_quote_manage/request_manage';
import Daily_question from './components/daily_question/daily_question';
import Project_list from './components/project_list/project_list';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="A_Container">
            <Switch>
              <Route exact path={["/" , "/home"]}><Main/></Route>
              <Route path="/daily_question"><Daily_question /></Route>
              <Route path="/request_manage"><Request_manage /></Route>
              <Route path="/project_list"><Project_list /></Route>
              <Route><h1>Not Found</h1></Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
