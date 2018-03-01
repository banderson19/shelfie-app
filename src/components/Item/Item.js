import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            item: null,
            name: '',
            price: 0,
            // bin_id: `$this.props.match.params.bin_id`
        }
    }
        componentDidMount =() => {
            console.log(this.props)
        axios({
            method: 'GET',
            url: `http://localhost:3000/api/shelfs/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`
        }).then(response => {
            console.log(this.props.match.params.shelf_id, this.props.match.params.bin_id)
            this.setState({ item: response.data[0], name: response.data[0].item_name, price: response.data[0].item_price}, () => {console.log(this.state.price)});
        })
    }

    addItem = ()=>  {
        // let newItem = {
        //     name: this.ref.name.value,
        //     price: this.ref.price.value
        // };
        console.log(666, this)
        axios({
            method: 'POST',
            url: `http://localhost:3000/api/shelfs/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`
            // data: newItem
        }).then(response => {
            console.log('this added a new car', response)
            this.setState({item: response.data.Item })
        }).catch(err => {
            console.log('this is the error', err)
        })
    }
        
    render() {
        return(
            <div>
            <p>this is the item id= {this.state.name}</p>
                <div className="item-container">
                    <div>
                        <h3>Name</h3>
                        <input className="inputLine" value={this.state.name} ref="name" ></input>
                        <h3>Price</h3>
                        <input className="inputLine" value={this.state.price} ref="price" ></input>
                    </div>
                    <div className="item-container-button">
                        <button className="save-button" onClick={this.addItem}>Save</button>
                        <button className="delete-button">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
