import React, { Component } from 'react'
import PeopleService from '../../services/PeopleService'

class UpdatePerson extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: ""
        }
    }

    componentDidMount() {
        PeopleService.getPersonById(this.state.id).then(res => {
            const oldPerson = res.data;
            this.setState({name: oldPerson.name})
        })
    }

    // must be an arrow function in order for this to work without binding(this) inside constructor
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    updatePerson = (e) => {
        e.preventDefault();
        const newPerson = {name: this.state.name}
        // console.log(JSON.stringify(newPerson))
        PeopleService.updatePerson(this.state.id, newPerson).then(res => {
            this.props.history.push("/people")
        })
    }

    cancel = () => {
        this.props.history.push("/people")
    }

    render() {
        return (
            <div>
                <h1>Update Person</h1>
                <form action="">
                    <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                    <button onClick={this.updatePerson}>Save</button>
                    <button onClick={this.cancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default UpdatePerson
