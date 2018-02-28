import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            item: null,
            name: '',
            price: 0
        };
    }
        componentDidMount =() => {
        axios({
            method: 'GET',
            url: `http://localhost:3000/api/shelfs/${this.props.match.params.shelf_id}/${this.props.match.params.bin_name}`
        }).then(response => {
            console.log(response.data)
            this.setState({ item: response.data, name: response.data.item_name, price: response.data.price});
            console.log(this.state.name)
        })
    };
        
    render() {
        return(
            <div>
            <p>this is the item id= {this.state.name}</p>
                <div className="item-container">
                    <input className="inputLine" placeholder={this.state.name}></input>
                </div>
            </div>
        )
    }
}
