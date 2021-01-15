import React, { useContext, useEffect} from 'react';
import {useParams} from "react-router-dom"
import StepContext from "../context/StepContext";
import './assets/css/map.css'
import Cookie from 'js-cookie'
// import firestoreFunctions from '../services/firestoreFunctions'
import firebase from '../firebase';

const Map = () => {
    const pos = ""
    const db = firebase.firestore();
    let [step, setStep] = useContext(StepContext)
    const ID = Cookie.get('playerID');
    const playerP = 'p'+ID;
    let { id } = useParams();

    // ASYNC FUNCTION TO UPDATE DATABASE
    function updateBatch(db, roomID, dataToBatch) {  
        console.log(db);  
        const batch = db.batch();

        const sfRef = db.collection('Room').doc(roomID);
        sfRef.update(dataToBatch);

        batch.commit();
    }

    function playerMove (event) {
        event.preventDefault();
        const newZone = event.currentTarget.id;
        const dataToBatch = {};
        dataToBatch[`player.${playerP}.zone`] = newZone;
        updateBatch(db, id, dataToBatch);
        let characterSelector = document.querySelectorAll('.room');
        characterSelector.forEach(elem => {
            elem.classList.remove('current-pos');
        })
        event.currentTarget.classList.add('current-pos');
    }

    let playersTab = [];
    const checkIfChanged = () => {
        // MISE A JOUR DES AUTRES JOUEURS
        let players = step.player;
        let newPlayersTab = Object.entries(players);
        if(playersTab != newPlayersTab) {
            // SUPPRESSION DES ANCIENNES BULLES
            let rooms = document.querySelectorAll('.room');
            for(let i = 0; i<rooms.length; i++){
                rooms[i].innerHTML = "";
            }

            for(var i = 0; i<newPlayersTab.length; i++) {
                const playerPos = newPlayersTab[i][1].zone;
                const player = newPlayersTab[i][0];
                let parent = document.getElementById(playerPos);
                let div = document.createElement('div');
                div.innerHTML = player;
                if(parent){
                    parent.appendChild(div);
                }
            }
        }
    }

    useEffect(()=>{
        checkIfChanged();
    })

    return(
        <div id="player-map">
            <p class="your-pos">Vous etes en position : {step.player[playerP].zone}</p>
            <div class="room" id="A" onClick={(event) => playerMove(event)}>A</div>
            <div class="room" id="B" onClick={(event) => playerMove(event)}>B</div>
            <div class="room" id="C" onClick={(event) => playerMove(event)}>C</div>
            <div class="room" id="D" onClick={(event) => playerMove(event)}>D</div>
        </div>
    )
}

export default Map;