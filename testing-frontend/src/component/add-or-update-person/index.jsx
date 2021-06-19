import React, { Component } from 'react'
import PeopleService from '../../services/PeopleService.js'

class AddOrUpdatePerson extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: ""
        }
    }

    componentDidMount() {
        if (this.state.id !== "_add") {
            PeopleService.getPersonById(this.state.id).then(res => {
                const oldPerson = res.data;
                this.setState({name: oldPerson.name})
            })
        }
        
    }

    // must be an arrow function in order for this to work without binding(this) inside constructor
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    saveOrUpdatePerson = (e) => {
        e.preventDefault();
        const newPerson = {name: this.state.name}
        // console.log(JSON.stringify(newPerson))
        if (this.state.id === "_add") {
            PeopleService.createPerson(newPerson).then(res => {
                this.props.history.push("/people")
            })
        } else {
            PeopleService.updatePerson(this.state.id, newPerson).then(res => {
                this.props.history.push("/people")
            })
        }
        
    }

    cancel = () => {
        this.props.history.push("/people")
    }

    render() {
        return (
            <div>
                <h1>{this.state.id === "_add" ? "Add Person" : "Update Person"}</h1>
                <form action="">
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                    <button onClick={this.saveOrUpdatePerson}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default AddOrUpdatePerson
