import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import Login from './Components/Login';
function App() {
  
  return (
    <div className="App">
      App
    <Routes>
      <Route path="/" >
        <Route path="/" element={ <MainComponent />}/>
        <Route path="/login" element = {<Login />} />
      </Route>
  </Routes>
    </div>
  );
}

export default App;
