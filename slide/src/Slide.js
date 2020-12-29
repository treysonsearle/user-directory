import React, {Component} from 'react';
import data from './data';
import Inputs from './Inputs'

export default  class Slide extends Component {
    constructor(){
        super()
        this.state = {
            data: data,
            index: 0,
      
        }

 
    this.handleAdd = this.handleAdd.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)

    }

    handleAdd = () => {
        if(this.state.index < this.state.data.length - 1){
            this.setState({index: this.state.index += 1})
        }  else {
            this.setState({index: this.state.index = 0})
        }
    }

    handlePrevious = () => {
        console.log('hi')
        if(this.state.index === 0){
            this.setState({index: this.state.data.length - 1})
        } else {
            this.setState({index: this.state.index - 1})
        }
    }


    render() {
        let {index, data} = this.state
        let firstName = data[index].name.first
        let lastName = data[index].name.last
        let city = data[index].city
        let country = data[index].country
        let job = data[index].title
        let employer = data[index].employer
        let movie1 = data[index].favoriteMovies[0]
        let movie2 = data[index].favoriteMovies[1]
        let movie3 = data[index].favoriteMovies[2]

        return(

            
            <div className="content">
                <p>{(index + 1)}/{data.length}</p>
                <div className="wrapper">
                    <h1 className="name"> {firstName} {lastName}</h1>
                    <h2 className="bold"> {city}, {country}</h2>
                    <h2 className="bold"> {job}</h2>
                    <h2 className="bold"> {employer}</h2>
                    <ol>
                        <li>{movie1}</li>
                        <li>{movie2}</li>
                        <li>{movie3}</li>
                    </ol>
                    < Inputs 
                            previousFunction={this.handlePrevious}
                            nextFunction={this.handleAdd} />
                </div>
            </div>
        )
    }
}