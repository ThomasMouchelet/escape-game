import React, { useContext } from 'react';
import firestoreFunctions from '../services/firestoreFunctions';
import {useHistory} from 'react-router-dom'
import StepContext from "../context/StepContext";
import './assets/css/home.css'
import Cookies from 'js-cookie';

const  Home = () => {
    const history = useHistory();
    // const{step, setStep} = useContext(StepContext)

    const CreateRoom = () => {
        Cookies.remove('playerID');
        const newRoom = firestoreFunctions.firebaseCreateRoom();
        history.push("/room/" + newRoom);
    }

    const JoinRoom = () => {
        var room = document.getElementById('room-number').value;
        history.push("/room/" + room);
    }

    return (
        <div id="room-form-container">
            <div class="room-form-container-infos">
                <div class="logo">Home Invader</div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id corrupti, ea nemo labore mollitia unde repellat omnis qui dolores</p>
            </div>
            <div class="form">
                <form>
                    <div class="join-room">
                        <input type="text" id="room-number"></input>
                        <input type="submit" value="join" onClick={JoinRoom}></input>
                    </div>
                    <button onClick={CreateRoom}>Créer une room</button>
                </form>
            </div>
        </div>
    )
    
}

export default Home;