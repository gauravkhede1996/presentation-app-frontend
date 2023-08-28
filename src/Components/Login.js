import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom'
import { TextField } from '@mui/material';
import React, { useState } from 'react';

function Login(props) {
    const navigate = useNavigate();
    const {uuid,socket, setRoomData} = props;
    const [roomId, setRoomId] = useState(uuid());
    const [name, setName] = useState('');
    const [joinName,setJoinName] = useState('');
    const [joinedRoomId, setJoinedRoomId] = useState('');
    const handleCreateRoom = (e) => {
        e.preventDefault();
        const roomData =  {
            name,
            roomId,
            userId: uuid(),
            host: true,
            presenter: true
        }
        navigate(`/${roomId}`)
        setRoomData(roomData);
        socket.emit("userJoined", roomData);
    }
    const handleJoinRoom = (e) => {
        e.preventDefault();
        const roomData =  {
            name:joinName,
            roomId:joinedRoomId,
            userId: uuid(),
            host: false,
            presenter: false
        }
        navigate(`/${joinedRoomId}`)
        setRoomData(roomData);
        socket.emit("userJoined", roomData);
    }
    return (
        <div className='createJoinRoomContainer'>
        <div className='Login-Container'>
            <div className='Login-Form'>
            <TextField id="standard-basic" label="UserName" variant="standard" onChange={(e) => setName(e.target.value)}/>
            <TextField id="standard-basic2" label="RoomId" variant="standard" value={roomId}/>
            <Button variant="contained" onClick={handleCreateRoom}>Create Room</Button>
            </div>
        </div>
        <div className='Login-Container'>
            <div className='Login-Form'>
            <TextField id="standard-basic3" label="UserNameJoin" variant="standard" value={joinName} onChange={(e) => {setJoinName(e.target.value)}}/>
            <TextField id="standard-basic4" label="RoomId" variant="standard" value={joinedRoomId} onChange={(e) => setJoinedRoomId(e.target.value)}/>
            <Button variant="contained" onClick ={ handleJoinRoom}>Join Room</Button>
            </div>
        </div>
        </div>
    );
}

export default Login;