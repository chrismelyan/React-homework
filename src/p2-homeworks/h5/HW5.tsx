import React from 'react'
import Header from './Header'
import Body from "./Body";
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>
                <Header/>
                <Body/>
            </HashRouter>
        </div>
    )
}

export default HW5;
