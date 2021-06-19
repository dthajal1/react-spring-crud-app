import React, { Component } from 'react'
import PeopleService from '../../services/PeopleService.js'

class AddPerson extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: ""
        }
    }

    // must be an arrow function in order for this to work without binding(this) inside constructor
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    savePerson = (e) => {
        e.preventDefault();
        const newPerson = {name: this.state.name}
        // console.log(JSON.stringify(newPerson))
        PeopleService.createPerson(newPerson).then(res => {
            this.props.history.push("/people")
        })
    }

    cancel = () => {
        this.props.history.push("/people")
    }

    render() {
        return (
            <div>
                <h1>Add Person</h1>
                <form action="">
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                    <button onClick={this.savePerson}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default AddPerson
