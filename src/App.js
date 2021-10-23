import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Registar from './components/Registar';
import Services from './components/Services';
import Login from './login/Login';
import Nav from './nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <BrowserRouter>
        <Switch>
        <Route path="/header">
          <Header></Header>
        </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path='/login'>
          <Login></Login>

        </Route>
        <Route path='/registar'>
          <Registar></Registar>

        </Route>
        
      </Switch>
      
      
      
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
