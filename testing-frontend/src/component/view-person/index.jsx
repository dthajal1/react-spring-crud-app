import React, { Component } from 'react'
import PeopleService from '../../services/PeopleService'

class ViewPerson extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // get the id from the url parameters
            // from localhost:8080/api/people/{id}
             id: this.props.match.params.id,
             person: {}
        }
    }

    // best place to call apis
    componentDidMount() {
        PeopleService.getPersonById(this.state.id).then(res => {
            this.setState({person: res.data})
        })
    }
    
    render() {
        return (
            <div>
                <h1>View Person</h1>
                <h4>{this.state.person.name}</h4>
            </div>
        )
    }
}

export default ViewPerson
