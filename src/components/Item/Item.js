import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Item extends Component {
    constructor() {
        super() 
        this.state = {
            item: {}
        }

        
    }
    render() {
        return(
            <p> list here </p>
        )
    }
}
