import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            shelfs: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/api/shelfs/'
        }).then(response => {
            console.log(response.data)
            this.setState({shelfs: response.data})
        })
    }

    render() {
        return (
           <div ClassName="App">
               {this.state.shelfs.map( (shelf, i) => {
                   return (
                    <div className="Shelf-container">
                        <Link to={{pathname: `/shelfs/${shelf.shelf_id}`}} key={i}> <div> Shelf {shelf.shelf} </div> </Link>
                    </div>
                   )
               })}
               
           </div>
        )
    }
}