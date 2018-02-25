import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Item extends Component {
    constructor() {
        super() 
        this.state = {
            item: {}
        }
    }
        componentDidMount =() => {
        axios({
            method: 'GET',
            url: `http://localhost:3000/api/shelfs/${this.props.match.params.shelf_id}/${this.props.match.params.bin_name}`
        }).then(response => {
            console.log(response)
        })
    }
        
    render() {
        return(
            <p>item here</p>
            // <div className="item_container">
            
            // </div>
        )
    }
}
