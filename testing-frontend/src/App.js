import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListPeople from "./component/list-people/index";
import AddPerson from "./component/add-person/index";
import UpdatePerson from "./component/update-person";
import AddOrUpdatePerson from "./component/add-or-update-person";
import ViewPerson from "./component/view-person";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={ListPeople}></Route>
            <Route path="/people" component={ListPeople}></Route>
            <Route path="/add-or-update-person/:id" component={AddOrUpdatePerson}></Route>
            <Route path="/view-person/:id" component={ViewPerson}></Route>
            {/* :id <-- dynamic value */}
            {/* <Route path="/update-person/:id" component={UpdatePerson}></Route> */}
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("name", name);
  //   axios.post(`${peopleAPI}/new`, formData);
  //   setName("");
  // }
