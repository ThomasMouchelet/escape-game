import React, { useContext} from 'react';
import StepContext from "../context/StepContext";
import {useParams} from "react-router-dom"
import './assets/css/content.css'
import Map from './Map.js'
import Glitch from './Glitch';

const Content = () => {
    let { id } = useParams()
    let [step, setStep] = useContext(StepContext)

    return (
        <div class="content">
            <Map></Map>
            <Glitch></Glitch>
        </div>
    )
}

export default Content;