import axios from 'axios';

const PEOPLE_REST_API_BASE_URL = "http://localhost:8080/api/people"; // making request to the API we created earlier


class PeopleService {

    getPeople() {
        return axios.get(PEOPLE_REST_API_BASE_URL);
    }

    createPerson(person) {
        return axios.post(PEOPLE_REST_API_BASE_URL, person)
    }

    getPersonById(id) {
        return axios.get(PEOPLE_REST_API_BASE_URL + "/" + id);
    }

    updatePerson(id, person) {
        return axios.put(PEOPLE_REST_API_BASE_URL + "/" + id, person);
    }

    deletePerson(id) {
        return axios.delete(PEOPLE_REST_API_BASE_URL + "/" + id)
    }
}

export default new PeopleService();
