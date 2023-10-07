import logo from './logo.svg';
import './App.css';
import JsonTable from './component/fetch.jsx';
import GetData from './component/getData.jsx';
import FilterData from './component/filterData';
import Login from './component/login';
import Loginp from './component/loginp';
import Fetch from './component/fetch2';
import User from './crudcomponent/user';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      {/* <JsonTable></JsonTable> */}
      {/* <GetData/> */}
      {/* <Login></Login> */}
      {/* <Loginp/> */}
      {/* <Fetch></Fetch> */}
      {/* <FilterData></FilterData> */}
      {/* <User></User> */}
      <Router>
        <Switch>
          <Route path='/' exact component={User}></Route>
      
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
