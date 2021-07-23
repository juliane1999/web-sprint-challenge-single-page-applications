import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Home () {
    const history = useHistory()
    const routeToPizza = () => {
        history.push('/pizza')
    }
    return(
        <div id='home'>
            <button id='order-pizza' onClick={routeToPizza}>Order Pizza</button>
        </div>
    )
}