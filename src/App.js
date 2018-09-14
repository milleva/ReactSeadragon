import React, { Component } from 'react';
import OpenDragon from './Dragon'
import './Dragon.css';

class App extends React.Component {
    constructor(props) {super(props);}
    render() {
        return <div className = "app">
            <OpenDragon image="https://images.adsttc.com/media/images/5936/ce17/e58e/ceae/5a00/0202/large_jpg/Helsinki_Airport_T2_visualisation_01_aerial_view_winter.jpg?1496763920" />
        </div>;
    }
}

export default App;


