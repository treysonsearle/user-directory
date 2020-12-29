import React, {Component} from 'react';
import data from './data';

export default  class Header extends Component {
    constructor(){
        super()
        this.state = {

        }
    }


    render() {
        return(
            <header><h1>{`Home`}</h1></header>
        )
    }
}