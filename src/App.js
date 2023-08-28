import './App.css';
import {Routes, Route, Outlet} from 'react-router-dom';
import MainComponent from './Components/MainComponent';
import Login from './Components/Login';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';



const server = 'http://localhost:5000';
const connectionOptions = {
  "force new connection" : true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"]
}
const socket = io(server,connectionOptions);

function App() {
  const [roomData,setRoomData] = useState({});
  const uuid = () => {
    let s4 = () => {
      return (((1+Math.random())*0x10000) | 0 ).toString(16).substring(1);
    }
    return (
      s4() +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      "-" +
      s4() +
      s4() +
      s4() 
    );
  }
  useEffect(()=> {
    socket.on("UserIsJoined", (data) => {
      if(data.success) {
        console.log("User Joined")
      } else{
        console.log("Something went wrong");
      }
    })
  },[])
  return (
    <div className="App">
      App
    <Routes>
      <Route path="/" >
        <Route path="/" element={ <MainComponent />}/>
        <Route path="/:roomId" element={ <MainComponent roomData={roomData} socket={socket}/>} />
        <Route path="/login" element = {<Login uuid={uuid} socket={socket} setRoomData={setRoomData}/>} />
      </Route>
  </Routes>
    </div>
  );
}

export default App;
