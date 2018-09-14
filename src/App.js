import React, { Component } from 'react';
import OpenDragon from './Dragon'
import './Dragon.css';

import airport from "./airport.png"

class App extends React.Component {
    constructor(props) {super(props);}
    render() {
        return <div className = "app">
            <OpenDragon image={airport} />
        </div>;
    }
}

export default App;


