import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class BinList extends Component {
    constructor() {
        super() 
        this.state = {
            bins: []
        }
    }

    componentDidMount = () => {
        axios({
            method: 'GET',
            url: `http://localhost:3000/api/shelfs/${this.props.match.params.shelf_id}`
        }).then(response => {
            console.log(3333, this.props.match.params.shelf_id, response.data)
            this.setState({bins: response.data})
        })
    }
    
    //5 bins in data base
    //delete clears data and makes it null
    //function () if null = display add bin

    render() {
        return (
            <div>
               {this.state.bins.map( (bin, i) => {
                   return (
                    <div className="Bin-container">
                        <Link to={{pathname: `/shelfs/${bin.bin_name}`}} key={i}> <div>Bin {bin.bin_name} </div> </Link>
                    </div>
                   )
               })}   
           </div>
        )
    }
}