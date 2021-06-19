import React, { Component } from 'react'
import PeopleService from '../../services/PeopleService'

class ListPeople extends Component {

    constructor(props) {
        super(props)
        this.state = {
            people: []
        }
    }

    componentDidMount() {
        PeopleService.getPeople().then((response) => {
            this.setState({people: response.data})
        })
    }

    addPerson = () => {
        // route to add person page
        this.props.history.push("/add-or-update-person/_add")
    }

    editPerson = (id) => {
        // route to update person page
        this.props.history.push(`/add-or-update-person/${id}`)
    }

    deletePerson = (id) => {
        PeopleService.deletePerson(id).then(res => {
            // can also call rest api but can improving by simply filtering out the deleted person
            this.setState({people: this.state.people.filter((person) => person.id !== id)})
        })
    }

    viewPerson = (id) => {
        this.props.history.push(`view-person/${id}`)
    }

    render() {
        return (
            <div>
                <h1>List of People</h1>
                {this.state.people.map((person) => {
                    return <div key={person.id}>
                                <p><span>{person.id}. </span>{person.name} 
                                    <span>
                                        <button onClick={() => this.editPerson(person.id)}>Update</button>
                                        <button onClick={() => this.deletePerson(person.id)}>Delete</button>
                                        <button onClick={() => this.viewPerson(person.id)}>View</button>
                                    </span>
                                </p>
                            </div>
                })}
                <button type="button" onClick={this.addPerson}>Add New Person</button>
            </div>
        )
    }
}

export default ListPeople
