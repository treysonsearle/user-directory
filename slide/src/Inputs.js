import React, {Component} from 'react';
import data from './data';
import Slide from './Slide'


export default  class Inputs extends Component {
    constructor(){
        super()
        this.state = {

        }
    }




    render() {
        return (
            <div className="inputs">
                
                <button className="previous" onClick={this.props.previousFunction}> {`< Previous`} </button>
                <button className="edit"> {`Edit`} </button>
                <button className="delete"> {`Delete`} </button>
                <button className="new"> {`New`} </button>
                <button className="next" onClick={this.props.nextFunction}> {`Next >`} </button>

            </div>
        )
    }
}