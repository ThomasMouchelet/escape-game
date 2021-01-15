import firebase from 'firebase';
import Loader from './Loader';
import Content from './Content';
import React, {useEffect, useState, useContext } from "react"
import {useParams, useHistory} from "react-router-dom"
import StepContext from "../context/StepContext";
import Cookie from 'js-cookie';

const GamePage = () => {
    const playerID = Cookie.get('playerID');
    let { id } = useParams()
    let [step, setStep] = useContext(StepContext);
    const history = useHistory();

    const isReady = () => {
        if(step.isReady){
            if(step.hasBegin != true){
                return history.replace("/room/" + id);
            }
            var loader = document.getElementById('loader');
            return (
                launchRoom()
            )
        }
    }

    const launchRoom = () => {
        return (
            <Content></Content>
        )
    }

    function requestDB() {
        const db = firebase.firestore();
        const doc = db.collection('Room').doc(id)
        doc.onSnapshot(snapshot => {
            step = setStep(snapshot.data());
        });
      }

    useEffect( () => {
        step = [];
        requestDB();
    }, [])
      
    return (
        <div id="root-container">
            {isReady()}
        </div>
    )
}

export default GamePage