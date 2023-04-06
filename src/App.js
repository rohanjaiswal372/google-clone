import logo from './logo.svg';
import './App.css';
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Outlet } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Outlet />
    </div>
  );
}

export default App;
